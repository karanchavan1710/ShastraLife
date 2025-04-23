// Redux/Slice/CartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://673f6889a9bc276ec4b87649.mockapi.io/carts";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Fetch Cart
export const fetchCartFromApi = createAsyncThunk("cart/fetchCart", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add or Update Cart Item
export const addToApiCart = createAsyncThunk("cart/addToApiCart", async (item, { getState }) => {
  const { cart } = getState();
  const existing = cart.items.find((i) => i.productId === item.id);

  if (existing) {
    const updatedItem = {
      ...existing,
      quantity: existing.quantity + 1,
    };
    await axios.put(`${API_URL}/${existing.id}`, updatedItem);
    return updatedItem;
  } else {
    const response = await axios.post(API_URL, {
      ...item,
   productId: item.id, // store productId
      quantity: 1,
    });
    return response.data;
  }
});

// Remove from Cart
export const removeFromCartApi = createAsyncThunk("cart/removeFromCart", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Update Quantity
export const updateCartItemApi = createAsyncThunk("cart/updateCartItem", async (updatedItem) => {
  const response = await axios.put(`${API_URL}/${updatedItem.id}`, updatedItem);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartFromApi.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToApiCart.fulfilled, (state, action) => {
        const index = state.items.findIndex(i => i.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        } else {
          state.items.push(action.payload);
        }
      })
      .addCase(removeFromCartApi.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(updateCartItemApi.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
