import React from "react";
import { CheckCircle2, Megaphone, Users, Video, Target, Share2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function Services() {
  // Map icons helper for our 6 services
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Megaphone className="w-5 h-5 text-rose-500" />;
      case 1:
        return <Users className="w-5 h-5 text-rose-500" />;
      case 2:
        return <Video className="w-5 h-5 text-rose-500" />;
      case 3:
        return <Target className="w-5 h-5 text-rose-500" />;
      case 4:
        return <Share2 className="w-5 h-5 text-rose-500" />;
      case 5:
        return <ShieldCheck className="w-5 h-5 text-rose-500" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-rose-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.55,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold tracking-widest text-[#0F172A]/60 uppercase">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] mt-3 mb-6">
            Scale campaigns. Skip the headache.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            From talent sourcing to granular legal clearances and pixel tracking, we handle the workflow so your marketing team can focus on the big-picture.
          </p>
        </div>

        {/* 6 Grid items representing each capability */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-xl mb-6">
                  {getServiceIcon(index)}
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Benefits checklist */}
              <div className="border-t border-slate-100 pt-6 mt-auto">
                <ul className="space-y-2.5">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic CTA hint beneath grid */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Need a custom integration or bespoke enterprise scale?{" "}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold text-rose-500 hover:text-rose-600 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Consult our strategy managers
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
