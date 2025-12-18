import { useEffect, useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function RequestAsset() {
  const axiosSecure = useAxiosSecure();
  const [assets, setAssets] = useState([]);
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosSecure
      .get("/assets/available")
      .then((res) => setAssets(res.data))
      .finally(() => setLoading(false));
  }, [axiosSecure]);

  const handleRequest = async (assetId) => {
    await axiosSecure.post("/requests", {
      assetId,
      note: notes[assetId] || "",
    });

    alert("Request submitted successfully");

    // Clear note for this asset only
    setNotes((prev) => ({ ...prev, [assetId]: "" }));
  };

  return (
    <>
      <PageTitle
        title="Request an Asset"
        subtitle="Available company assets"
      />

      {loading ? (
        <p className="text-center py-10">Loading assets...</p>
      ) : assets.length === 0 ? (
        <p className="text-center py-10 text-gray-500">
          No assets available at the moment
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div key={asset._id} className="card bg-base-100 shadow">
              <figure className="h-40 bg-base-200">
                <img
                  src={asset.productImage}
                  alt={asset.productName}
                  className="object-contain h-full"
                />
              </figure>

              <div className="card-body">
                <h3 className="font-semibold">
                  {asset.productName}
                </h3>
                <p className="text-sm">{asset.productType}</p>
                <p className="text-xs">
                  Available: {asset.availableQuantity}
                </p>

                <textarea
                  className="textarea textarea-bordered mt-2"
                  placeholder="Optional note"
                  value={notes[asset._id] || ""}
                  onChange={(e) =>
                    setNotes((prev) => ({
                      ...prev,
                      [asset._id]: e.target.value,
                    }))
                  }
                />

                <button
                  onClick={() => handleRequest(asset._id)}
                  className="btn btn-primary btn-sm mt-2"
                  disabled={asset.availableQuantity === 0}
                >
                  Request
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
