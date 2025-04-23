import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ to, label }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`!text-orange-500 font-semibold ${
        location.pathname === to ? 'border-b-2 border-amber-500 ' : ''
      }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
