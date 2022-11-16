import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productApi from "../api/productApi";

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const res = await productApi.getProducts();
  return res;
});

export const getProductbyId = createAsyncThunk("products/getProductbyId", async (id) => {
  const res = await productApi.getProductById(id);
  return res;
});

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (data) => {
    const res = await productApi.addProduct(data);
    return res;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data) => {
    const res = await productApi.updateProduct(data);
    return res;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
     await productApi.deleteProduct(id);
    return id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productId:{}
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(getProductbyId.fulfilled, (state, action) => {
      state.productId = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      let index = state.products.findIndex(
        (p) => p.id === action.payload.id
      );
      state.products[index] = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      let index = state.products.findIndex(p => p.id === action.payload);
      state.products.splice(index, 1);
  })
  },
});

export default productsSlice.reducer;
