import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const NavIcon = ({ IconComponent, title, onClick , to}) => (
 <Link to={to}>
 <IconButton className='!bg-gray-100'>
 <IconComponent
 className="!cursor-pointer !text-xl !text-orange-600 hover:!text-orange-500"
 title={title}
 onClick={onClick}
/>
 </IconButton>
 </Link>
);

export default NavIcon;
