import { Routes, Route, Outlet, Navigate } from "react-router";
import { Dashboard } from "./Dashboard";

const useAuth = () => {
  // localStorage.clear();
  const token = localStorage.getItem("token");

  return token ? true : false;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to={"/"} replace />;
};

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Without authentication</h1>} />
      {/* User is logged in and can see these routes */}
      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route path="" element={<Dashboard />} />
        {/* Inferred by line 19 /dashboard */}
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>
    </Routes>
  );
};
