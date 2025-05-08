import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "idle", // "idle" "loading" "failed"
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementWithAmountAsync.pending, (state) => {
        console.log("Printing while pending", state);
        state.status = "loading";
        state.error = null;
      })
      .addCase(incrementWithAmountAsync.fulfilled, (state, action) => {
        console.log(state, action.payload);

        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(incrementWithAmountAsync.rejected, (state, action) => {
        console.log("Error: ", action.error.message);
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// TODO: Decrement by amount

// export const incrementWithAmountAsync = createAsyncThunk(
//   "counter/incrementAsync",
//   async (amount, { rejectWithValue }) => {
//     try {
//       console.log("Here", amount);
//       await new Promise((res) => setTimeout(res, 3000));
//       // we are simulating that we are awaiting data from some source for 3 seconds
//       if (typeof amount !== "number" || isNaN(amount)) {
//         throw new Error("Invalid amount: must be a number");
//       }
//       return amount;
//     } catch (err) {
//       rejectWithValue(err.message);
//     }
//   }
// );

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
