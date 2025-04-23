import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    delete: (state, action) => {
      return state.filter(addr => addr.id !== action.payload);
    },
  },
});

export const { add, delete: deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
