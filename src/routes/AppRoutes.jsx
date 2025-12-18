import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import RequireHR from "./RequireHR";

import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import RegisterEmployee from "../pages/public/RegisterEmployee";
import RegisterHR from "../pages/public/RegisterHR";
import NotFound from "../pages/public/NotFound";

// HR
import AssetList from "../pages/hr/AssetList";
import AddAsset from "../pages/hr/AddAsset";
import AllRequests from "../pages/hr/AllRequests";
import EmployeeList from "../pages/hr/EmployeeList";
import UpgradePackage from "../pages/hr/UpgradePackage";

// Employee
import MyAssets from "../pages/employee/MyAssets";
import RequestAsset from "../pages/employee/RequestAsset";
import MyTeam from "../pages/employee/MyTeam";
import Profile from "../pages/employee/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register/employee", element: <RegisterEmployee /> },
      { path: "register/hr", element: <RegisterHR /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // HR
      {
        path: "assets",
        element: (
          <RequireHR>
            <AssetList />
          </RequireHR>
        ),
      },
      {
        path: "add-asset",
        element: (
          <RequireHR>
            <AddAsset />
          </RequireHR>
        ),
      },
      {
        path: "requests",
        element: (
          <RequireHR>
            <AllRequests />
          </RequireHR>
        ),
      },
      {
        path: "employees",
        element: (
          <RequireHR>
            <EmployeeList />
          </RequireHR>
        ),
      },
      {
        path: "upgrade",
        element: (
          <RequireHR>
            <UpgradePackage />
          </RequireHR>
        ),
      },

      // Employee
      { path: "my-assets", element: <MyAssets /> },
      { path: "request-asset", element: <RequestAsset /> },
      { path: "my-team", element: <MyTeam /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
