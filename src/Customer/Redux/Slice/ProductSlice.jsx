import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
});

const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    searchTerm : ''
  },
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


export const {setSearchTerm} = ProductSlice.actions;
 

export const selectFilteredProducts = (state)=>{
  const search = state.products.searchTerm.toLowerCase();
  return state.products.items.filter((item)=>
    item.title.toLowerCase().includes(search) ||
  item.description.toLowerCase().includes(search)
  )
}


export default ProductSlice.reducer;
