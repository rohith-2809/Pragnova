/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#020617', // deep site base
          muted: '#18181b',   // softer surface
          subtle: '#27272a',
        },
        foreground: {
          DEFAULT: '#f7f7f8', // bright body text
          muted: '#a1a1aa',   // highly legible muted text
        },
        primary: {
          DEFAULT: '#a78bfa', // adjusted for contrast >= 4.5:1
          foreground: '#020617',
          hover: '#c4b5fd',
        },
        secondary: '#38A6FF', // Vibrant Blue
        accent: {
          DEFAULT: '#A855F7', // Vibrant Purple
          foreground: '#f4f4f5',
        },
        cta: '#a78bfa', // Alias to primary for migration compatibility
        border: '#27272a',
        error: '#ef4444',
      },
      spacing: {
        '12': '3rem',
        '24': '6rem',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        'card': '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': ['clamp(2.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(2rem, 4vw + 1rem, 3.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'fluid-h3': ['clamp(1.5rem, 3vw + 1rem, 2.5rem)', { lineHeight: '1.3' }],
        'fluid-p': ['clamp(1rem, 2vw + 0.5rem, 1.25rem)', { lineHeight: '1.6' }],
        'fluid-sm': ['clamp(0.875rem, 1.5vw + 0.5rem, 1rem)', { lineHeight: '1.5' }],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease infinite',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
        'rainbow': 'rainbow 3s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        'rainbow': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        }
      }
    },
  },
  plugins: [],
}
