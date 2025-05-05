import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import JohnDoe, { AvatarAdvanced } from "./components/Avatar";

function App() {
  return (
    <>
      <div>
        <JohnDoe name="John Doe" age={25} />
        <AvatarAdvanced />
        <a href="https://vite.dev" target="_blank">
          {/* src="/test.png" */}
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
