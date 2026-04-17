import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import toast from 'react-hot-toast';
import OrangeButton from '../Common/Buttons/OrangeButton';

const Loginform = ({ handleClose }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === form.email && user.password === form.password) {
      dispatch(login(user));
      navigate('/');
      toast.success('User logged in successfully');
      handleClose();
    } else {
      toast.error('Invalid credentials');
    } 
  };

  return (
    <div className="!flex !items-center !justify-center !bg-gray-100">
      <form onSubmit={handleSubmit} className="!p-6 !space-y-4">
        <h2 className="!text-2xl !font-bold !text-center !mb-4">Login</h2>
        <TextField name="email" type="email" label="Email" variant="outlined" fullWidth value={form.email} onChange={handleChange} required />
        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          fullWidth
          value={form.password}
          onChange={handleChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <OrangeButton type="submit" variant="contained" color="primary" className="!w-full !py-2 !bg-green-600 hover:!bg-green-700">
          Login
        </OrangeButton>
        <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
        <p className="mr-1">Don't have an account?</p>
        <Button 
          variant="text" 
          size="small" 
          onClick={() => navigate('/register')} 
          className="!capitalize !underline"
          style={{ textTransform: 'none' }}
        >
          Register
        </Button>
      </div>
      
      </form>
    </div>
  );
};

export default Loginform;
