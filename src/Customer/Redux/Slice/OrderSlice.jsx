import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://673f6889a9bc276ec4b87649.mockapi.io/carts';

export const placeOrderApi = createAsyncThunk(
  "order/placeOrderApi",
  async (orderData, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, {
        ...orderData,
        createdAt: new Date().toISOString(),
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrderApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(placeOrderApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(placeOrderApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
