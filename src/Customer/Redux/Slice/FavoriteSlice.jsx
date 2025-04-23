import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://673f6889a9bc276ec4b87649.mockapi.io/todo";

// ✅ Add to MockAPI
export const favoriteApi = createAsyncThunk(
  "favorite/favoriteApi",
  async (data, { rejectWithValue }) => {
    try {
      // Optional: prevent duplicate in MockAPI
      const existing = await axios.get(API_URL);
      const alreadyAdded = existing.data.find((item) => item.id === data.id);
      if (!alreadyAdded) {
        const response = await axios.post(API_URL, data);
        return response.data;
      }
      return data; // skip if already added
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Remove from MockAPI
export const removeFromApiFavorite = createAsyncThunk(
  "favorite/removeFromApiFavorite",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// ✅ Fetch all favorites from MockAPI
export const fetchFavoritesFromApi = createAsyncThunk(
  "favorite/fetchFavoritesFromApi",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteItems: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addToFavorite: (state, action) => {
      const exists = state.favoriteItems.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.favoriteItems.push(action.payload);
      }
    },
    removeFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Load from API
      .addCase(fetchFavoritesFromApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavoritesFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favoriteItems = action.payload;
      })
      .addCase(fetchFavoritesFromApi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Add to MockAPI
      .addCase(favoriteApi.fulfilled, (state, action) => {
        const exists = state.favoriteItems.find((item) => item.id === action.payload.id);
        if (!exists) {
          state.favoriteItems.push(action.payload);
        }
      })

      // Remove from MockAPI
      .addCase(removeFromApiFavorite.fulfilled, (state, action) => {
        state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
      });
  },
});

export const { addToFavorite, removeFromFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
