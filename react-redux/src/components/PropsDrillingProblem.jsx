export const Parent = () => {
  const data = "Some data";

  return <Child data={data} />;
};

const Child = ({ data }) => {
  return <GrandChild data={data} />;
};

const GrandChild = ({ data }) => {
  return <h1>{data}</h1>;
};
