import { Routes, Route, useParams } from "react-router";
import { User } from "./User";

export const DynamicRoutes = () => {
  const params = useParams();
  console.log(params);

  // const data = fetch(`users/${id}`)

  // /user/1

  return (
    <Routes>
      <Route path="/user/${id}/:second" element={<User data />} />
    </Routes>
  );
};
