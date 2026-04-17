import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import OrangeButton from "../Common/Buttons/OrangeButton";

const Registerform = ({ handleClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(form)).unwrap();
      localStorage.setItem("user", JSON.stringify(form)); 
      toast.success("Registered successfully!");
      navigate("/");
      handleClose();
    } catch (error) {
      toast.error(error.message || "Registration failed");
    }
  };

  return (
    <div className="!flex !items-center !justify-center !bg-gray-100">
      <form onSubmit={handleSubmit} className="!p-6 !space-y-4">
        <h2 className="!text-2xl !font-bold !text-center !mb-4">Register</h2>
        <div className="grid grid-cols-2 gap-3">
          <TextField
            name="firstName"
            label="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            fullWidth
          />
        </div>
        <TextField
          name="email"
          type="email"
          label="Email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          name="password"
          type="password"
          label="Password"
          value={form.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <OrangeButton
          type="submit"
          variant="contained"
          color="primary"
          className="!w-full !py-2 !bg-blue-600 hover:!bg-blue-700"
        >
          Register
        </OrangeButton>

        <div className="flex items-center justify-center mt-4 text-sm text-gray-600">
          <p className="mr-1">If you have an account?</p>
          <Button
            variant="text"
            size="small"
            onClick={() => navigate("/login")}
            className="!capitalize !underline"
            style={{ textTransform: "none" }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Registerform;
