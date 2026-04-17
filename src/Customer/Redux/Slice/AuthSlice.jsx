// src/Redux/Slice/AuthSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
 const res = await axios.post("https://673f6889a9bc276ec4b87649.mockapi.io/carts", credentials);
    const userData = {
      ...credentials,
      token: res.data.token || "dummy-jwt-token",
    }; 

    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.error || "Login failed");
  }
});

// Async thunk for register
export const register = createAsyncThunk("auth/register", async (formData, thunkAPI) => {
  try {
    const res = await axios.post("https://673f6889a9bc276ec4b87649.mockapi.io/carts" ,formData);
    const userData = {
      ...formData,
      token: res.data.token || "dummy-jwt-token",
    };
    localStorage.setItem("user", JSON.stringify(userData));
    return userData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.error || "Registration failed");
  }
});

// Safe JSON parse
let storedUser = null;
try {
  storedUser = JSON.parse(localStorage.getItem("user"));
} catch (e) {
  localStorage.removeItem("user");
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
    token: storedUser?.token || "",
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = "";
      state.error = null;
      localStorage.removeItem("user");
    },
    resetAuthError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, resetAuthError } = authSlice.actions;
export default authSlice.reducer;
