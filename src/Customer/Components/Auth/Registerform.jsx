import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

const Registerform = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(form));
    navigate('/login');
  };

  return (
    <div className="flex !items-center !justify-center !h-screen !bg-gray-100">
      <form onSubmit={handleSubmit} className="!p-6 bg-white !rounded !shadow-md !w-96 !space-y-4">
        <h2 className="!text-2xl !font-bold !text-center !mb-4">Register</h2>

        {/* Username Input */}
        <TextField
          name="username"
          type="text"
          label="Username"
          variant="outlined"
          value={form.username}
          onChange={handleChange}
          className="w-full"
          required
        />

        {/* Email Input */}
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          value={form.email}
          onChange={handleChange}
          className="w-full"
          required
        />

        {/* Password Input */}
        <TextField
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          value={form.password}
          onChange={handleChange}
          className="w-full"
          required
        />

        {/* Register Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full !py-2 !bg-blue-600 hover:!bg-blue-700"
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registerform;
