import React, { useState, useEffect, useRef } from "react";
import { Users, Presentation, Target, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { StatsSkeleton } from "./Skeletons";

interface StatsCounterProps {
  value: string;
  duration?: number;
}

function StatsCounter({ value, duration = 1500 }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Parse the number and suffixes (e.g., "500+" -> 500, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let start = 0;
    const end = targetNumber;
    if (start === end) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = Math.floor(easeProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasTriggered, targetNumber, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {hasTriggered ? `${count}${suffix}` : `0${suffix}`}
    </span>
  );
}

export default function Stats() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Instant loading without artificial delay
    setIsLoading(false);
  }, []);

  const statsList = [
    {
      id: "stat_1",
      icon: <Users className="w-5 h-5 text-rose-500" />,
      value: "500+",
      label: "Certified Creators",
      description: "Our private network of vetted creator profiles across style, fitness, tech, and lifestyle categories."
    },
    {
      id: "stat_2",
      icon: <Presentation className="w-5 h-5 text-rose-500" />,
      value: "120+",
      label: "Campaigns Executed",
      description: "Successful high-converting launches designed strictly to drive organic traffic and product sales."
    },
    {
      id: "stat_3",
      icon: <Target className="w-5 h-5 text-rose-500" />,
      value: "20M+",
      label: "Organic Reach",
      description: "Total combined audience size across targeted demographics, delivering genuine consumer impressions."
    },
    {
      id: "stat_4",
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      value: "95%",
      label: "Client Satisfaction",
      description: "Repeated collaborations and retention rate from growing brand teams and enterprise businesses."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <section className="relative py-20 md:py-24 bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle modern background ambient motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-rose-500/2 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-slate-300/10 blur-[100px]"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 0.95, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.025)_0,transparent_65%)] blur-[80px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Vetted Creator Insights Built For Real Conversions
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base text-slate-600 leading-relaxed">
              At BRANDVERSE, we believe influencer marketing shouldn't feel like rolling dice. Every metric is backed by programmatic platform diagnostics and audience-integrity vetting. We analyze real viewer retention, historical conversion rates, and localized buying capacity prior to final talent booking.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        {isLoading ? (
          <StatsSkeleton />
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statsList.map((stat, index) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.015, 
                  boxShadow: "0 25px 40px -15px rgba(0, 0, 0, 0.04), 0 0 1px 1px rgba(244, 63, 94, 0.05)",
                  borderColor: "rgba(244, 63, 94, 0.15)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white group-hover:scale-105 flex items-center justify-center rounded-lg border border-slate-100 shadow-2xs mb-5 transition-transform duration-300">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="flex items-center justify-center text-slate-700 group-hover:text-rose-500 transition-colors"
                  >
                    {stat.icon}
                  </motion.div>
                </div>
                <p className="text-4xl sm:text-5xl font-display font-extrabold text-[#0F172A] mb-2 tracking-tight transition-colors group-hover:text-rose-500 select-none">
                  <StatsCounter value={stat.value} />
                </p>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1 leading-snug">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
