import { useEffect, useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import generatePDF from "../../utils/generatePDF";

export default function MyAssets() {
  const axiosSecure = useAxiosSecure();
  const [assets, setAssets] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosSecure
      .get("/assigned-assets/me")
      .then((res) => {
        setAssets(res.data);
      })
      .catch(() => {
        setError("Failed to load assets");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredAssets =
    filter === "all"
      ? assets
      : assets.filter((a) => a.assetType === filter);

  const handleReturn = async (id) => {
    try {
      await axiosSecure.patch(`/assigned-assets/return/${id}`);

      setAssets((prev) =>
        prev.map((a) =>
          a._id === id
            ? { ...a, status: "returned", returnDate: new Date() }
            : a
        )
      );
    } catch {
      alert("Failed to return asset");
    }
  };

  return (
    <>
      <PageTitle
        title="My Assets"
        subtitle="Assets assigned from all companies"
      />

      <div className="flex justify-between mb-4">
        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Returnable">Returnable</option>
          <option value="Non-returnable">Non-returnable</option>
        </select>

        <button
          onClick={() => generatePDF("my-assets")}
          className="btn btn-outline btn-primary border-2 border-primary text-primary font-bold p-3 px-6 rounded-lg 
             hover:bg-primary hover:text-white 
             transition-colors duration-200 
             flex items-center gap-2"
        >
         Print / PDF
        </button>


      </div>

      <div
        id="my-assets"
        className="card shadow-[0_20px_40px_-10px_rgba(30,58,138,0.6)]"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        <div className="card-body overflow-x-auto">
          {loading && <p className="text-center py-6">Loading...</p>}

          {error && (
            <p className="text-center py-6 text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && (
            <table className="table">
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Type</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) => (
                  <tr key={asset._id}>
                    <td>{asset.assetName}</td>
                    <td>{asset.assetType}</td>
                    <td>{asset.companyName}</td>
                    <td>
                      <span className="badge">{asset.status}</span>
                    </td>
                    <td>
                      {asset.assetType === "Returnable" &&
                        asset.status === "assigned" && (
                          <button
                            onClick={() => handleReturn(asset._id)}
                            className="btn btn-xs btn-warning"
                          >
                            Return
                          </button>
                        )}
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
          )}
        </div>
      </div>
    </>
  );
}
