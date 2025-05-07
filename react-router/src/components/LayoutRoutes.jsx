import { Link, Outlet, Route, Routes } from "react-router";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export const LayoutRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Route>
    </Routes>
  );
};
