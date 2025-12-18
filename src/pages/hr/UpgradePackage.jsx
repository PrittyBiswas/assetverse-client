import PageTitle from "../../components/common/PageTitle";

const packages = [
  { name: "Basic", limit: 5, price: 5 },
  { name: "Standard", limit: 10, price: 8 },
  { name: "Premium", limit: 20, price: 15 },
];

export default function UpgradePackage() {
  return (
    <>
      <PageTitle
        title="Upgrade Package"
        subtitle="Increase employee limits"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="card bg-base-100 shadow">
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">{pkg.name}</h2>
              <p className="text-3xl font-semibold">${pkg.price}</p>
              <p className="text-sm">
                Employee limit: {pkg.limit}
              </p>
              <button className="btn btn-primary mt-4">
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
