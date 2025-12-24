import { useEffect, useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function AssetList() {
  const axiosSecure = useAxiosSecure();
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axiosSecure.get("/assets/hr").then((res) => {
      setAssets(res.data);
    });
  }, [axiosSecure]);

  // 🔍 SEARCH FILTER (EXAMINER REQUIRED)
  const filteredAssets = assets.filter((asset) =>
    asset.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageTitle
        title="Asset Inventory"
        subtitle="Manage all company assets"
      />

      <div className="card bg-base-100 shadow">
        <div className="card-body overflow-x-auto">

          {/* 🔍 SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search asset by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered mb-4 w-full max-w-sm"
          />

          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Asset</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Added</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredAssets.map((asset) => (
                <tr key={asset._id}>
                  <td className="flex items-center gap-3">
                    <img
                      src={asset.productImage}
                      alt={asset.productName}
                      className="w-10 h-10 rounded"
                    />
                    {asset.productName}
                  </td>

                  <td>{asset.productType}</td>
                  <td>{asset.availableQuantity}</td>
                  <td>
                    {new Date(asset.dateAdded).toLocaleDateString()}
                  </td>

                  <td className="space-x-2">
                    <button className="btn btn-xs btn-outline">
                      Edit
                    </button>
                    <button className="btn btn-xs btn-error">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredAssets.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6">
                    No assets found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
