import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

const ProfileDropdown = () => {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate
  const [anchorEl, setAnchorEl] = useState(null);

  // Simulate auth state (Replace with real logic later)
  const user = JSON.parse(localStorage.getItem('user')); 

  const handleLogout = () => {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Redirect to login page
    navigate('/login');
  };

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Tooltip title={user ? "My Profile" : "Login / Signup"}> 
        <IconButton>
          <BiUserCircle className="!text-orange-500 text-2xl" title='sign-up'/>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {user ? (
          <>
            <MenuItem onClick={handleMouseLeave}>Profile</MenuItem>
            <MenuItem onClick={handleMouseLeave}>My Account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        ) : (
          <>
            <Link to='/login'>
              <MenuItem onClick={handleMouseLeave}>Login</MenuItem>
            </Link>
            <Link to='/signup'>
              <MenuItem onClick={handleMouseLeave}>Signup</MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
