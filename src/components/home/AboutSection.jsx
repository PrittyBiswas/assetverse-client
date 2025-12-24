export default function AboutSection() {
  const benefits = [
    {
      title: "Centralized Asset Management",
      desc: "Manage all company assets from one secure dashboard."
    },
    {
      title: "Role Based Access",
      desc: "Employees and HR managers get different access levels."
    },
    {
      title: "Request & Approval Workflow",
      desc: "Simple asset request, approval, and tracking system."
    },
    {
      title: "Scalable for Teams",
      desc: "Works for startups to large organizations."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose AssetVerse?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
