import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "orange" | "neutral" | "subtle" | "glow";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3.5 py-1 tracking-wide",
  }[size];

  const variantStyles = {
    orange:
      "bg-[#FF6039]/15 text-[#FF6039] border border-[#FF6039]/30 font-semibold",
    neutral:
      "bg-[#1A1A1E] text-[#9E9EA8] border border-[#2A2A2F] font-medium",
    subtle:
      "bg-white/5 text-white/90 border border-white/10 font-medium",
    glow:
      "bg-[#FF6039]/20 text-[#FF6039] border border-[#FF6039]/50 shadow-[0_0_15px_-3px_rgba(255,96,57,0.4)] font-semibold",
  }[variant];

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full uppercase ${sizeStyles} ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
