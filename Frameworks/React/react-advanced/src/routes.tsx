import { FC } from "react";
import { Routes, Route } from "react-router";
import App from "./App";
import { Login } from "./components/pages/Login";
import { Dashboard } from "./components/pages/Dashboard";
import { Settings } from "./components/pages/Settings";
import { PrivateRoute } from "./components/utils/PrivateRoute";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
