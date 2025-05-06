import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  // count = undefined
  // 1 + undefined = Nan

  function handleClick() {
    // State as a snapshot
    // setCount(count + 1);
    // setCount(count + 1);

    // State batching
    setCount((prev) => prev + 1); //1
    setCount((prev) => prev + 1); //2
    // console.log("after setCount calls (before re-render)", count);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}> +1 </button>
    </>
  );
};
