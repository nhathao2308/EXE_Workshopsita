import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem("token") || null,
    user: null,
  },
  reducers: {
    setToken: (state, action) => {
      sessionStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
      };
    },
    setUser: (state, action) => {
      state.user = action.payload;
      return {
        ...state,
        user: action.payload,
      };
    },
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      sessionStorage.setItem("token", accessToken);
      return {
        ...state,
        user: user,
        token: accessToken,
      };
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("token");

      return {
        ...state,
        user: null,
        token: null,
      };
    },
  },
  selectors: {
    selectTokens: (auth) => auth.token,
    selectUsers: (auth) => auth.user,
    selectCredentials: (auth) => ({ user: auth.user, token: auth.token }),
  },
});

export const { setToken, setUser, setCredentials, logOut } = authSlice.actions;
export const { selectCredentials, selectTokens, selectUsers } =
  authSlice.selectors;
export default authSlice.reducer;
