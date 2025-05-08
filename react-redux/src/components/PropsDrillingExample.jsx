import { useState } from "react";

export const BasicApp = () => {
  const [theme, setTheme] = useState("light");
  const user = { name: "Eva", email: "eva@example.com" };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <Layout theme={theme} toggleTheme={toggleTheme} user={user} />;
};

function Layout({ theme, toggleTheme, user }) {
  return (
    <div className={`app ${theme}`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <Content user={user} />
    </div>
  );
}

function Sidebar({ theme, toggleTheme }) {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

function Content({ user }) {
  return (
    <div className="content">
      <h2>Main Content</h2>
      <UserProfile user={user} />
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
