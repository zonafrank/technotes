import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("accessToken") || null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      state.token = accessToken;
    },
    logOut: (state, action) => {
      localStorage.removeItem("accessToken");
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
