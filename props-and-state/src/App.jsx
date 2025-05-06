import "./App.css";
import { FirstApp } from "./components/FirstApp";

function App() {
  function onSmash() {
    alert("Click me button smashed!");
  }

  return (
    <>
      <FirstApp
        title="My first app"
        subtitle="First course in React"
        name="Semos"
        // disabled={true}
        disabled
        onSmash={onSmash}
      />
    </>
  );
}

export default App;
