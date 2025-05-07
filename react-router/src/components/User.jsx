import { useParams } from "react-router";

export const User = () => {
  const params = useParams();

  console.log("params", params.id);
  // Every param is always going to be a string
  return (
    <>
      <h1>User id: {params.id}</h1>
      <h2>Second param: {params.second}</h2>
    </>
  );
};
