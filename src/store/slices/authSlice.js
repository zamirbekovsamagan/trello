import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "user@gmail.com",
  password: "user123",
  formIsValid: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkForm(state, action) {
      state.formIsValid =
        state.email === action.payload.email &&
        state.password === action.payload.password;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
