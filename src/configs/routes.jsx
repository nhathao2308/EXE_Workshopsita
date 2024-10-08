import { createBrowserRouter } from "react-router-dom";
import Loadable from "./Loadable";
import MainLayout from "../layout/MainLayout";

const Login = Loadable({ loader: () => import("@/pages/login/Login") });
const Register = Loadable({
  loader: () => import("@/pages/register/Register"),
});
// const Home = Loadable({ loader: () => import("../pages/home/Home") });
const Home = Loadable({ loader: () => import("@/pages/dashboard/Dashboard") });
// const ManageProducts = Loadable({
//   loader: () => import("../pages/manage/ManageProducts"),
// });

export const router = createBrowserRouter([
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/",
    element: <MainLayout showFooter={false} />,
    children: [
      {
        index: true,
        element: Home,
      },
    ],
  },
  {
    path: "*",
    element: <div>ERROR</div>,
  },
]);
