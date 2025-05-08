import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import appReducer from "./basicApp/basicAppSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
  },
});
