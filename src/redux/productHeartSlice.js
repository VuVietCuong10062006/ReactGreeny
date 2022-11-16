import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import productApi from "../api/productApi";

export const getProductHeart = createAsyncThunk(
  "productHeart/getProductHeart",
  async () => {
    const res = await productApi.getProductHeart();
    return res;
  }
);

export const addProductHeart = createAsyncThunk(
  "productHeart/addProductHeart",
  async (data) => {
    const res = await productApi.addProductHeart(data);
    return res;
  }
);

export const updateProductHeart = createAsyncThunk(
  "productHeart/updateProductHeart",
  async (data) => {
    const res = await productApi.updateProductHeart(data);
    return res;
  }
);

export const deleteProductHeart = createAsyncThunk(
  "productHeart/deleteProductHeart",
  async (id) => {
    await productApi.deleteProductHeart(id);
    return id;
  }
);

const productHeartSlice = createSlice({
  name: "productHeart",
  initialState: {
    productHeart: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getProductHeart.fulfilled, (state, action) => {
      state.productHeart = action.payload;
    });
    builder.addCase(addProductHeart.fulfilled, (state, action) => {
      state.productHeart.push(action.payload);
    });
    builder.addCase(updateProductHeart.fulfilled, (state, action) => {
      let index = state.productHeart.findIndex(
        (p) => p.id === action.payload.id
      );
      state.productHeart[index] = action.payload;
    });
    builder.addCase(deleteProductHeart.fulfilled, (state, action) => {
      let index = state.productHeart.findIndex((p) => p.id === action.payload);
      state.productHeart.splice(index, 1);
    });
  },
});

export default productHeartSlice.reducer;
