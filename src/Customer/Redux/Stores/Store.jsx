// store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../Slice/ProductSlice';
import cartReducer from '../Slice/CartSlice';
import categoryReducer from '../Slice/CategorySlice';
import favoriteSliceReducer from '../Slice/FavoriteSlice';
import authReducer from '../Slice/AuthSlice';
import contactReducer from '../Slice/contactFormSlice';
import orderReducer from '../Slice/OrderSlice';
import addressReducer from '../Slice/AddressSlice';
import ViewOrderReducer from '../Slice/ViewOrderSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    category: categoryReducer,
    favorite: favoriteSliceReducer,
    contact: contactReducer,
    order: orderReducer, 
    addresses: addressReducer,
    auth: authReducer,
    viewOrder: ViewOrderReducer,
  },
});

export default store;
