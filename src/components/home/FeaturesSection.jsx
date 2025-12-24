export default function FeaturesSection() {
  const features = [
    "Asset Tracking",
    "Employee Requests",
    "Approval Workflow",
    "Real-time Status",
    "Secure Authentication",
    "Analytics Dashboard"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded shadow text-center">
            <p className="font-semibold">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
