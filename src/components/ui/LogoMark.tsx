"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface LogoMarkProps {
  size?: number;
  withText?: boolean;
  animated?: boolean;
  href?: string;
  className?: string;
}

export const LogoMark: React.FC<LogoMarkProps> = ({
  size = 40,
  withText = false,
  animated = false,
  href = "/",
  className = "",
}) => {
  const content = (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        {animated ? (
          <motion.div
            className="relative w-full h-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: "linear",
            }}
          >
            <Image
              src="/assets/logo.png"
              alt="RATO Mark"
              width={size}
              height={size}
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,96,57,0.35)] transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </motion.div>
        ) : (
          <Image
            src="/assets/logo.png"
            alt="RATO Mark"
            width={size}
            height={size}
            className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,96,57,0.25)] transition-transform duration-300 group-hover:scale-105"
            priority
          />
        )}
      </div>

      {withText && (
        <span
          className="font-bold tracking-wider text-white transition-colors duration-200 group-hover:text-[#FF6039]"
          style={{ fontSize: `${Math.round(size * 0.58)}px` }}
        >
          RATO
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
};
