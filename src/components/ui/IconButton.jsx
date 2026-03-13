import React from 'react';

const IconButton = ({ children, className = '', onClick, ariaLabel, title, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel || title}
      className={`relative inline-flex items-center justify-center p-2 rounded-full min-w-[44px] min-h-[44px] bg-background-muted/70 text-foreground transition-all duration-[var(--motion-medium)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group ${className}`}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-[var(--motion-fast)]" aria-hidden="true" />
      <span className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-[var(--motion-fast)]">
        {React.Children.map(children, child => {
           if (React.isValidElement(child)) {
             return React.cloneElement(child, { strokeWidth: child.props.strokeWidth || 1.5 });
           }
           return child;
        })}
      </span>
    </button>
  );
};

export default IconButton;
