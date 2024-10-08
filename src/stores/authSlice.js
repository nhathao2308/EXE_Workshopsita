import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    getLogin: (state) => {
      state.start = true;
    },
  },
});

export const {getLogin} = authSlice.actions;
export default authSlice.reducer;
