import React from "react";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Manage Your Assets Smarter?
        </h2>

        <p className="mb-8 text-indigo-100">
          Join AssetVerse today and bring clarity to your asset management.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/register-hr"
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Register as HR
          </a>

          <a
            href="/login"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
}
