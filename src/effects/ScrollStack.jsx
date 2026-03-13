import { useCallback, useLayoutEffect, useRef } from 'react';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full min-h-80 my-8 p-10 md:p-14 rounded-[32px] glass border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] box-border origin-top will-change-transform hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-[shadow] duration-500 overflow-hidden ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {/* Decorative inner glow/glass reflection effect */}
    <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/5 pointer-events-none" />
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 pointer-events-none" />
    <div className="relative z-10 w-full h-full">
      {children}
    </div>
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lerpFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const targetTransformsRef = useRef(new Map());
  const currentTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const lerpTransformsLoop = useCallback(() => {
    if (!cardsRef.current.length) return;
    const lerpFactor = 0.12;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      const target = targetTransformsRef.current.get(i);
      const current = currentTransformsRef.current.get(i);
      
      if (!target || !current) return;

      const hasChanged = 
        Math.abs(target.translateY - current.translateY) > 0.1 ||
        Math.abs(target.scale - current.scale) > 0.001 ||
        Math.abs(target.rotation - current.rotation) > 0.05 ||
        Math.abs(target.blur - current.blur) > 0.1;

      if (hasChanged) {
        current.translateY = lerp(current.translateY, target.translateY, lerpFactor);
        current.scale = lerp(current.scale, target.scale, lerpFactor);
        current.rotation = lerp(current.rotation, target.rotation, lerpFactor);
        current.blur = lerp(current.blur, target.blur, lerpFactor);

        const transform = `translate3d(0, ${current.translateY}px, 0) scale(${current.scale}) rotate(${current.rotation}deg)`;
        const filter = current.blur > 0.1 ? `blur(${current.blur}px)` : '';
        
        card.style.transform = transform;
        card.style.filter = filter;
      }
    });

    lerpFrameRef.current = requestAnimationFrame(lerpTransformsLoop);
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      const isMobileOrBasic = typeof window !== 'undefined' ? 
        (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) : false;

      let blur = 0;
      if (blurAmount && !isMobileOrBasic) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementOffset(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.min(12, depthInStack * blurAmount); // Cap blur to max 12px
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTarget = {
        translateY: translateY,
        scale: scale,
        rotation: rotation,
        blur: blur
      };

      targetTransformsRef.current.set(i, newTarget);
      
      // Initialize current state if it doesn't exist yet
      if (!currentTransformsRef.current.has(i)) {
        currentTransformsRef.current.set(i, { ...newTarget });
        const initialTransform = `translate3d(0, ${newTarget.translateY}px, 0) scale(${newTarget.scale}) rotate(${newTarget.rotation}deg)`;
        const initialFilter = newTarget.blur > 0 ? `blur(${newTarget.blur}px)` : '';
        card.style.transform = initialTransform;
        card.style.filter = initialFilter;
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      const module = await import('lenis');
      const Lenis = module.default ?? module;

      if (useWindowScroll) {
        const lenis = new Lenis({
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075
        });

        lenis.on('scroll', handleScroll);

        const raf = time => {
          lenis.raf(time);
        };
        animationFrameRef.current = requestAnimationFrame(function loop(time) {
          raf(time);
          animationFrameRef.current = requestAnimationFrame(loop);
        });

        lenisRef.current = lenis;
        window.lenis = lenis; // Export for global smooth scrolling
        return lenis;
      } else {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const lenis = new Lenis({
          wrapper: scroller,
          content: scroller.querySelector('.scroll-stack-inner'),
          duration: 1.2,
          easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
          infinite: false,
          wheelMultiplier: 1,
          lerp: 0.1,
          syncTouch: true,
          syncTouchLerp: 0.075
        });

        lenis.on('scroll', handleScroll);

        const raf = time => {
          lenis.raf(time);
        };
        animationFrameRef.current = requestAnimationFrame(function loop(time) {
          raf(time);
          animationFrameRef.current = requestAnimationFrame(loop);
        });

        lenisRef.current = lenis;
        window.lenis = lenis; // Export for global smooth scrolling
        return lenis;
      }
    } catch (e) {
      console.error("Failed to load lenis dynamically:", e);
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    
    // Start lerp loop
    if (lerpFrameRef.current) cancelAnimationFrame(lerpFrameRef.current);
    lerpFrameRef.current = requestAnimationFrame(lerpTransformsLoop);

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lerpFrameRef.current) {
        cancelAnimationFrame(lerpFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      targetTransformsRef.current.clear();
      currentTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    lerpTransformsLoop
  ]);

  // Container styles based on scroll mode
  const containerStyles = useWindowScroll
    ? {
        // Global scroll mode - no overflow constraints
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }
    : {
        // Container scroll mode - original behavior
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-[20vh] px-4 md:px-20 pb-[50rem] min-h-screen">
        {children}
        {/* Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
