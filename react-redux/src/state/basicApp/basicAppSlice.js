import { createSlice } from "@reduxjs/toolkit";

// state.app.value

const initialState = {
  theme: "light",
  user: { name: "Eva", email: "eva@example.com" },
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { toggleTheme, setUser } = appSlice.actions;

export default appSlice.reducer;
