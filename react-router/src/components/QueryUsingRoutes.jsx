import { Route, Routes, useSearchParams } from "react-router";

export const QueryUsingRoutes = () => {
  const [searchParams] = useSearchParams(); // we are getting the first array from useSearchParams
  //   const query = useSearchParams();

  console.log("Query", searchParams);
  console.log("Query param name", searchParams.get("name"));
  console.log("Query param surname", searchParams.get("surname"));

  return (
    <Routes>
      <Route path="/home" element={<h1>Hello</h1>} />
    </Routes>
  );
};
