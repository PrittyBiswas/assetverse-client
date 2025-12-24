import { useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAuth from "../../hooks/useAuth";
export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  return (
    <>
      <PageTitle title="My Profile" />
      <div className="card bg-base-100 max-w-lg shadow-[0_20px_40px_-10px_rgba(30,58,138,0.6)]">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <img src={user?.photoURL || "https://i.pravatar.cc/100"} className="w-24 h-24 rounded-full" />
          </div> <label className="label">Full Name</label>
          <input className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="label mt-3">Email</label>
          <input className="input input-bordered" value={user?.email} readOnly />
          <button className="w-full btn bg-primary text-white hover:bg-blue-900" >
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}