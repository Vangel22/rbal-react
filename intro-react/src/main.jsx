import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// index.html holds id="root"
// .render is the React renderer

// React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Hello'
// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
