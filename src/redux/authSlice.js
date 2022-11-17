import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

// export const getAuth = createAsyncThunk(
//     "auth/getAuth",
//     async () => {
//       const res = await productApi.getAuth();
//       return res;
//     }
// );

// export const authLogin = createAsyncThunk(
//     "auth/authLogin",
//     async (data) => {
//       const res = await productApi.authLogin(data);
//       return res;
//     }
// );

// export const authLogout = createAsyncThunk(
//     "auth/authLogout",
//     async (data) => {
//       const res = await productApi.authLogout(data);
//       return res;
//     }
// );


const authSlice = createSlice({
    name: "auth",
    initialState: {
      // auth: {},
      auth: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {},
    },
    reducers: {
      authLogin(state, action) {
        state.auth = {...action.payload}
        localStorage.setItem("auth", JSON.stringify(state.auth));
      },
      authLogout(state, action) {
        state.auth = {}
        localStorage.setItem("auth", JSON.stringify(state.auth));
      },
    },
    extraReducers: (builder) => {
      // builder.addCase(getAuth.fulfilled, (state, action) => {
      //   state.auth = action.payload;
      // });
      // builder.addCase(authLogin.fulfilled, (state, action) => {
      //   state.auth = action.payload
      // });
      // builder.addCase(authLogout.fulfilled, (state, action) => {
      //   state.auth = action.payload
      // });
    },
  });

  export const { authLogin, authLogout } = authSlice.actions
  export default authSlice.reducer
