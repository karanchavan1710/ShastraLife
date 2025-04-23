import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import toast, { Toaster } from "react-hot-toast";

import Store from "./Customer/Redux/Stores/Store";
import Header from "./Customer/Components/Common/Header/Header";
import Footer from "./Customer/Components/Common/Footer/Footer";

import HomePage from "./Customer/Pages/HomePage/HomePage";
import ProductList from "./Customer/Pages/ProductList/ProductList";
import ProductDetails from "./Customer/Pages/ProductDetail/ProductDetails";
import ContactUs from "./Customer/Pages/ContactUs/ContactUs";
import PageNotFound from "./Customer/Pages/PageNotFound/Page404";
import About from "./Customer/Pages/About/About";
import Temples from "./Customer/Pages/TemplesPage/Temples";
import Cart from "./Customer/Pages/Cart/Cart";
import Favourite from "./Customer/Pages/Favourite/Favourite";
import WearablesPage from "./Customer/Pages/Wearables/Wearables";
import TeamPage from "./Customer/Pages/Team/Team";
import CheckOutPage from "./Customer/Pages/CheckoutPage/CheckoutPage";
import FAQ from "./Customer/Pages/FAQ/FAQ";

import AdminLogin from "./Admin/Pages/Login/AdminLogin";
import AdminDashboard from "./Admin/Components/AdminDashboard/AdminDashboard";
import CustAccount from "./Customer/Pages/Account/CustAccount";

import OrderProducts from "./Customer/Pages/Orders/OrderProducts";
import Registerform from "./Customer/Components/Auth/Registerform";
import MyOrders from "./Customer/Components/Order/CustomerOrder";
import OrderDetails from "./Customer/Components/Order/OrderDetails";

import FloatingCartButton from './Customer/Components/FloatingCartButton/FloatingCartButton';
import OrangeButton from "./Customer/Components/Common/Buttons/OrangeButton";
import OrderSuccess from "./Customer/Pages/Orders/OrderSuccess";
import { fetchCartFromApi } from "./Customer/Redux/Slice/CartSlice";


// ✅ Separate login route component
const Auth0LoginRedirect = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <OrangeButton disabled>Redirecting to login...</OrangeButton>
    </div>
  );
};

// ✅ PrivateRoute logic with Auth0
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppContent = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      toast.success(`Welcome back, ${user.name || user.nickname || "User"}!`);
    }
  }, [isAuthenticated, user]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartFromApi());
  }, [dispatch]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Header />
        <FloatingCartButton />

        <Routes>
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/wearables" element={<WearablesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          <Route path="/account/orders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
          <Route path="/account/order/:id" element={<PrivateRoute><OrderDetails /></PrivateRoute>} />
          <Route path="/account/orders/:id/products" element={<PrivateRoute><OrderProducts /></PrivateRoute>} />
          <Route path="/account/profile" element={<PrivateRoute><CustAccount /></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><CheckOutPage /></PrivateRoute>} />

          {/* Auth0 Login and Signup Routes */}
          <Route path="/login" element={<Auth0LoginRedirect />} />
          <Route path="/signup" element={<Registerform />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

const App = () => (
  <Provider store={Store}>
    <AppContent />
  </Provider>
);

export default App;
