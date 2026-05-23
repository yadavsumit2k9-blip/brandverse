import React from "react";

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  onClick?: () => void;
  variant?: "navbar" | "footer";
}

/**
 * BrandLogoIcon:
 * A high-quality, pixel-perfect, custom-designed SVG vector representing
 * the official BRANDVERSE logo shown in the user's uploaded image.
 * Renders instantly, supports transparent background, and scales perfectly on all screens.
 */
export function BrandLogoIcon({ className = "w-8 h-8", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Outer stylized "D" representing the multi-dimensional creative block */}
      <path
        d="M26 15L55 15C86 15 86 85 71 85L16 85L26 15Z"
        fill="url(#brand-logo-linear)"
      />
      {/* Play button triangle outline (white outer border) */}
      <path
        d="M38 31L68 50L38 69Z"
        fill="white"
        stroke="white"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Play button inner triangle fill (matching red background) */}
      <path
        d="M38 31L68 50L38 69Z"
        fill="url(#brand-logo-linear)"
      />
      
      {/* Broadcast signal lines / streaming indicators extending out of the letter 'D' */}
      <line
        x1="67"
        y1="41"
        x2="88"
        y2="24"
        stroke="#FF1A53"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      <line
        x1="76"
        y1="51"
        x2="97"
        y2="34"
        stroke="#FF1A53"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* Synchronized circular signal dots at offset positions */}
      <circle cx="98" cy="16" r="3.25" fill="#FF1A53" />
      <circle cx="107" cy="26" r="3.25" fill="#FF1A53" />

      {/* Pure CSS gradient definition to support branding colors consistently */}
      <defs>
        <linearGradient
          id="brand-logo-linear"
          x1="16"
          y1="15"
          x2="86"
          y2="85"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FF1A53" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * BrandLogo:
 * A cohesive brand block consisting of the official logo icon and
 * high-end geometric text. Fully clickable and responsive.
 */
export default function BrandLogo({
  className = "",
  iconClassName = "w-8 h-8",
  textClassName = "",
  onClick,
  variant = "navbar",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 cursor-pointer group select-none ${className}`}
      id={isFooter ? "footer-brand-logo" : "navbar-brand-logo"}
    >
      {/* Polished interactive container for the logo icon */}
      <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shrink-0">
        <BrandLogoIcon className={`${iconClassName} drop-shadow-sm`} />
      </div>

      {/* Styled geometric typography */}
      <span
        className={`font-display font-extrabold text-2xl tracking-wider transition-colors duration-300 ${
          isFooter
            ? "text-slate-50 group-hover:text-rose-500"
            : "text-slate-950 group-hover:text-rose-600"
        } ${textClassName}`}
      >
        BRAND<span className={isFooter ? "text-rose-500" : "text-rose-600"}>VERSE</span>
      </span>
    </div>
  );
}
