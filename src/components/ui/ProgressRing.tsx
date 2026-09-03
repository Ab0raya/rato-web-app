"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProgressRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  showPercentage?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  percentage,
  size = 100,
  strokeWidth = 8,
  color = "#FF6039",
  trackColor = "#2A2A2F",
  showPercentage = false,
  children,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90 origin-center"
      >
        {/* Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
          fill="none"
          style={{
            filter: `drop-shadow(0 0 6px ${color}80)`,
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {showPercentage ? (
          <span className="text-2xl font-black text-white font-mono">{percentage}%</span>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
