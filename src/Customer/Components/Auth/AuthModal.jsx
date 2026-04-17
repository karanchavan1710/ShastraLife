import React from 'react';
import { Dialog } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Loginform from './Loginform';
import Registerform from './Registerform';

const AuthModal = ({ open, handleClose }) => {
  const location = useLocation();

  // Check path to decide whether to show login or register 
  const isLogin = location.pathname === '/login';

  return (
    <Dialog open={open} onClose={handleClose}>
      {isLogin ? (
        <Loginform handleClose={handleClose} />
      ) : (
        <Registerform handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default AuthModal;
