import React from "react";

/**
 * Shimmer element block with smooth pulse animation representing content loading.
 */
interface ShimmerProps {
  className?: string;
}

export function Shimmer({ className = "h-4 bg-slate-200 rounded-lg animate-pulse" }: ShimmerProps) {
  return (
    <div className={`relative overflow-hidden bg-slate-200/70 border border-slate-100 animate-pulse ${className}`}>
      {/* Dynamic diagonal glaze sweep effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  );
}

/**
 * Stats Panel Skeleton Loader:
 * Mimics a 4-column responsive stats grid during render state.
 */
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="bg-[#F8FAFC]/50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between"
        >
          <div>
            {/* Icon outline skeleton */}
            <Shimmer className="w-10 h-10 rounded-lg mb-5" />
            {/* Main high impact stat number */}
            <Shimmer className="h-10 w-2/3 mb-4 rounded-xl" />
            {/* Label name */}
            <Shimmer className="h-4 w-1/2 mb-2" />
          </div>
          {/* Subtext description lines */}
          <div className="space-y-1.5 mt-2">
            <Shimmer className="h-3 w-5/6" />
            <Shimmer className="h-3 w-4/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Campaigns Grid Skeleton Loader:
 * Mimics a 2-column premium agency project showcase grid.
 */
export function CampaignsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-200/50 p-6 md:p-8 flex flex-col justify-between bg-white bg-radial-gradient"
        >
          <div>
            {/* Client header information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                {/* Client bubble logo */}
                <Shimmer className="w-9 h-9 rounded-lg" />
                <div className="space-y-1.5">
                  {/* Client title text */}
                  <Shimmer className="h-3.5 w-24" />
                  {/* Client subtitle meta */}
                  <Shimmer className="h-2.5 w-32" />
                </div>
              </div>
              {/* Category tag bubble */}
              <Shimmer className="h-5 w-20 rounded-full" />
            </div>

            {/* Media Cover Showcase asset */}
            <Shimmer className="h-48 sm:h-60 rounded-xl mb-6" />

            {/* Title display header */}
            <Shimmer className="h-6 w-3/4 mb-3" />
            {/* Text details summary */}
            <div className="space-y-2 mb-6">
              <Shimmer className="h-3 w-full" />
              <Shimmer className="h-3 w-11/12" />
              <Shimmer className="h-3 w-4/5" />
            </div>

            {/* Deliverable tags items list */}
            <div className="mb-6">
              <Shimmer className="h-3 w-28 mb-2.5" />
              <div className="flex flex-wrap gap-1.5">
                <Shimmer className="h-6 w-16 rounded-md" />
                <Shimmer className="h-6 w-20 rounded-md" />
                <Shimmer className="h-6 w-14 rounded-md" />
              </div>
            </div>
          </div>

          {/* Statistical outcomes metric grids */}
          <div className="border-t border-slate-100 pt-5 mt-auto">
            <Shimmer className="h-3 w-36 mb-3" />
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="bg-[#F8FAFC] rounded-lg p-2.5 border border-slate-100/60">
                  <Shimmer className="h-6 w-2/3 mb-1.5" />
                  <Shimmer className="h-2 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Creators Network Grid Skeleton Loader:
 * Mimics a 3-column media creator asset grid with engagement data cards.
 */
export function CreatorsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden flex flex-col justify-between"
        >
          <div>
            {/* Creator cover thumbnail */}
            <Shimmer className="h-64 rounded-none" />

            <div className="p-6">
              {/* Header profile names & handles */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <Shimmer className="h-4 w-28" />
                  <Shimmer className="h-4 w-16 rounded-md" />
                </div>
                {/* Social media direct link bubbles */}
                <Shimmer className="w-8 h-8 rounded-lg" />
              </div>

              {/* Engagement statistics grid banner */}
              <div className="grid grid-cols-2 gap-4 bg-[#F8FAFC] border border-slate-100 rounded-xl p-3 mb-4">
                <div className="space-y-1.5">
                  <Shimmer className="h-2.5 w-16" />
                  <Shimmer className="h-3 w-12" />
                </div>
                <div className="space-y-1.5">
                  <Shimmer className="h-2.5 w-20" />
                  <Shimmer className="h-3 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Sourced concept samples footer line */}
          <div className="p-6 pt-0">
            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <div className="flex items-center space-x-1.5 w-full">
                <Shimmer className="w-3.5 h-3.5 rounded-full shrink-0" />
                <Shimmer className="h-3 w-2/3" />
              </div>
              <Shimmer className="h-3 w-8 shrink-0" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
