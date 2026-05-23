import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Campaigns from "./components/Campaigns";
import CreatorCategories from "./components/CreatorCategories";
import Testimonials from "./components/Testimonials";
import ProcessTimeline from "./components/ProcessTimeline";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8FAFC]">
      {/* Translucent sticky header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner with Infinite Scrolling Creator Cards */}
        <Hero />

        {/* Client Partner Marquee Grid */}
        <TrustedBrands />

        {/* Premium Informational About Us Section */}
        <AboutUs />

        {/* Agency Metrics and KPI Panel */}
        <Stats />

        {/* Tab-indexed Capabilities & Services */}
        <Services />

        {/* Filter-enabled Campaigns list */}
        <Campaigns />

        {/* Sourced Niche Category list */}
        <CreatorCategories />

        {/* Case-study Delivery Workflow Steps */}
        <ProcessTimeline />

        {/* Interactive Client Reviews and Testimonials */}
        <Testimonials />

        {/* Forecaster Interactive Intake Consultation Sourcing */}
        <ContactSection />
      </main>

      {/* Corporate compliant Foot note */}
      <Footer />
    </div>
  );
}
