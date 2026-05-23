import React from "react";
import { ArrowUpRight, Play, Star, Sparkles, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { CREATORS } from "../data";

export default function Hero() {
  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // We split the creators to populate two opposite vertical scroll columns
  const firstColCreators = [...CREATORS.slice(0, 4), ...CREATORS.slice(0, 4)];
  const secondColCreators = [...CREATORS.slice(4, 8), ...CREATORS.slice(4, 8)];

  // Helper to render platform icon
  const getPlatformIcon = (name: string) => {
    return <Instagram className="w-3.5 h-3.5 text-rose-500" />;
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FFFFFF]">
      {/* Dynamic Keyframes injected safely */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(0, -50%, 0); }
        }
        @keyframes scrollDown {
          0% { transform: translate3d(0, -50%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .scrolling-up-container {
          animation: scrollUp 28s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        .scrolling-down-container {
          animation: scrollDown 28s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        .scrolling-up-container:hover, .scrolling-down-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Premium subtle background animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-rose-500/10 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-slate-300/30 blur-[100px]"
        />
      </div>

      {/* Decorative clean grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.3]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Copy and Action) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-2xl lg:max-w-none">
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-3.5 py-1 w-fit mb-6 shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase flex items-center gap-1">
                TOP-TIER CREATOR NETWORK
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-6 overflow-hidden">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Connecting Brands
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="inline-block mr-3"
              >
                With
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-rose-600 font-extrabold relative inline-block"
              >
                Modern Creators
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 h-[6px] bg-rose-500/10 rounded-sm -z-10" 
                />
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="text-lg text-slate-600 mb-8 leading-relaxed font-normal max-w-xl"
            >
              BRANDVERSE helps brands grow through influencer campaigns, creator partnerships, and digital storytelling.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollSection("contact")}
                className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-slate-950 rounded-lg hover:bg-rose-600 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
              >
                Start Your Campaign
                <ArrowUpRight className="ml-2 w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollSection("campaigns")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-[#F8FAFC] hover:text-slate-950 hover:border-slate-300 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="bg-slate-100 rounded-full p-1.5 mr-2.5 flex items-center justify-center">
                  <Play className="w-3 h-3 text-slate-700 fill-slate-700" />
                </div>
                Explore Campaigns
              </motion.button>
            </motion.div>

            {/* Micro stats banner */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-6"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                  10K+
                </p>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mt-1">Creators vetted</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                  500M+
                </p>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mt-1">Total Reach</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
                  4.8X
                </p>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase mt-1">Avg Campaign ROI</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Vertically Moving Creator Cards) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-5 h-[500px] sm:h-[600px] relative overflow-hidden rounded-2xl bg-slate-50/50 p-4 border border-slate-100"
          >
            {/* Top and Bottom gradient overlays to mask list edge transitions */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFFFF] to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Column 1: Scrolled Upwards */}
              <div className="overflow-hidden relative h-full">
                <div className="scrolling-up-container flex flex-col gap-4">
                  {firstColCreators.map((creator, i) => (
                    <div
                      key={`col1-${creator.id}-${i}`}
                      className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs hover:border-rose-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-2.5">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-extrabold text-slate-950 truncate leading-none mb-1.5">{creator.name}</p>
                          <p className="text-[10px] text-rose-500 font-semibold tracking-tight truncate leading-none">{creator.handle}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-slate-50 rounded-lg p-2 mb-2">
                        <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Audience Reach</span>
                        <span className="text-xs font-extrabold text-slate-950">{creator.followers.split(" ")[0]}</span>
                      </div>

                      {creator.campaignSample && (
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 bg-rose-50/70 py-1.5 px-2 rounded-md border border-rose-100/45 font-medium">
                          {getPlatformIcon(creator.platforms[0]?.name)}
                          <span className="truncate">{creator.campaignSample}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Scrolled Downwards */}
              <div className="overflow-hidden relative h-full">
                <div className="scrolling-down-container flex flex-col gap-4">
                  {secondColCreators.map((creator, i) => (
                    <div
                      key={`col2-${creator.id}-${i}`}
                      className="bg-white rounded-xl p-3.5 border border-slate-100 shadow-xs hover:border-rose-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-2.5">
                        <img
                          src={creator.avatar}
                          alt={creator.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-extrabold text-slate-950 truncate leading-none mb-1.5">{creator.name}</p>
                          <p className="text-[10px] text-rose-500 font-semibold tracking-tight truncate leading-none">{creator.handle}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center bg-slate-50 rounded-lg p-2 mb-2">
                        <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">Eng. Rate</span>
                        <span className="text-xs font-extrabold text-slate-950">{creator.engagementRate.split(" ")[0]}</span>
                      </div>

                      {creator.campaignSample && (
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-500 bg-slate-50 py-1.5 px-2 rounded-md border border-slate-100 font-medium">
                          {getPlatformIcon(creator.platforms[0]?.name)}
                          <span className="truncate">{creator.campaignSample}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
