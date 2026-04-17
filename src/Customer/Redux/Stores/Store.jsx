import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Customer reducers
import productsReducer from '../Slice/ProductSlice';
import cartReducer from '../Slice/CartSlice';
import categoryReducer from '../Slice/CategorySlice';
import favoriteReducer from '../Slice/FavoriteSlice';
import authReducer from '../Slice/AuthSlice';
import contactReducer from '../Slice/contactFormSlice';
import orderReducer from '../Slice/OrderSlice';
import addressReducer from '../Slice/AddressSlice';
import viewOrderReducer from '../Slice/ViewOrderSlice';

// Admin reducers
import adminProductsReducer from '../../../Admin/Redux/Slices/ProductAdminSlice';
import userReducer from '../../../Admin/Redux/Slices/userSlice'


const rootReducer = combineReducers({
  customer: combineReducers({
    products: productsReducer,
    cart: cartReducer,
    category: categoryReducer,
    favorite: favoriteReducer,
    auth: authReducer,
    contact: contactReducer,
    order: orderReducer,
    addresses: addressReducer,
    viewOrder: viewOrderReducer,
  }),
  admin: combineReducers({
    productsData: adminProductsReducer,
    userReducer : userReducer
  }),
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
