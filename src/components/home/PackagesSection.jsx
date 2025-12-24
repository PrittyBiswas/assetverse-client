import { useEffect, useState } from "react";
import axios from "../../config/axios";

export default function PackagesSection() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("/packages").then(res => setPackages(res.data));
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pricing Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {packages.map(pkg => (
          <div key={pkg._id} className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
            <p className="text-3xl font-bold mb-4">₹{pkg.price}</p>
            <ul className="text-sm space-y-2 mb-6">
              <li>Employee Limit: {pkg.employeeLimit}</li>
              <li>Asset Limit: {pkg.assetLimit}</li>
              <li>Support: {pkg.support}</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
