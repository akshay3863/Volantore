import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
const Calender = lazy(() => import("screen/pages/Calender/Calender"));
const LandingPage = lazy(() => import("screen/pages/LandingPage"));
const AuthPage = lazy(() => import("screen/auth"));
const Dashboard = lazy(() => import("Layout/CommanLayout"));
const LayoutContent = lazy(() => import("Layout/CommanLayout/LayoutContent"));

const AppRoutes = () => {
  const routes = [
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "", element: <LayoutContent element={LandingPage} /> },
        { path: "clinic-calender", element: <LayoutContent element={Calender} /> },
      ],
    },
    { path: "/", element: <AuthPage /> },
    { path: "/signup", element: <AuthPage /> },
    { path: "*", element: <Navigate to="/" /> },
  ];
  return useRoutes(routes);
};

export default AppRoutes;
