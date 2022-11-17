import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import productApi from "../api/productApi";

// export const getProduct = createAsyncThunk(
//   "productCart/getProduct",
//   async () => {
//     const res = await productApi.getProductCart();
//     return res;
//   }
// );

// export const addProduct = createAsyncThunk(
//   "productCart/addProduct",
//   async (data) => {
//     const res = await productApi.addProductCart(data);
//     return res;
//   }
// );

// export const updateProduct = createAsyncThunk(
//   "productCart/updateProduct",
//   async (data) => {
//     const res = await productApi.updateProductCart(data);
//     return res;
//   }
// );

// export const deleteProduct = createAsyncThunk(
//   "productCart/deleteProduct",
//   async (id) => {
//     await productApi.deleteProductCart(id);
//     return id;
//   }
// );

const productCartSlice = createSlice({
  name: "productCart",
  initialState: {
    // productCart: [],
    productCart: localStorage.getItem("productCart")
      ? JSON.parse(localStorage.getItem("productCart"))
      : [],
  },
  reducers: {
    addProductCart(state, action) {
      state.productCart.push(action.payload);
      localStorage.setItem("productCart", JSON.stringify(state.productCart));
    },
    deleteProductCart(state, action) {
      const newProductCart = state.productCart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.productCart = newProductCart;
      localStorage.setItem("productCart", JSON.stringify(state.productCart));
    },
    subtractCountProductCart(state, action) {
      const newProductCart = state.productCart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      });
      state.productCart = newProductCart;
      localStorage.setItem("productCart", JSON.stringify(state.productCart));
    },
    addCountProductCart(state, action) {
      const newProductCart = state.productCart.map((product) => {
        if (product.id === action.payload) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      state.productCart = newProductCart;
      localStorage.setItem("productCart", JSON.stringify(state.productCart));
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getProduct.fulfilled, (state, action) => {
  //     state.productCart = action.payload;
  //   });
  //   builder.addCase(addProduct.fulfilled, (state, action) => {
  //     state.productCart.push(action.payload);
  //   });
  //   builder.addCase(updateProduct.fulfilled, (state, action) => {
  //     let index = state.productCart.findIndex(
  //       (p) => p.id === action.payload.id
  //     );
  //     state.productCart[index] = action.payload;
  //   });
  //   builder.addCase(deleteProduct.fulfilled, (state, action) => {
  //     let index = state.productCart.findIndex((p) => p.id === action.payload);
  //     state.productCart.splice(index, 1);
  //   });
  // },
});

export const {
  addProductCart,
  deleteProductCart,
  subtractCountProductCart,
  addCountProductCart,
} = productCartSlice.actions;

export default productCartSlice.reducer;
