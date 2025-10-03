"use client";

import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`px-4 py-2 rounded-lg font-semibold transition bg-cyan-500 hover:bg-cyan-400 text-black ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
