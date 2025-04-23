import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API URL
const API_URL = "https://673f6889a9bc276ec4b87649.mockapi.io/orders";

// Asynchronous thunk to fetch orders from API
export const fetchOrders = createAsyncThunk(
  "viewOrder/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data; // Returns the fetched data to the reducer
    } catch (err) {
      return rejectWithValue(err.message); // If error, returns error message to the reducer
    }
  }
);

const ViewOrderSlice = createSlice({
  name: "viewOrder",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when fetching starts
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload; // Set orders when fetched successfully
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error when fetching fails
      });
  },
});

export default ViewOrderSlice.reducer;
