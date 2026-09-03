"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  withArrow = false,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6039] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E11]";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#FF6039] text-white hover:bg-[#ff7550] shadow-[0_0_25px_-5px_rgba(255,96,57,0.4)] hover:shadow-[0_0_35px_0px_rgba(255,96,57,0.6)] active:scale-[0.98]",
    secondary:
      "bg-[#1A1A1E] text-white border border-[#2A2A2F] hover:border-[#FF6039]/40 hover:bg-[#222228] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-[#FF6039]/60 hover:border-[#FF6039] hover:bg-[#FF6039]/10 active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#9E9EA8] hover:text-white hover:bg-white/5 active:scale-[0.98]",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
