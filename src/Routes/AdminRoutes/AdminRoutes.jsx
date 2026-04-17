import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../../Admin/Components/AdminDashboard/AdminDashboard";
import Auth from "../../Admin/Components/AdminDashboard/Auth/Auth";
import ProductManagement from '../../Admin/Pages/ProductManagement/ProductManagement'
import ProductsList from "../../Admin/Pages/InventoryManagement/ProductsList";
import CustomerList from "../../Admin/Pages/customerManagement/CustomerList";
import OrderList from "../../Admin/Pages/customerManagement/OrderList";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="store/list" element={<ProductManagement />} /> 
      <Route path="customer/customer-list" element={<CustomerList />} />
      <Route path="customer/order-list" element={<OrderList />} />
      <Route path="inventory/products" element={<ProductsList />} />
      <Route path="login" element={<Auth />} />
    </Routes>
  );
};

export default AdminRoutes;
