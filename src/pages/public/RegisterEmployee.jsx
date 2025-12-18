import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageTitle from "../../components/common/PageTitle";

const API = "http://localhost:5000/api";

export default function RegisterEmployee() {
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
      dateOfBirth: form.dob.value,
    };

    try {
      await axios.post(
        `${API}/auth/register/employee`,
        data
      );

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-base-100 shadow rounded">
      <PageTitle title="Register as Employee" />

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

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={6}
          className="input input-bordered w-full"
        />

        <input
          name="dob"
          type="date"
          required
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Registering..." : "Register Employee"}
        </button>
      </form>
    </div>
  );
}
