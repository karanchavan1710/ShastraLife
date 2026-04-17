import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerLayout from "./Layouts/CustomerLayout";
import AdminLayout from "./Layouts/AdminLayout";
import CustomerRoutes from "./Routes/CustomerRoutes/CustomerRoutes";
import AdminRoutes from "./Routes/AdminRoutes/AdminRoutes";

const AppContent = () => {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <CustomerLayout>
                <CustomerRoutes />
              </CustomerLayout>
            }
          />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppContent;
