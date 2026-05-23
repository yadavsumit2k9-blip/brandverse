import React from "react";
import { PROCESS_STEPS } from "../data";

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-[#0F172A]/60 uppercase">
            OPERATIONAL METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] mt-3 mb-6">
            How We Work
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our structured, 3-step timeline keeps your campaign launch fluid, clear, and focused on maximum conversions without excess complexity.
          </p>
        </div>

        {/* 3-Step Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/3 left-[15%] right-[15%] h-[1px] bg-slate-200 -z-10" />

          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Marker Badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0F172A] font-mono text-sm font-bold text-white group-hover:bg-rose-500 transition-colors">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
                    PHASE {step.step}
                  </span>
                </div>

                {/* Body Content */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverable */}
              <div className="bg-white border border-slate-100 rounded-xl p-4 mt-auto">
                <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase leading-none mb-1.5">
                  CORE DELIVERABLE
                </p>
                <p className="text-xs font-bold text-slate-800 leading-snug">
                  {step.deliverable}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
