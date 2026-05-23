import React, { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { CAMPAIGNS } from "../data";
import { CampaignsSkeleton } from "./Skeletons";

export default function Campaigns() {
  const [activeCategory, setActiveCategory] = useState<"all" | "beauty" | "lifestyle">("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Instant loading without artificial delay
    setIsLoading(false);
  }, []);

  const filteredCampaigns = activeCategory === "all"
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === activeCategory);

  const filterTabs: { id: "all" | "beauty" | "lifestyle"; label: string }[] = [
    { id: "all", label: "All Case Studies" },
    { id: "beauty", label: "Beauty & Style" },
    { id: "lifestyle", label: "Lifestyle & Fitness" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.97, y: 25 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <section id="campaigns" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold tracking-widest text-[#0F172A]/60 uppercase">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mt-3 mb-4">
              Real Campaigns. Verified Performance.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore how we translate creative creator briefs into multi-platform digital impressions, conversions, and measurable ROI.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="text-sm font-semibold text-slate-500">
              Need custom data?{" "}
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-rose-500 hover:text-rose-600 hover:underline font-bold cursor-pointer"
              >
                Inquire for details →
              </button>
            </span>
          </div>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 border-b border-slate-100">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-slate-950 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>        {/* Campaigns Grid */}
        {isLoading ? (
          <CampaignsSkeleton />
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {filteredCampaigns.map((camp) => (
              <motion.div
                key={camp.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.006, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
                className={`rounded-2xl border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 bg-white ${camp.accentColor}`}
              >
                <div>
                  {/* Campaign Header Details */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-slate-950 text-white font-display font-black flex items-center justify-center rounded-lg text-sm tracking-tighter shadow-3xs">
                        {camp.clientLogoPlaceholder}
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-[#0F172A] leading-none">
                          {camp.clientName}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1 flex items-center gap-1.5">
                          <span>Concept Collaboration</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300" />
                          <span className="text-rose-500 font-semibold">Demo Showcase</span>
                        </p>
                      </div>
                    </div>
                    
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-50 text-slate-600 border border-slate-200 uppercase tracking-widest leading-none">
                      {camp.category === "beauty" ? "Beauty & Style" : "Lifestyle & Fitness"}
                    </span>
                  </div>

                  {/* Cover Asset Media */}
                  <div className="relative h-48 sm:h-60 rounded-xl overflow-hidden mb-6 group border border-slate-100">
                    <img
                      src={camp.heroImage}
                      alt={camp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-80" />
                    
                    {/* Subtle label overlay for trust */}
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-[9px] font-bold tracking-widest text-white px-2.5 py-1 rounded uppercase select-none">
                      Demo Campaign Visual
                    </div>
                  </div>

                  {/* Brief details & Description */}
                  <h3 className="text-xl font-display font-extrabold text-[#0F172A] mb-3 tracking-tight">
                    {camp.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {camp.description}
                  </p>

                  {/* Deliverables lists */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2">
                      CREATIVE DELIVERABLES
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {camp.deliverables.map((item, index) => (
                        <span
                          key={index}
                          className="bg-slate-50 border border-slate-100 text-slate-700 text-xs py-1 px-2.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Statistical Outcomes / KPIs */}
                <div className="border-t border-slate-100 pt-5 mt-auto">
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-3">
                    VERIFIED CAMPAIGN OUTCOMES
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {camp.metrics.map((metric, i) => (
                      <div key={i} className="bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-100">
                        <p className="text-lg sm:text-xl font-display font-bold text-rose-500 leading-none">
                          {metric.value}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
