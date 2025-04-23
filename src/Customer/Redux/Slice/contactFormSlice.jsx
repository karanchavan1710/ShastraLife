// features/contactSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData) => {
    const response = await fetch("https://673f6889a9bc276ec4b87649.mockapi.io/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return await response.json();
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    },
    status: "idle",
    error: null,
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = "succeeded";
        toast.success("Form submitted successfully!");

        // ✅ Correct reset
        state.formData = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          reason: "",
          message: "",
        };
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        toast.error("Submission failed. Please try again.");
      });
  },
});

export const { updateFormData } = contactSlice.actions;
export default contactSlice.reducer;
