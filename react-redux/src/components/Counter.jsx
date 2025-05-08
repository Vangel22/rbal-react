import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementWithAmountAsync,
} from "../state/counter/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(incrementWithAmountAsync(""))}>
        Increment by amount
      </button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
