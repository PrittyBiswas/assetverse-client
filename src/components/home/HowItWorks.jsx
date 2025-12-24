export default function HowItWorks() {
  const steps = [
    "Register as HR or Employee",
    "Add or Request Assets",
    "Track & Manage Approvals"
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {steps.map((s, i) => (
          <div key={i} className="p-6 border rounded text-center">
            <div className="text-2xl font-bold mb-2">{i + 1}</div>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
