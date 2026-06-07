import { Navigate, Outlet } from "react-router-dom";
import { useAccount } from "../../hooks/use-account";

function ProtectedRoute({ allowedRole }) {
  const { account } = useAccount();

  if (!account?.user) {
    return <Navigate to="/login" replace />;
  }

  if (account.user.role !== allowedRole) {
    const defaultPath = account.user.role === "admin" ? "/admin" : "talent";
    return <Navigate to={defaultPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
