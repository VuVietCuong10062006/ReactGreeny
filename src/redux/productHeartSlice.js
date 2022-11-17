import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import productApi from "../api/productApi";

// export const getProductHeart = createAsyncThunk(
//   "productHeart/getProductHeart",
//   async () => {
//     const res = await productApi.getProductHeart();
//     return res;
//   }
// );

// export const addProductHeart = createAsyncThunk(
//   "productHeart/addProductHeart",
//   async (data) => {
//     const res = await productApi.addProductHeart(data);
//     return res;
//   }
// );

// export const updateProductHeart = createAsyncThunk(
//   "productHeart/updateProductHeart",
//   async (data) => {
//     const res = await productApi.updateProductHeart(data);
//     return res;
//   }
// );

// export const deleteProductHeart = createAsyncThunk(
//   "productHeart/deleteProductHeart",
//   async (id) => {
//     await productApi.deleteProductHeart(id);
//     return id;
//   }
// );

const productHeartSlice = createSlice({
  name: "productHeart",
  initialState: {
    // productHeart: [],
    productHeart: localStorage.getItem("productHeart")
      ? JSON.parse(localStorage.getItem("productHeart"))
      : [],
  },
  reducers: {
    addProductHeart(state, action) {
      state.productHeart.push(action.payload);
      localStorage.setItem("productHeart", JSON.stringify(state.productHeart));
    },
    deleteProductHeart(state, action) {
      const newProductCart = state.productHeart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.productHeart = newProductCart;
      localStorage.setItem("productHeart", JSON.stringify(state.productHeart));
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getProductHeart.fulfilled, (state, action) => {
    //   state.productHeart = action.payload;
    // });
    // builder.addCase(addProductHeart.fulfilled, (state, action) => {
    //   state.productHeart.push(action.payload);
    // });
    // builder.addCase(updateProductHeart.fulfilled, (state, action) => {
    //   let index = state.productHeart.findIndex(
    //     (p) => p.id === action.payload.id
    //   );
    //   state.productHeart[index] = action.payload;
    // });
    // builder.addCase(deleteProductHeart.fulfilled, (state, action) => {
    //   let index = state.productHeart.findIndex((p) => p.id === action.payload);
    //   state.productHeart.splice(index, 1);
    // });
  },
});

export const { addProductHeart, deleteProductHeart } =
  productHeartSlice.actions;
export default productHeartSlice.reducer;
