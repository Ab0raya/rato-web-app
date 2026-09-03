import React from "react";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  children?: React.ReactNode;
  glow?: boolean;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  src,
  alt,
  priority = false,
  className = "",
  children,
  glow = true,
}) => {
  return (
    <div
      className={`relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none ${className}`}
    >
      {/* Ambient background glow */}
      {glow && (
        <div className="absolute -inset-4 bg-gradient-to-b from-[#FF6039]/20 via-[#FF6039]/5 to-transparent rounded-[54px] blur-2xl -z-10 pointer-events-none opacity-70" />
      )}

      {/* Hardware Chassis */}
      <div className="relative rounded-[46px] p-[10px] sm:p-[12px] bg-[#1A1A1E] border border-[#2A2A2F] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#0E0E11] rounded-full z-20 flex items-center justify-end px-3 gap-1.5 shadow-inner">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1E] ring-1 ring-white/10" />
        </div>

        {/* Screen Display Area */}
        <div className="relative rounded-[36px] overflow-hidden bg-[#0E0E11] aspect-[853/1844] w-full border border-black/50 shadow-inner">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 340px, 380px"
            priority={priority}
            className="object-cover object-top"
          />

          {/* Screen subtle glass sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

          {/* Optional in-screen overlays */}
          {children}
        </div>
      </div>
    </div>
  );
};
