import { Form, redirect } from "react-router";

export const addNewUser = async ({ request }) => {
  const formData = await request.formData();
  // formData.myName

  const newUser = { name: formData.get("name") };
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Error adding new user!");
  }

  const result = await res.json();
  console.log("result", result);

  return redirect("/");
};

export const AddUser = () => {
  return (
    <>
      <h1>Add User</h1>
      <Form method="post">
        <input
          name="name"
          type="text"
          placeholder="Name of the user"
          required
        />
        <br />
        <button type="submit">Add new user</button>
      </Form>
    </>
    // <form onSubmit={() => {}}>
    //     <input name="myName" type="text" placeholder="New data" />
    //     <button>Submit</button>
    // </form>
  );
};
