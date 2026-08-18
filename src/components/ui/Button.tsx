"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = clsx(
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 ease-out",
      "rounded-full will-change-transform",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
      "active:scale-[0.97]"
    );

    const variantStyles = {
      primary: clsx(
        "bg-accent text-bone",
        "shadow-[0_4px_20px_-6px_rgba(184,71,47,0.4)]",
        "hover:bg-accent-hover",
        "hover:shadow-[0_8px_30px_-8px_rgba(184,71,47,0.5)]",
        "@media (hover: hover) and (pointer: fine): hover:-translate-y-0.5"
      ),
      secondary: clsx(
        "bg-transparent text-foreground border border-accent",
        "hover:bg-accent-light hover:border-accent",
        "@media (hover: hover) and (pointer: fine): hover:-translate-y-[1px]"
      ),
      outline: clsx(
        "bg-transparent text-foreground border border-foreground/30",
        "hover:bg-foreground/5 hover:border-foreground/50",
        "@media (hover: hover) and (pointer: fine): hover:-translate-y-[1px]"
      ),
      ghost: clsx(
        "bg-transparent text-foreground",
        "hover:bg-surface",
        "px-3 py-2"
      ),
    };

    const sizeStyles = {
      sm: "text-sm px-4 py-2",
      md: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4",
      xl: "text-lg px-10 py-5",
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";