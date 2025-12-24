import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageTitle from "../../components/common/PageTitle";

const API = "https://main-assetverse-server.vercel.app/api";

export default function RegisterHR() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      companyName: form.companyName.value,
      companyLogo: form.companyLogo.value,
      dateOfBirth: form.dob.value,
    };

    try {
      await axios.post(`${API}/auth/register/hr`, data);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-base-100 shadow-[0_20px_40px_-10px_rgba(30,58,138,0.6)] rounded">
      <PageTitle title="Register as HR" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        {/* ✅ PASSWORD FIELD (NEW) */}
        <input
          name="password"
          type="password"
          placeholder="Password (min 6 characters)"
          required
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        <input
          name="companyName"
          placeholder="Company Name"
          required
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        <input
          name="companyLogo"
          placeholder="Company Logo URL"
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        <input
          name="dob"
          type="date"
          required
          className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
        />

        <button className="btn  w-full  bg-primary text-white hover:bg-blue-900" disabled={loading}>
          {loading ? "Registering..." : "Register HR"}
        </button>
      </form>
    </div>
  );
}
