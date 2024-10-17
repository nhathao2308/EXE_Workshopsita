import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUsers } from "../slices/auth.slice";
import RoleConst from "@/constant/userRole.const";

const ManagerGuard = () => {
  const user = useSelector(selectUsers);

  if (user?.role !== RoleConst.ORGANIZER) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
};

export default ManagerGuard;
