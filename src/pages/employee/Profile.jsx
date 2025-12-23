import { useState, useEffect } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAuth from "../../hooks/useAuth"; // your auth context

export default function Profile() {
  const { user, updateUser } = useAuth(); // updateUser should update backend/user context
  const [name, setName] = useState("");

  // Populate input when user loads
  useEffect(() => {
    if (user?.displayName) {
      setName(user.displayName);
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      await updateUser({ displayName: name }); // call API or context updater
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <PageTitle title="My Profile" />

      <div className="card bg-base-100 max-w-lg shadow-[0_20px_40px_-10px_rgba(30,58,138,0.6)] mx-auto mt-6">
        <div className="card-body">
          <div className="flex justify-center mb-4">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/100"}
              className="w-24 h-24 rounded-full"
              alt="Profile"
            />
          </div>

          {/* Name */}
          <label className="label">Full Name</label>
          <input
            type="text"
            className="w-full pl-4 mb-4 input input-bordered 
             rounded 
             outline-none focus:outline-none 
             focus:border-transparent 
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)] 
             transition-shadow duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


          {/* Email */}
          <label className="label">Email</label>
          <input
            className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
            value={user?.email || ""}
            readOnly
          />

          {/* Update Button */}
          <button
            className="w-full btn bg-primary text-white hover:bg-blue-900"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </>
  );
}
