import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CustomerListPage from "../features/customers/pages/CustomerListPage";
import CustomerDetailPage from "../features/customers/pages/CustomerDetailPage";
import CustomerCreatePage from "../features/customers/pages/CustomerCreatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/customers" replace />,
      },
      {
        path: "customers",
        element: <CustomerListPage />,
      },
      {
  path: "customers/:customerId",
  element: <CustomerDetailPage />,
},{
  path: "customers/new",
  element: <CustomerCreatePage />,
},
    ],
  },
]);