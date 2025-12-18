import useRole from "../hooks/useRole";
import { Navigate } from "react-router-dom";

export default function RequireHR({ children }) {
  const { role, roleLoading } = useRole();

  if (roleLoading) return null;
  if (role !== "hr") return <Navigate to="/dashboard/my-assets" replace />;

  return children;
}