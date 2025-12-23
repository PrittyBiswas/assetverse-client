import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const API = "https://main-assetverse-server.vercel.app/api";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await axios.post(`${API}/auth/jwt`, {
        email,
        password,
      });

      const { token, role } = res.data;


      localStorage.setItem("access-token", token);


      setUser({ email, role });


      if (role === "hr") {
        navigate("/dashboard/assets", { replace: true });
      } else {
        navigate("/dashboard/my-assets", { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-96 bg-base-100 p-8 rounded-xl shadow-[0_20px_40px_-10px_rgba(30,58,138,0.6)]">

        <PageTitle title="Sign in" />

        <form onSubmit={handleSubmit}>
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


          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full pl-4 mb-4 input input-bordered 
             outline-none focus:outline-none 
             focus:border-transparent 
             shadow-[0_0_0_2px_rgba(30,58,138,0.35)]
             focus:shadow-[0_0_0_3px_rgba(30,58,138,0.6)]"
          />

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn bg-primary text-white hover:bg-blue-900"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
