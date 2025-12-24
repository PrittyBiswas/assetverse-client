import React from "react";
import HeroBg from "../../assets/images/Fast-Lights-1.webp";

/* NEW SECTIONS */
import AboutSection from "../../components/home/AboutSection";
import PackagesSection from "../../components/home/PackagesSection";
import FeaturesSection from "../../components/home/FeaturesSection";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import ContactCTA from "../../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION (ALREADY OKAY) ================= */}
      <section
        className="min-h-[70vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-3xl relative z-10">
          <h1 className="text-2xl md:text-6xl py-3 font-bold text-white">
            Manage Company Assets
            <br />
            <span className="inline-block mt-6 text-indigo-400">
              Without Chaos
            </span>
          </h1>

          <p className="text-slate-300 text-lg mb-10 font-medium">
            AssetVerse helps companies track, assign, and manage assets
            with clarity and confidence.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium text-white"
            >
              Get Started
            </a>
            <button className="border border-indigo-500 px-6 py-3 rounded-lg text-white hover:bg-white/10 font-medium">
              Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <AboutSection />

      {/* ================= PACKAGES SECTION ================= */}
      <PackagesSection />

      {/* ================= FEATURES SECTION ================= */}
      <FeaturesSection />

      {/* ================= HOW IT WORKS ================= */}
      <HowItWorks />

      {/* ================= TESTIMONIALS / STATS ================= */}
      <Testimonials />

      {/* ================= FAQ ================= */}
      <FAQ />

      {/* ================= CONTACT CTA ================= */}
      <ContactCTA />
    </>
  );
}
