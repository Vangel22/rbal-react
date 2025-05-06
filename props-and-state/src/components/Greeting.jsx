export const Greeting = ({ name }) => {
  return <p>Hello, {name || "stranger"}</p>;
};
