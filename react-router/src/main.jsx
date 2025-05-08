import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { StaticRoutes } from "./components/StaticRoutes";
import { CatchAllRoutes } from "./components/CatchAllRoutes";
import { DynamicRoutes } from "./components/DynamicRoutes";
import { NestedRoutes } from "./components/NestedRoutes";
import { LayoutRoutes } from "./components/LayoutRoutes";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { QueryUsingRoutes } from "./components/QueryUsingRoutes";
import LazyRoutes from "./components/LazyRoutes";
import { userLoader, UserPage } from "./pages/UserPage";
import { ErrorPage } from "./pages/ErrorPage";
import { addNewUser, AddUser } from "./pages/AddUser";
import {
  MutateUser,
  userLoaderById,
  updateUserAction,
} from "./pages/MutateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserPage />,
    loader: userLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <h1>User path</h1>,
      },
    ],
  },
  {
    path: "/add-user",
    element: <AddUser />,
    action: addNewUser,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mutate-user/:id",
    element: <MutateUser />,
    loader: userLoaderById,
    action: updateUserAction, // Try with delete action
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <StaticRoutes /> */}
    {/* <CatchAllRoutes /> */}
    {/* <DynamicRoutes /> */}
    {/* <NestedRoutes /> */}

    {/* <LayoutRoutes /> */}
    {/* <ProtectedRoutes /> */}

    {/* <QueryUsingRoutes /> */}
    {/* <LazyRoutes /> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />
  </StrictMode>
);

// Rb@lI@T2024!!
