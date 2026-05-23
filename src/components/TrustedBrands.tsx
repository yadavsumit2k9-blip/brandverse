import React from "react";
import { motion } from "motion/react";
import { TRUSTED_BRANDS } from "../data";

export default function TrustedBrands() {
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
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div id="trusted-brands" className="relative py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
      {/* Ambient background glow motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -15, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-1/2 left-1/3 w-72 h-72 rounded-full bg-rose-500/5 blur-[80px]"
        />
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
          className="absolute -bottom-1/2 right-1/4 w-80 h-80 rounded-full bg-slate-300/10 blur-[85px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-widest text-[#0F172A] uppercase mb-10"
        >
          Trusted By Growing Brands
        </motion.p>

        {/* Brand visual showcase */}
        <div className="relative">
          {/* Fading left and right masks for premium depth */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Staggered animated wrapping flex list */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between px-4"
          >
            {TRUSTED_BRANDS.map((brand, index) => (
              <motion.div
                key={brand.name}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center cursor-default text-center"
              >
                {/* Continuous gentle floating motion and high-end hover scaling */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3.5 + (index * 0.35) % 2, // Natural delay & duration variation per brand
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.08
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    filter: "drop-shadow(0 4px 6px rgb(244 63 94 / 0.08))",
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="flex flex-col items-center justify-center transition-all duration-300"
                >
                  {/* Clean, high-end typography logo representing each brand */}
                  <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-slate-400 group-hover:text-[#0F172A] transition-colors duration-300 tracking-wider">
                    {brand.label}
                  </span>
                  <span className="text-[9px] font-semibold tracking-wider text-slate-400/80 group-hover:text-rose-500 transition-colors duration-300 uppercase mt-1">
                    {brand.type}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
