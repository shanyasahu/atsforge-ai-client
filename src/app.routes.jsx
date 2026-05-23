import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import ProtectedRoute from "./features/auth/components/route-guards/ProtectedRoute";
import GuestRoute from "./features/auth/components/route-guards/GuestRoute";
import Home from "./features/home/pages/Home";
import Dashboard from "./features/dashboard/pages/Dashboard";
import InterviewReport from "./features/dashboard/pages/InterviewReport";
import DashboardLayout from "./features/dashboard/layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <Home />
      </GuestRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <Login />
      </GuestRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestRoute>
        <Register />
      </GuestRoute>
    ),
  },
  // Protected Dashboard Layout
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "interview-report",
        element: <InterviewReport />,
      },
    ],
  },
]);
