import "./App.css";
import { Tasks } from "./components/Tasks";
import { Counter } from "./components/Counter";
import { useSelector } from "react-redux";
import { BasicApp } from "./components/PropsDrillingExample";
import { BasicAppSolved } from "./components/PropsDrillingExampleSolved";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      {/* <Tasks /> */}
      {/* <Counter />
      <h4>I am count inside App.jsx: {count}</h4>
      <br /> */}
      {/* <BasicApp /> */}
      <BasicAppSolved />
    </>
  );
}

export default App;
