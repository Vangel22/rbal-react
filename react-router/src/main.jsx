import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { StaticRoutes } from "./components/StaticRoutes";
import { CatchAllRoutes } from "./components/CatchAllRoutes";
import { DynamicRoutes } from "./components/DynamicRoutes";
import { NestedRoutes } from "./components/NestedRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <StaticRoutes /> */}
      {/* <CatchAllRoutes /> */}
      {/* <DynamicRoutes /> */}
      {/* <NestedRoutes /> */}
      {/* <LayoutRoutes /> */}
      {/* <ProtectedRoutes /> */}
      {/* <QueryUsingRoutes /> */}
      {/* <LazyRoutes /> */}
    </BrowserRouter>
  </StrictMode>
);

// Rb@lI@T2024!!
