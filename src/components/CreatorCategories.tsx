import React, { useState, useEffect } from "react";
import { Instagram, Star } from "lucide-react";
import { motion } from "motion/react";
import { CREATORS } from "../data";
import { CreatorsSkeleton } from "./Skeletons";

type CreatorCategoryFilter = "all" | "Fashion" | "Fitness" | "Gaming" | "Tech" | "Lifestyle";

export default function CreatorCategories() {
  const [activeCategory, setActiveCategory] = useState<CreatorCategoryFilter>("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Instant loading without artificial delay
    setIsLoading(false);
  }, []);

  // Filter creators based on category selection
  const filteredCreators = activeCategory === "all"
    ? CREATORS
    : CREATORS.filter(c => c.category === activeCategory || (activeCategory === "Fashion" && c.category === "Skincare & Beauty"));

  const categoryTabs: { id: CreatorCategoryFilter; label: string }[] = [
    { id: "all", label: "All Network" },
    { id: "Fashion", label: "Fashion & Beauty" },
    { id: "Fitness", label: "Fitness" },
    { id: "Gaming", label: "Gaming" },
    { id: "Tech", label: "Tech" },
    { id: "Lifestyle", label: "Lifestyle" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  return (
    <section id="creators" className="py-24 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#0F172A]/60 uppercase">
            OUR TALENT NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] mt-3 mb-6">
            The Trust Network Brands Count On
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We operate an invite-only network of creators with high-affinity engagement across global markets, guaranteeing absolute brand alignment and verified metrics.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-2 justify-center border-b border-slate-100">
          {categoryTabs.map((tab) => (
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
        </div>

        {/* Creators Showcase Grid */}
        {isLoading ? (
          <CreatorsSkeleton />
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCreators.map((creator) => (
              <motion.div
                key={creator.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" }}
                className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:border-slate-300 transition-all duration-300"
              >
                {/* Creator Thumbnail Picture */}
                <div className="relative h-64 overflow-hidden border-b border-slate-100 bg-slate-100">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 py-1 px-2.5 rounded-full border border-slate-100">
                    {creator.location}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center bg-slate-950/90 text-[10px] font-bold text-white py-1.5 px-3 rounded-md uppercase tracking-wider">
                    {creator.category}
                  </div>
                </div>

                {/* Creator Metadata Details */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base font-extrabold text-[#0F172A] mb-1 leading-tight flex items-center gap-1.5">
                        {creator.name}
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Vetted Sourced Talent" />
                      </h3>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 bg-rose-50 border border-rose-100/60 px-2 py-0.5 rounded text-[10px] font-semibold text-rose-600">
                        <span className="w-1 h-1 rounded-full bg-rose-500" />
                        {creator.handle}
                      </div>
                    </div>

                    <div className="flex space-x-1">
                      {creator.platforms.map((p, index) => (
                        <a
                          key={index}
                          href="https://www.instagram.com/brandversehq?igsh=MTY3YzFienIwaGgzaw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-slate-50 border border-slate-100 rounded-lg text-rose-500 hover:bg-rose-100 hover:border-rose-200 transition-all flex items-center justify-center cursor-pointer"
                          title="Connect On Instagram"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Engagement Statistics Table row */}
                  <div className="grid grid-cols-2 gap-4 bg-slate-50 border border-slate-100 rounded-xl p-3 mb-4">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                        Audience Reach
                      </p>
                      <p className="text-xs font-extrabold text-[#0F172A] mt-1">
                        {creator.followers}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                        Vetted Engagement
                      </p>
                      <p className="text-xs font-extrabold text-slate-900 mt-1">
                        {creator.engagementRate}
                      </p>
                    </div>
                  </div>

                  {/* Real Case Demo Line */}
                  <div className="flex items-center space-x-2 text-[10px] text-slate-500 pt-3 border-t border-slate-100 justify-between">
                    <div className="flex items-center space-x-1.5 truncate">
                      <Star className="w-3 h-3 text-rose-500 fill-rose-500 shrink-0" />
                      <span className="font-semibold text-slate-400">Demo Concept:</span>
                      <span className="text-[#0F172A] font-medium truncate max-w-[130px]">{creator.campaignSample}</span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400/80 uppercase shrink-0">Sample</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Creator CTA Application bottom box - simplified and cleaned */}
        <div className="mt-16 bg-[#0F172A] text-white rounded-2xl p-8 border border-slate-800 shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-left max-w-xl relative">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">
              Are you an established digital content creator?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are constantly seeking influencers matching premium professional criteria. Register your platforms below to get matched with active global brand campaigns.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 bg-white hover:bg-rose-500 hover:text-white text-slate-950 text-sm font-bold font-sans py-3.5 px-6 rounded-lg transition-all duration-200 cursor-pointer shadow-sm"
          >
            Join Creator Network
          </button>
        </div>

      </div>
    </section>
  );
}
