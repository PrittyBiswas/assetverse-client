import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
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

      <div className="flex-none gap-4">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
            <Link to="/register/employee" className="btn btn-outline btn-primary">
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
              className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
