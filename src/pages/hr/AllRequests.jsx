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
    setRequests((prev) => prev.filter((r) => r._id !== id));
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
                <th>Company</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r._id}>
                  <td>{r.requesterName}</td>
                  <td>{r.assetName}</td>
                  <td>{r.companyName}</td>
                  <td>{new Date(r.requestDate).toLocaleDateString()}</td>
                  <td className="space-x-2">
                    <button
                      className="btn btn-xs btn-success"
                      onClick={() => handleAction(r._id, "approve")}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => handleAction(r._id, "reject")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}

              {requests.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6">
                    No pending requests
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
