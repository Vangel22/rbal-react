import { Route, Routes } from "react-router";
import { Basic } from "./Basic";

export const CatchAllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Basic />} />
      <Route path="*" element={<h1>Route not found.</h1>} />
    </Routes>
  );
};
