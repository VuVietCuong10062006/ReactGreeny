import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getApiProvinces = createAsyncThunk(
  "api/getApiprovinces",
  async () => {
    try {
      let res = await axios.get("https://provinces.open-api.vn/api/?depth=3");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const apiSlice = createSlice({
  name: "api",
  initialState: {
    provinces: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getApiProvinces.fulfilled, (state, action) => {
      state.provinces = action.payload;
    });
  },
});

export default apiSlice.reducer;
