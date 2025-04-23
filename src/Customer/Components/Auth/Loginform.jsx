import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material';
import {  MdVisibilityOff, MdVisibility } from 'react-icons/md';  
import toast from 'react-hot-toast';
const Loginform = () => {
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
      toast.success('user logged in successfull')
    } else {
      alert('Invalid credentials');
    }
  };

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex items-center !justify-center h-screen !bg-gray-100">
      <form onSubmit={handleSubmit} className="!p-6 !bg-white !rounded !shadow-md !w-96 !space-y-4">
        <h2 className="!text-2xl !font-bold !text-center !mb-4">Login</h2>

        {/* Email Input with Material-UI and TailwindCSS */}
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          value={form.email}
          onChange={handleChange}
          className="!w-full !border-gray-300"
          required
        />

        {/* Password Input with Material-UI and TailwindCSS */}
        <TextField
          name="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          value={form.password}
          onChange={handleChange}
          className="w-full !border-gray-300"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility/>}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="!w-full !py-2 !bg-green-600 hover:!bg-green-700"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Loginform;
