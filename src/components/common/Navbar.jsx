import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow px-6">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold text-primary tracking-wide"
        >
          AssetVerse
        </Link>
      </div>

      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-ghost border border-primary rounded">
              Login
            </Link>
            <Link to="/register/employee" className="btn btn-primary">
              Join as Employee
            </Link>
            <Link to="/register/hr" className="btn btn-primary">
              Join as HR
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.pravatar.cc/100"}
                  alt="profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 items-center "
            >
              <li className="py-2 w-full flex justify-center text-center">
                <Link
                  to="/dashboard"
                  className="bg-gray-200 hover:bg-primary px-4 py-2 rounded text-center w-full"
                >
                  Dashboard
                </Link>
              </li>
              <li className="w-full flex justify-center">
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 hover:bg-primary px-4 py-2 rounded text-center w-full"
                >
                  Logout
                </button>
              </li>

            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
