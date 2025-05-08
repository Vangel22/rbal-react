import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../state/basicApp/basicAppSlice";

export const BasicAppSolved = () => {
  return <Layout />;
};

function Layout() {
  const theme = useSelector((state) => state.app.value);

  return (
    <div className={`app ${theme}`}>
      <Sidebar />
      <Content />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ThemeToggle />
    </div>
  );
}

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

function Content() {
  return (
    <div className="content">
      <h2>Main Content</h2>
      <UserProfile />
    </div>
  );
}

function UserProfile() {
  const user = useSelector((state) => state.app.user);
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
