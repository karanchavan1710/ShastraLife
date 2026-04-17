import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerPrivateRoute from '../../Routes/PrivateRoutes/CustomerPrivateRoute';
import { CircularProgress } from '@mui/material';

// Import your customer pages
import HomePage from '../../Customer/Pages/HomePage/HomePage';

import LoginForm from '../../Customer/Components/Auth/Loginform';
import RegisterForm from '../../Customer/Components/Auth/Registerform';
import About from '../../Customer/Pages/About/About';
import FAQ from '../../Customer/Pages/FAQ/FAQ';
import Temples from '../../Customer/Pages/TemplesPage/Temples';
import ContactUs from '../../Customer/Pages/ContactUs/ContactUs';
import TeamPage from '../../Customer/Pages/Team/Team';
import Cart from '../../Customer/Pages/Cart/Cart';
import Favourite from '../../Customer/Pages/Favourite/Favourite';
import CheckOutPage from '../../Customer/Pages/CheckoutPage/CheckoutPage';
import OrderSuccess from '../../Customer/Pages/Orders/OrderSuccess';
import MyOrders from '../../Customer/Components/Order/CustomerOrder';
import OrderDetails from '../../Customer/Components/Order/OrderDetails';
import OrderProducts from '../../Customer/Pages/Orders/OrderProducts';
import CustAccount from '../../Customer/Pages/Account/CustAccount';
import PageNotFound from '../../Customer/Pages/PageNotFound/Page404';

// Lazy load
const ProductList = React.lazy(() => import('../../Customer/Pages/ProductList/ProductList'));
const WearablesPage = React.lazy(() => import('../../Customer/Pages/Wearables/Wearables'));
const ProductDetails = React.lazy(() => import('../../Customer/Pages/ProductDetail/ProductDetails'));

const CustomerRoutes = () => {
  return (
    <Suspense fallback={<div className="!text-center !py-10"><CircularProgress size={90} /></div>}>
      <Routes>
        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/temples" element={<Temples />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/wearables" element={<WearablesPage />} />
         <Route path="/contact" element={<ContactUs />} />

        {/* Private */}
       
        <Route path="/team" element={<CustomerPrivateRoute><TeamPage /></CustomerPrivateRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/checkout" element={<CustomerPrivateRoute><CheckOutPage /></CustomerPrivateRoute>} />
        <Route path="/favourite" element={<CustomerPrivateRoute><Favourite /></CustomerPrivateRoute>} />
        <Route path="/account/orders" element={<CustomerPrivateRoute><MyOrders /></CustomerPrivateRoute>} />
        <Route path="/account/order/:id" element={<CustomerPrivateRoute><OrderDetails /></CustomerPrivateRoute>} />
        <Route path="/account/orders/:id/products" element={<CustomerPrivateRoute><OrderProducts /></CustomerPrivateRoute>} />
        <Route path="/account/profile" element={<CustomerPrivateRoute><CustAccount /></CustomerPrivateRoute>} />

        {/* Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default CustomerRoutes;
