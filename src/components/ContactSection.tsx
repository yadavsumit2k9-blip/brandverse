import React, { useState } from "react";
import { Mail, Calendar, RefreshCw, Sparkles, CheckCircle2, MessageSquare, Instagram, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "$10K - $50K",
    goal: "Brand Awareness",
    platform: "Multi-Platform",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmedCall, setConfirmedCall] = useState(false);

  const budgetOptions = ["Under $10K", "$10K - $50K", "$50K - $250K", "$250K+"];
  const goalOptions = ["Brand Awareness", "Direct Sales Conversions", "User Generated Content (UGC)", "Community Sourcing"];
  const platformOptions = ["Multi-Platform", "Instagram Reels", "TikTok", "YouTube", "LinkedIn"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setErrorMsg("Please fill in Name, Email, and Company fields to generate your custom campaign blueprint.");
      return;
    }

    setErrorMsg("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getKPIEstimates = (budget: string) => {
    switch (budget) {
      case "Under $10K":
        return { reach: "150K - 500K", creators: "4 - 8 micro-creators", roi: "3.8x - 4.2x", impressions: "600K" };
      case "$10K - $50K":
        return { reach: "800K - 2.5M", creators: "12 - 20 macro-creators", roi: "4.2x - 4.8x", impressions: "3.2M" };
      case "$50K - $250K":
        return { reach: "4.0M - 12M", creators: "30 - 50 hand-picked creators", roi: "4.8x - 5.4x", impressions: "16.4M" };
      default:
        return { reach: "15M - 50M+", creators: "Global macro + 2 celebrity partner networks", roi: "5.2x - 6.0x", impressions: "64.0M" };
    }
  };

  const estimates = getKPIEstimates(formData.budget);

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Slogan and Copy Info */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center text-left">
            <span className="text-xs font-bold tracking-widest text-[#0F172A]/60 uppercase">
              STRATEGIC PARTNERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] mt-3 mb-6 leading-tight">
              Let's craft your next viral campaign
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
              Ready to grow your metrics? Fill out our system matrix. Our digital director will follow up with you within 1 business day with custom vetted creator proposals.
            </p>

            <div className="space-y-4">
              {/* WhatsApp direct CTA button */}
              <a
                href="https://wa.me/918700783650?text=Hello%20BRANDVERSE%2C%20I%20want%20to%20discuss%20influencer%20marketing%20and%20creator%20promotions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4.5 bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-100/50 rounded-2xl transition hover:-translate-y-0.5 duration-200 group text-left"
              >
                <div className="p-3 bg-white border border-emerald-200/30 rounded-xl shadow-xs shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Connect on WhatsApp</h4>
                  <p className="text-sm font-extrabold text-[#0F172A] mt-1 group-hover:text-emerald-600 transition">Chat with BRANDVERSE</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Email direct CTA button */}
              <a
                href="mailto:businessnexvora@gmail.com?subject=Brand%20Promotion%20Inquiry"
                className="flex items-center space-x-4 p-4.5 bg-rose-50/50 hover:bg-rose-50 border border-rose-100/50 rounded-2xl transition hover:-translate-y-0.5 duration-200 group text-left"
              >
                <div className="p-3 bg-white border border-rose-200/30 rounded-xl shadow-xs shrink-0">
                  <Mail className="w-5 h-5 text-rose-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">Send Campaign Inquiry</h4>
                  <p className="text-sm font-extrabold text-[#0F172A] mt-1 group-hover:text-rose-500 transition">Email BRANDVERSE</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-rose-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Instagram direct CTA button */}
              <a
                href="https://www.instagram.com/brandversehq?igsh=MTY3YzFienIwaGgzaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4.5 bg-slate-50 hover:bg-slate-100/70 border border-slate-200/50 rounded-2xl transition hover:-translate-y-0.5 duration-200 group text-left"
              >
                <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs shrink-0">
                  <Instagram className="w-5 h-5 text-rose-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Join Creator Circle</h4>
                  <p className="text-sm font-extrabold text-[#0F172A] mt-1 group-hover:text-slate-900 transition font-sans">Follow BRANDVERSE</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Panel: Lead Generation Booking Form */}
          <div className="lg:col-span-12 xl:col-span-7 w-full">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/60 shadow-md relative overflow-hidden"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-display font-extrabold text-[#0F172A]">
                    Book Campaign Strategy Briefing
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your company goals to check estimate reach and estimated ROI values.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-xs font-semibold text-rose-600">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arthur Pendelton"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. arthur@loreal.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Aura Mason"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Website URL
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="e.g. www.auramason.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Est. Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-800 transition-all text-slate-900"
                    >
                      {budgetOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Campaign Target Goal
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-800 transition-all text-slate-900"
                    >
                      {goalOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Ideal Platforms
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-800 transition-all text-slate-900"
                    >
                      {platformOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Campaign Scope Remarks (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your seasonal direction, aesthetic goals, or creator requirements..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:border-rose-500 transition-all text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#0F172A] hover:bg-rose-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 cursor-pointer text-center flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin mr-2" />
                      Calculating Forecast Metrics...
                    </>
                  ) : (
                    <>
                      <span>Generate Campaign Brief Checklist</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* INSTANT STRATEGY PREVIEW (Interactive Pitch Blueprint Card) */
              <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden animate-[fadeIn_0.5s_ease-out]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
                
                {/* Generated Header block */}
                <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-white/10">
                  <div className="p-2 sm:p-3 bg-rose-600 rounded-xl">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-wider text-rose-500 uppercase leading-none">
                      INSTANT MEDIA PITCH GENERATED
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-50 mt-1 leading-snug">
                      Strategic Blueprint for: {formData.company}
                    </h3>
                  </div>
                </div>

                {/* Grid performance projections */}
                <p className="text-xs text-slate-400 mb-6">
                  Based on your target parameters we have cross-referenced our digital talent pools to compile the following performance projections:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-400 tracking-wider uppercase leading-none mb-1.5">
                      Sourced Target Audience
                    </p>
                    <p className="text-lg sm:text-xl font-display font-black text-rose-500 font-mono">
                      {estimates.reach}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-none">
                      Calculated active user impressions
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-400 tracking-wider uppercase leading-none mb-1.5">
                      Estimated Content Impressions
                    </p>
                    <p className="text-lg sm:text-xl font-display font-black text-white font-mono">
                      {estimates.impressions}+
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-none">
                      Verified micro-video impressions
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-400 tracking-wider uppercase leading-none mb-1.5">
                      Recommended Creator Scope
                    </p>
                    <p className="text-sm font-bold text-rose-400 mt-1 truncate">
                      {estimates.creators}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-none">
                      Based on category tag: {formData.goal}
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-400 tracking-wider uppercase leading-none mb-1.5">
                      Projected Target Campaign ROI
                    </p>
                    <p className="text-lg font-bold text-emerald-400 font-mono">
                      {estimates.roi}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1.5 leading-none">
                      Benchmark creator conversions
                    </p>
                  </div>
                </div>

                {/* Checklist validation block */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8">
                  <h4 className="text-xs font-bold text-slate-200 tracking-widest uppercase mb-3">
                    NEXT STEPS & CAMPAIGN TIMELINE:
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-300">Platform credentials and brief confirmation checklist delivery via internal director.</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-xs text-slate-300">Creator shortlists will be compiled matching your budget range.</span>
                    </div>
                  </div>
                </div>

                {/* Switch states */}
                {confirmedCall ? (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 rounded-xl mb-6">
                    🎉 Strategy proposal submitted directly to our Digital Director! We will email you your finalized pitch deck shortly to coordinate a video briefing.
                  </div>
                ) : null}

                {/* Back and submit triggers */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-bold text-white">{formData.name}</p>
                    <p className="text-[10px] text-slate-400">{formData.email}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setConfirmedCall(false);
                      }}
                      className="px-4 py-2.5 rounded-lg border border-white/10 text-xs font-semibold hover:bg-white/5 transition"
                    >
                      Refine Options
                    </button>
                    {!confirmedCall ? (
                      <button
                        onClick={() => setConfirmedCall(true)}
                        className="px-4.5 py-2.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-xs font-bold transition shadow-sm cursor-pointer"
                      >
                        Confirm Strategic Call
                      </button>
                    ) : null}
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
