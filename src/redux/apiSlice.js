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

export const getApiQuan = createAsyncThunk("api/getApiQuan", async () => {
  try {
    let res = await axios.get("https://provinces.open-api.vn/api/d");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getApiHuyen = createAsyncThunk("api/getApiHuyen", async () => {
  try {
    let res = await axios.get("https://provinces.open-api.vn/api/w/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    provinces: [],
    quan: [],
    huyen: [],
  },
  reducers: {
    getQuanByProvince(state, action) {
      const newQuan = state.quan.filter(
        (q) => q.province_code == action.payload
      );
      console.log(action.payload);
      state.quan = newQuan;
    },
    getHuyenByQuan(state, action) {
      console.log(action.payload);
      const newHuyen = state.huyen.filter(
        (q) => q.district_code == action.payload
      );
      state.huyen = newHuyen;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getApiProvinces.fulfilled, (state, action) => {
      state.provinces = action.payload;
    });
    builder.addCase(getApiQuan.fulfilled, (state, action) => {
      state.quan = action.payload;
    });
    builder.addCase(getApiHuyen.fulfilled, (state, action) => {
      state.huyen = action.payload;
    });
  },
});

export const { getQuanByProvince, getHuyenByQuan } = apiSlice.actions;

export default apiSlice.reducer;
