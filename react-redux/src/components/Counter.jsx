import { useDispatch, useSelector } from "react-redux";
import { increment } from "../state/counter/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
