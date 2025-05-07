import { Route, Routes } from "react-router";

import { Dashboard } from "./Dashboard";

export const NestedRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<h1>Settings</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
      </Route>
    </Routes>
  );
};
