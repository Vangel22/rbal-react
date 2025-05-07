import { Form, redirect, useLoaderData } from "react-router";

// req.params.id to find the user in DB
// req.body to change the needed fields in DB

export const userLoaderById = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users!");
  }
  return await res.json();
};

export const updateUserAction = async ({ request, params }) => {
  const formData = await request.formData();
  // formData.myName

  const newUser = { name: formData.get("name") };

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
      method: "PUT",
    }
  );

  if (!res.ok) {
    throw new Error("Error adding new user!");
  }

  const result = await res.json();
  console.log("result", result);

  return redirect("/");
};

export const MutateUser = () => {
  const user = useLoaderData();

  return (
    <>
      <h1>Update {user.name}</h1>
      <Form method="put">
        <input
          name="name"
          type="text"
          placeholder="Name of the user"
          required
        />
        <br />
        <button type="submit">Update user</button>
      </Form>
    </>
  );
};
