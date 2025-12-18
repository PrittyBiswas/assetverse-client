export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">
          Manage Company Assets
          <br />
          <span className="text-indigo-400">Without Chaos</span>
        </h1>

        <p className="text-slate-400 text-lg mb-10">
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
          <button className="border border-white/10 px-6 py-3 rounded-lg text-slate-300 hover:bg-white/5">
            Live Demo
          </button>
        </div>
      </div>
    </section>
  );
}
