import { useEffect, useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function AllRequests() {
  const axiosSecure = useAxiosSecure();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axiosSecure.get("/requests/hr").then((res) => {
      setRequests(res.data);
    });
  }, [axiosSecure]);

  const handleAction = async (id, action) => {
    await axiosSecure.patch(`/requests/${id}`, { action });

    setRequests((prev) =>
      prev.map((r) =>
        r._id === id
          ? {
              ...r,
              requestStatus: action === "approve" ? "approved" : "rejected",
            }
          : r
      )
    );
  };

  return (
    <>
      <PageTitle title="Asset Requests" />

      <div className="card bg-base-100 shadow">
        <div className="card-body overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Asset</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((r) => (
                <tr key={r._id}>
                  <td>{r.requesterName}</td>
                  <td>{r.assetName}</td>
                  <td>
                    <span className="badge badge-outline">
                      {r.requestStatus}
                    </span>
                  </td>
                  <td className="space-x-2">
                    {r.requestStatus === "pending" && (
                      <>
                        <button
                          onClick={() => handleAction(r._id, "approve")}
                          className="btn btn-xs btn-success"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleAction(r._id, "reject")}
                          className="btn btn-xs btn-error"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}

              {requests.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6">
                    No requests
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
