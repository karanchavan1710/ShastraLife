import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const AdminRegister = () => {
  return (
    <Box className="!flex !justify-center !items-center !h-screen !bg-gray-100">
      <Paper elevation={3} className="!p-8 !w-[400px] !rounded-xl">
        <Typography variant="h5" className="!mb-6 !font-bold !text-center !text-gray-700">
          Admin Register
        </Typography>

        <form className="!flex !flex-col !gap-5">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            className="!bg-white"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            className="!bg-white"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="!bg-white"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="!py-3 !mt-4 !rounded-lg !bg-green-600 hover:!bg-green-700"
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminRegister;
