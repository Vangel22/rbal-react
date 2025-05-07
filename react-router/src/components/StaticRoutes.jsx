import { Route, Routes } from "react-router";
import { Basic } from "./Basic";
import "../App.css";

export const StaticRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="/home" element={<h1>Home page</h1>} />
      <Route path="/about" element={<h1>About page</h1>} />
    </Routes>
  );
};
