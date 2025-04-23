import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../SideBar/SideBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const AdminNavbar = () => {
  return (
    <div className="!relative">
      {/* Sidebar (custom) */}
      <Sidebar />

      {/* Top Navbar */}
      <AppBar position="static" className="!bg-gray-800 !shadow-md">
        <Toolbar className="!flex !justify-between !px-4">

          {/* Logo + Sidebar */}
          <Box className="!flex !items-center !gap-4">
            <Typography variant="h6" className="!font-bold !text-white">
              <Link to="/admin/dashboard" className="hover:!text-blue-400 no-underline">Admin Panel</Link>
            </Typography>
          </Box>

          {/* Navigation Buttons */}
          <Box className="!flex !gap-4">
            <Button component={Link} to="/admin/dashboard" className="!text-white hover:!text-blue-400 !capitalize">
              Dashboard
            </Button>
            <Button component={Link} to="/admin/products" className="!text-white hover:!text-blue-400 !capitalize">
              Products
            </Button>
            <Button component={Link} to="/admin/orders" className="!text-white hover:!text-blue-400 !capitalize">
              Orders
            </Button>
            <Button component={Link} to="/admin/users" className="!text-white hover:!text-blue-400 !capitalize">
              Users
            </Button>
            <Button component={Link} to="/admin/logout" className="!text-red-400 hover:!text-red-300 !font-semibold !capitalize">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AdminNavbar;
