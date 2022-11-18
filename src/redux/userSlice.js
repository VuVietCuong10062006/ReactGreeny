import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const res = await productApi.getUsers();
  return res;
});

export const getUsersbyId = createAsyncThunk("users/getUsersbyId", async (id) => {
  const res = await productApi.getUserById(id);
  return res;
});

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (data) => {
    const res = await productApi.addUsers(data);
    return res;
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async (data) => {
    const res = await productApi.updateUsers(data);
    return res;
  }
);

export const updateProfileUsers = createAsyncThunk(
  "users/updateProfileUsers",
  async (data) => {
    const res = await productApi.updateProfileUsers(data);
    return res;
  }
);

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id) => {
    await productApi.deleteUsers(id);
    return id;
  }
);
const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    usersId:{},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getUsersbyId.fulfilled, (state, action) => {
      state.usersId = action.payload;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(updateUsers.fulfilled, (state, action) => {
      // const newUser = action.payload;
      // state.users = state.users.map(user => {
      //   if (user.id === newUser.id) {
      //     user = newUser
      //   }
      //   return user
      // })
      let index = state.users.findIndex(
        (p) => p.id === action.payload.id
      );
      state.users[index] = action.payload;
    });
    builder.addCase(updateProfileUsers.fulfilled, (state, action) => {
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
