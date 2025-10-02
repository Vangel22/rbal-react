import { useNavigate } from "react-router";
import "./App.css";

function App() {
  let navigate = useNavigate();

  const handleRouting = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>User re-routing</h1>
      <button onClick={handleRouting}>Re-route</button>
    </div>
  );
}

export default App;
