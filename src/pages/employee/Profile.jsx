import { useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAuth from "../../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");

  return (
    <>
      <PageTitle title="My Profile" />

      <div className="card bg-base-100 shadow max-w-lg">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/100"}
              className="w-24 h-24 rounded-full"
            />
          </div>

          <label className="label">Full Name</label>
          <input
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label mt-3">Email</label>
          <input
            className="input input-bordered"
            value={user?.email}
            readOnly
          />

          <button className="btn btn-primary mt-4">
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}
