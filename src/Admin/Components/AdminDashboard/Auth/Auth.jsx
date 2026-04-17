import React, { useState } from 'react';
import AdminRegister from './AdminRegister';
import AdminLogin from './AdminLogin';
import { Dialog } from '@mui/material';

const Auth = ({ open, onClosed }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(true); // default to login

  return (
    <Dialog open={open} onClose={onClosed}>
      {isAdminLogin ? <AdminLogin /> : <AdminRegister />}
    </Dialog>
  );
};

export default Auth;
