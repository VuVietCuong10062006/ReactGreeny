import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const getAuth = createAsyncThunk(
    "auth/getAuth",
    async () => {
      const res = await productApi.getAuth();
      return res;
    }
);

export const authLogin = createAsyncThunk(
    "auth/authLogin",
    async (data) => {
      const res = await productApi.authLogin(data);
      return res;
    }
);

export const authLogout = createAsyncThunk(
    "auth/authLogout",
    async (data) => {
      const res = await productApi.authLogout(data);
      return res;
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
      auth: {},
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAuth.fulfilled, (state, action) => {
        state.auth = action.payload;
      });
      builder.addCase(authLogin.fulfilled, (state, action) => {
        state.auth = action.payload
      });
      builder.addCase(authLogout.fulfilled, (state, action) => {
        state.auth = action.payload
      });
    //   builder.addCase(updateProduct.fulfilled, (state, action) => {
    //       let index = state.productCart.findIndex(p => p.id === action.payload.id);
    //           state.productCart[index] = action.payload
    //   });
    //   builder.addCase(deleteProduct.fulfilled, (state, action) => {
    //       let index = state.productCart.findIndex(p => p.id === action.payload);
    //       state.productCart.splice(index, 1);
    //   })
  
    },
  });

  export default authSlice.reducer
