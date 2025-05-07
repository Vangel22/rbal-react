import { useState } from "react";

function FetchComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  // Simulate slow network delay
  const simulateDelay = () =>
    new Promise((resolve) => setTimeout(resolve, 5000));

  // Fetch users with Fetch
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    const newController = new AbortController();
    setController(newController);
    try {
      await simulateDelay();
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          signal: newController.signal,
        }
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      if (err.name === "AbortError") {
        setError("Request cancelled: Aborted by user");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
      setController(null);
    }
  };

  // Handle loading users
  const handleLoadUsers = () => {
    if (loading && controller) {
      controller.abort();
      setController(null);
    }
    loadUsers();
  };

  // Handle manual cancellation
  const handleCancel = () => {
    if (controller) {
      controller.abort();
      setController(null);
    }
  };

  // Handle timeout-based cancellation
  const handleTimeoutCancel = () => {
    if (controller) {
      controller.abort();
      setController(null);
      setError("Request cancelled: Timed out after 3 seconds");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid green", margin: "10px" }}>
      <h2>Fetch Request Cancellation</h2>
      <button onClick={handleLoadUsers} disabled={loading}>
        {loading ? "Loading..." : "Load Users"}
      </button>
      <button onClick={handleCancel} disabled={!loading}>
        Cancel Request
      </button>
      <button onClick={handleTimeoutCancel} disabled={!loading}>
        Cancel After 3 Seconds
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading && <p>Loading users... (Simulated 5-second delay)</p>}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      {!loading && users.length === 0 && <p>No users found.</p>}
    </div>
  );
}

export default FetchComponent;
