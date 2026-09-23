import { createBrowserRouter, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthPage from "../features/auth/pages/AuthPage";

import CustomerListPage from "../features/customers/pages/CustomerListPage";
import CustomerDetailPage from "../features/customers/pages/CustomerDetailPage";
import CustomerCreatePage from "../features/customers/pages/CustomerCreatePage";
import ContractCreatePage from "../features/contracts/pages/ContractCreatePage";
import WorkTrackingPage from "../features/contracts/pages/WorkTrackingPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";

export const router = createBrowserRouter([
  // 登入頁獨立
  {
    path: "/login",
    element: <AuthPage />,
  },

  // 系統內頁
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "customers",
        element: <CustomerListPage />,
      },
      {
        path: "customers/new",
        element: <CustomerCreatePage />,
      },
      {
        path: "customers/:customerId",
        element: <CustomerDetailPage />,
      },
      {
        path: "customers/:customerId/contracts/new",
        element: <ContractCreatePage />,
      },
      {
        path: "work-tracking",
        element: <WorkTrackingPage />,
      },
    ],
  },
]);
