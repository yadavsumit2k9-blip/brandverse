import React from "react";
import { motion } from "motion/react";
import { Sparkles, Compass, TrendingUp, Users } from "lucide-react";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardHover = {
    hover: {
      y: -6,
      scale: 1.015,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.03), 0 8px 10px -6px rgb(0 0 0 / 0.03)",
      borderColor: "rgba(244, 63, 94, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const showcaseContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const showcaseItemVariants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Background soft ambient animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -20, 20, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-slate-300/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: About Text & Features */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col space-y-8"
          >
            <div>
              {/* Premium Category Badging */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-[11px] font-bold tracking-wider text-rose-600 uppercase">
                  Who We Are
                </span>
              </motion.div>

              {/* Section Heading */}
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.15]"
              >
                About <span className="text-rose-600">BRANDVERSE</span>
              </motion.h2>

              {/* Subheading */}
              <motion.p 
                variants={itemVariants}
                className="mt-4 text-lg md:text-xl font-normal text-slate-700 leading-relaxed max-w-2xl"
              >
                Building modern creator-brand collaborations that actually connect with audiences.
              </motion.p>
            </div>

            {/* Main copywriting narrative */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-slate-600 text-[15px] sm:text-base leading-relaxed font-normal max-w-2xl"
            >
              <p>
                BRANDVERSE is a modern influencer marketing agency focused on helping brands grow through powerful creator partnerships, digital storytelling, and social-first campaigns.
              </p>
              <p>
                We work with creators across fashion, lifestyle, fitness, tech, beauty, and culture to help brands reach real audiences in authentic ways.
              </p>
              <p>
                Our goal is simple — create campaigns that feel natural, engaging, and impactful while helping brands scale their online presence.
              </p>
            </motion.div>

            {/* 3 Premium Feature cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4"
            >
              {/* Feature 1 */}
              <motion.div 
                variants={cardHover}
                whileHover="hover"
                className="group relative bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-100 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100 group-hover:scale-105 transition-transform duration-300 mb-4">
                  <Users className="w-4 h-4 text-rose-600" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] mb-1.5 group-hover:text-rose-600 transition-colors">
                  Creator Network
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Access to modern creators across multiple niches.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                variants={cardHover}
                whileHover="hover"
                className="group relative bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-100 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100 group-hover:scale-105 transition-transform duration-300 mb-4">
                  <Compass className="w-4 h-4 text-rose-600" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] mb-1.5 group-hover:text-rose-600 transition-colors">
                  Campaign Strategy
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Creative campaign planning built for engagement and reach.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                variants={cardHover}
                whileHover="hover"
                className="group relative bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-100 transition-all duration-300 cursor-default"
              >
                <div className="w-9 h-9 bg-rose-50 rounded-lg flex items-center justify-center border border-rose-100 group-hover:scale-105 transition-transform duration-300 mb-4">
                  <TrendingUp className="w-4 h-4 text-rose-600" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] mb-1.5 group-hover:text-rose-600 transition-colors">
                  Brand Growth
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Helping brands grow visibility through social-first marketing.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Premium Side Visual Area */}
          <motion.div 
            variants={showcaseContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 self-start w-full"
          >
            {/* Card 1: Fashion Creator */}
            <motion.div 
              variants={showcaseItemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.025,
                boxShadow: "0 12px 20px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group space-y-2.5 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="space-y-2"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 shadow-2xs transition-shadow duration-300 group-hover:shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400" 
                    alt="Fashion Creator"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none">Fashion Creator</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Creator Partnership</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2: Fitness Creator */}
            <motion.div 
              variants={showcaseItemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.025,
                boxShadow: "0 12px 20px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group space-y-2.5 mt-6 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="space-y-2"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 shadow-2xs transition-shadow duration-300 group-hover:shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400" 
                    alt="Fitness Creator"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none">Fitness Creator</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Brand Feature</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3: Lifestyle Campaign */}
            <motion.div 
              variants={showcaseItemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.025,
                boxShadow: "0 12px 20px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group space-y-2.5 -mt-6 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="space-y-2"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 shadow-2xs transition-shadow duration-300 group-hover:shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400" 
                    alt="Lifestyle Campaign"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none">Lifestyle Campaign</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Social Campaign</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 4: Product Collaboration */}
            <motion.div 
              variants={showcaseItemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.025,
                boxShadow: "0 12px 20px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group space-y-2.5 cursor-pointer"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="space-y-2"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 shadow-2xs transition-shadow duration-300 group-hover:shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=400" 
                    alt="Product Collaboration"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-1">
                  <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest leading-none">Product Collaboration</p>
                  <p className="text-[11px] font-semibold text-slate-400 mt-1">Brand Feature</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
