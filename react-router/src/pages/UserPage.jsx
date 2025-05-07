import { useLoaderData } from "react-router";

// createBrowserRouter -> loader: userLoader -> Error -> ErrorPage
// createBrowserRouter -> loader: userLoader -> useLoaderData() -> UserPage

export const userLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users!");
  }
  return await res.json();
};

export const UserPage = () => {
  //   const [users, setUsers] = useState([]);

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount

  // useEffect callback cannot be async
  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");

  //       if (res.ok) {
  //         const data = await res.json();
  //         setUsers(data);
  //       }
  //     };

  //     fetchUsers();
  //   }, []);

  const users = useLoaderData();

  return (
    <>
      <h1>User list</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>{user.name}</li>)
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </>
  );
};
