import { NavLink, useNavigate } from "react-router-dom";
import { hrMenu, employeeMenu } from "./menuConfig";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const { role } = useRole();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menu = role === "hr" ? hrMenu : employeeMenu;

  const handleLogout = () => {
    logout();                // clear auth state + token
    navigate("/login", { replace: true }); // redirect
  };

  return (
    <aside className="w-64 bg-base-100 shadow-md hidden md:flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-primary">Dashboard</h2>
        <p className="text-sm text-gray-500 capitalize">{role}</p>
      </div>

      {/* Menu */}
      <ul className="menu p-4 gap-1 flex-1">
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active font-semibold" : ""
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="btn btn-error btn-sm w-full flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
