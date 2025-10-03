import React from "react";

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export function Badge({ className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-medium bg-gray-700 text-white ${className}`}
    >
      {children}
    </span>
  );
}
