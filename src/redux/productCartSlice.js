import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import productApi from "../api/productApi";

export const getProduct = createAsyncThunk(
  "productCart/getProduct",
  async () => {
    const res = await productApi.getProductCart();
    return res;
  }
);

export const addProduct = createAsyncThunk(
  "productCart/addProduct",
  async (data) => {
    const res = await productApi.addProductCart(data);
    return res;
  }
);

export const updateProduct = createAsyncThunk(
  "productCart/updateProduct",
  async (data) => {
    const res = await productApi.updateProductCart(data);
    return res;
  }
);

export const deleteProduct = createAsyncThunk(
    "productCart/deleteProduct",
    async (id) => {
       await productApi.deleteProductCart(id);
      return id;
    }
  );

const productCartSlice = createSlice({
  name: "productCart",
  initialState: {
    productCart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productCart = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.productCart.push(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
        let index = state.productCart.findIndex(p => p.id === action.payload.id);
            state.productCart[index] = action.payload
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
        let index = state.productCart.findIndex(p => p.id === action.payload);
        state.productCart.splice(index, 1);
    })

  },
});

export default productCartSlice.reducer;
