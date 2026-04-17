import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminPrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.admin.auth);

  if (!user) return <Navigate to="/admin/login" replace />;
  if (user.role !== 'admin') return <Navigate to="/" replace />;

  return children;
};

export default AdminPrivateRoute;
