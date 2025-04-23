import React from 'react'
import { useLocation } from 'react-router-dom'
import Loginform from './Loginform';
import Registerform from './Registerform';

const Auth = () => {
    const location = useLocation();
  return (
    <>
    {
        location.pathname === '/login' ? <Loginform /> : <Registerform />
    }
    </>
  )
}

export default Auth