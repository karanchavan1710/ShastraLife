// ProductAdminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products?limit=100";


export const fetchProducts = createAsyncThunk("admin/fetchProducts", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addProduct = createAsyncThunk("admin/addProduct", async (product) => {
  const res = await axios.post(API_URL, product);
  return res.data;
});

export const updateProduct = createAsyncThunk("admin/updateProduct", async ({ id, product }) => {
  const res = await axios.put(`${API_URL}/${id}`, product);
  return res.data;
});

export const deleteProduct = createAsyncThunk("admin/deleteProduct", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const adminProductSlice = createSlice({
  name: "admin",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter(p => p.id !== action.payload);
      });
  },
});

export default adminProductSlice.reducer;