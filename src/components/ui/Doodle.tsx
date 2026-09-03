"use client";

import React from "react";
import { motion } from "framer-motion";

export type DoodleType =
  | "sparkle"
  | "sparkles"
  | "lightning"
  | "wallet"
  | "bowl"
  | "muscle"
  | "target"
  | "broccoli"
  | "tomato"
  | "notepad";

interface DoodleProps {
  type: DoodleType;
  size?: number;
  color?: string;
  className?: string;
  delay?: number;
}

export const Doodle: React.FC<DoodleProps> = ({
  type,
  size = 28,
  color = "#FF6039",
  className = "",
  delay = 0,
}) => {
  const renderIcon = () => {
    switch (type) {
      case "sparkle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        );
      case "sparkles":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3c0 4.5-2.5 6-4.5 6 2 0 4.5 1.5 4.5 6 0-4.5 2.5-6 4.5-6-2 0-4.5-1.5-4.5-6Z" />
            <path d="M19 15c0 2-1 3-2 3 1 0 2 1 2 3 0-2 1-3 2-3-1 0-2-1-2-3Z" />
          </svg>
        );
      case "lightning":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      case "wallet":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="14" x="3" y="5" rx="3" />
            <path d="M16 12h3" />
            <circle cx="16" cy="12" r="1" fill={color} />
          </svg>
        );
      case "bowl":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 11c0 5 4 8 8 8s8-3 8-8H4Z" />
            <path d="M8 7c0-2 1-3 2-3" />
            <path d="M14 7c0-2 1-3 2-3" />
          </svg>
        );
      case "muscle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 14c-1.5-2-2-4-1-6 1.5-3 5-3 7-1l1 1c2-1 5 0 5 3 0 2-2 4-4 5l-2 3c-1.5 2-4 2-5 0l-1-2" />
          </svg>
        );
      case "target":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill={color} />
          </svg>
        );
      case "broccoli":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 13v7" />
            <path d="M9 13c-2 0-3-1.5-3-3.5C6 7.5 8 6 10 6c.5-2 2-3 4-3s3.5 1 4 3c2 0 4 1.5 4 3.5 0 2-1 3.5-3 3.5H9Z" />
          </svg>
        );
      case "tomato":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="13" r="8" />
            <path d="M12 5V2" />
            <path d="M9 4c1.5 1 4.5 1 6 0" />
          </svg>
        );
      case "notepad":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="18" x="5" y="3" rx="2" />
            <path d="M9 7h6" />
            <path d="M9 11h6" />
            <path d="M9 15h4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`inline-block select-none pointer-events-none opacity-60 hover:opacity-100 transition-opacity ${className}`}
      animate={{
        y: [0, -5, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {renderIcon()}
    </motion.div>
  );
};
