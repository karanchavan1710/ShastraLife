import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * PrivateRoute protects routes that require authentication.
 * If user is authenticated, render the children.
 * Otherwise, redirect to login.
 */
const CustomerPrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.customer.auth); // Adjust based on your Redux state

  return user ? children : <Navigate to="/" replace />;
};

export default CustomerPrivateRoute;
