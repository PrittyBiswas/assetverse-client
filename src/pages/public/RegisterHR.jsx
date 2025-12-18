import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageTitle from "../../components/common/PageTitle";

const API = "http://localhost:5000/api";

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
      password: form.password.value, // ✅ REQUIRED
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
    <div className="max-w-md mx-auto mt-12 p-6 bg-base-100 shadow rounded">
      <PageTitle title="Register as HR" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          required
          className="input input-bordered w-full"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="input input-bordered w-full"
        />

        {/* ✅ PASSWORD FIELD (NEW) */}
        <input
          name="password"
          type="password"
          placeholder="Password (min 6 characters)"
          required
          className="input input-bordered w-full"
        />

        <input
          name="companyName"
          placeholder="Company Name"
          required
          className="input input-bordered w-full"
        />

        <input
          name="companyLogo"
          placeholder="Company Logo URL"
          className="input input-bordered w-full"
        />

        <input
          name="dob"
          type="date"
          required
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Registering..." : "Register HR"}
        </button>
      </form>
    </div>
  );
}
