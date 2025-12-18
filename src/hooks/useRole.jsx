import useAuth from "./useAuth";

export default function useRole() {
  const { user, loading } = useAuth();
  return { role: user?.role, roleLoading: loading };
}
