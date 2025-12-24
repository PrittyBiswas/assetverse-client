export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Trusted by Companies
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        <div className="bg-white p-6 rounded shadow">
          <p>"AssetVerse simplified our asset tracking."</p>
          <p className="mt-2 font-semibold">— TechNova Pvt Ltd</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p>"Easy to use and very efficient."</p>
          <p className="mt-2 font-semibold">— CodeSphere Inc</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p>"Perfect for growing teams."</p>
          <p className="mt-2 font-semibold">— StartupHub</p>
        </div>
      </div>
    </section>
  );
}
