import { useState } from "react";
import { api, createCancelToken } from "../api/config";
import axios from "axios";

function AxiosComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancelTokenSource, setCancelTokenSource] = useState(null);

  // Simulate slow network delay
  const simulateDelay = () =>
    new Promise((resolve) => setTimeout(resolve, 5000));

  // Fetch users with Axios
  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    const newSource = createCancelToken();
    setCancelTokenSource(newSource);
    try {
      await simulateDelay();
      const response = await api.get("users", { cancelToken: newSource.token });
      setUsers(response.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        setError(`Request cancelled: ${err.message}`);
      } else {
        setError(err.response?.data?.message || err.message);
      }
    } finally {
      setLoading(false);
      setCancelTokenSource(null);
    }
  };

  // Handle loading users
  const handleLoadUsers = () => {
    if (loading && cancelTokenSource) {
      cancelTokenSource.cancel("Cancelled to start new request");
      setCancelTokenSource(null);
    }
    loadUsers();
  };

  // Handle manual cancellation
  const handleCancel = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Cancelled by user");
      setCancelTokenSource(null);
    }
  };

  // Handle timeout-based cancellation
  const handleTimeoutCancel = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("Timed out after 3 seconds");
      setCancelTokenSource(null);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid blue", margin: "10px" }}>
      <h2>Axios Request Cancellation</h2>
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

export default AxiosComponent;
