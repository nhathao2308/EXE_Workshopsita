import { createBrowserRouter } from 'react-router-dom'
import Loadable from './Loadable'
import MainLayout from '../layout/MainLayout'
import AuthGuard from './AuthGuard'
import AdminGuard from './AdminGuard'
import ManagerGuard from './ManagerGuard'
import AdminLayout from '@/layout/AdminLayout'

const Login = Loadable({ loader: () => import('../pages/login/Login') })
const Register = Loadable({
  loader: () => import('../pages/register/Register'),
})
const Profile = Loadable({
  loader: () => import('../pages/profile/profile'),
})
const Home = Loadable({
  loader: () => import('../pages/dashboard/Dashboard'),
})
const Admin = Loadable({
  loader: () => import('../pages/admin/Admin'),
})
const WorkshopList = Loadable({
  loader: () => import('../pages/WorkshopList/WorkshopList'),
})
const WSDettail = Loadable({
  loader: () => import('../pages/WSDetailPage/WSDettail'),
})

const AboutUs = Loadable({
  loader: () => import('../pages/AboutUs/AboutUs'),
})
const OrganizerHome = Loadable({
  loader: () => import('../pages/Organizer/OrganizerPage'),
})

const UpdateWorkshop = Loadable({
  loader: () => import('../pages/Organizer/ManagePage'),
})
const CreateWorkshop = Loadable({
  loader: () => import('../pages/Organizer/CreateWorkshop'),
})
// const ManageProducts = Loadable({
//   loader: () => import("../pages/manage/ManageProducts"),
// });

export const router = createBrowserRouter([
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/register',
    element: Register,
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: 'organizerhome',
        element: OrganizerHome,
      },
      {
        path: 'update-workshop',
        element: UpdateWorkshop,
      },
      {
        path: 'create-workshop',
        element: CreateWorkshop,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout showFooter={false} />,
    children: [
      {
        index: true,
        element: Home,
      },
      {
        path: 'workshop-list',
        element: WorkshopList,
      },
      {
        path: 'workshop-detail',
        element: WSDettail,
      },
      {
        path: 'about-us',
        element: AboutUs,
      },
      {
        path: 'profile',
        element: Profile,
      },
      {
        path: '/',
        element: <AuthGuard />,
        children: [
          {
            index: true,
            element: Home,
          },
          {
            path: 'profile',
            element: Profile,
          },
        ],
      },
      {
        path: 'admin',
        element: <AuthGuard />,
        children: [
          {
            index: false,
            element: <AdminGuard />,
            children: [
              {
                index: true,
                element: Admin,
              },
            ],
          },
        ],
      },
      {
        path: 'manage-products',
        element: <AuthGuard />,
        children: [
          {
            index: false,
            element: <ManagerGuard />,
            children: [
              {
                index: true,
                element: Admin,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>ERROR</div>,
  },
])
