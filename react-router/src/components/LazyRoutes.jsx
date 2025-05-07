import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// React.lazy needs to work wit a fallback -> Suspense

const Home = lazy(() => import("../pages/Home"));

export const LazyRoutes = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<h1>Landing Page</h1>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default LazyRoutes;
