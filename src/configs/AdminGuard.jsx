import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectUsers } from "../slices/auth.slice";
import RoleConst from "@/constant/userRole.const";

const AdminGuard = () => {
  const user = useSelector(selectUsers);
  const location = useLocation();

  if (user?.role !== RoleConst.ADMIN) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

export default AdminGuard;
