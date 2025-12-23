import React from 'react';
import HeroBg from '../../assets/images/Fast-Lights-1.webp';

export default function Home() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center text-center px-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-3xl relative z-10">
        <h1 className="text-2xl md:text-6xl py-3 font-bold  text-white ">
          Manage Company Assets
          <br />
          <span className="inline-block mt-6 text-indigo-400">
            Without Chaos
          </span>

        </h1>

        <p className="text-slate-400 text-lg mb-10 font-semibold">
          AssetVerse helps companies track, assign, and manage assets
          with clarity and confidence.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium"
          >
            Get Started
          </a>
          <button className="border border-indigo-500 px-6 py-3 rounded-lg text-white hover:bg-white/10 font-medium">
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}
