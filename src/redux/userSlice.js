import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const getUsers = createAsyncThunk("auth/getUsers", async () => {
  const res = await productApi.getUsers();
  return res;
});

export const addUsers = createAsyncThunk(
  "productCart/addProduct",
  async (data) => {
    const res = await productApi.addUsers(data);
    return res;
  }
);

export const updateUsers = createAsyncThunk(
  "productCart/updateProduct",
  async (data) => {
    const res = await productApi.updateUsers(data);
    return res;
  }
);

export const deleteUsers = createAsyncThunk(
  "productCart/deleteProduct",
  async (id) => {
    await productApi.deleteUsers(id);
    return id;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(updateUsers.fulfilled, (state, action) => {
      let index = state.users.findIndex(
        (p) => p.id === action.payload.id
      );
      state.users[index] = action.payload;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      let index = state.users.findIndex((p) => p.id === action.payload);
      state.users.splice(index, 1);
    });
  },
});

export default usersSlice.reducer;
