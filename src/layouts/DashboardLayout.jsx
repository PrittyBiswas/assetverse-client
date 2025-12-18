import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-base-200">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
}
