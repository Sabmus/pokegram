import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuthenticated: false,
};

export const loginSlice = createSlice({
  name: "login/logout",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = initialState.username;
      state.isAuthenticated = initialState.isAuthenticated;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
