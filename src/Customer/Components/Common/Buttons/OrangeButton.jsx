import React from 'react';
import Button from '@mui/material/Button';

const OrangeButton = ({ children, onClick, className = '', fullWidth = false, disabled = false , ...rest }) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={`!bg-orange-500 
        hover:!bg-orange-600 
        !text-white 
        !font-semibold 
        !px-6
        !transition !duration-300 !ease-in-out
        ${disabled ? '!bg-gray-400 !cursor-not-allowed' : ''}
        ${fullWidth ? '!w-full' : ''}
        ${className}
      `}
      {...rest}
    >
      {children}
    </Button>
  );
};


export default OrangeButton;
