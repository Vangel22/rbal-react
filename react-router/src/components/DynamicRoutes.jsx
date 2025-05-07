import { Routes, Route } from "react-router";
import { User } from "./User";

export const DynamicRoutes = () => {
  return (
    <Routes>
      <Route path="/user/:id/:second" element={<User />} />
    </Routes>
  );
};
