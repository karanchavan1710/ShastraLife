import React from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const AdminLogin = () => {
  return (
    <Box className="!flex !justify-center !items-center !min-h-[400px]">
      <Paper elevation={3} className="!p-8 !w-[400px] !rounded-xl !shadow-none">
        <Typography variant="h5" className="!mb-6 !font-bold !text-center !text-gray-700">
          Admin Login
        </Typography>

        <form className="!flex !flex-col !gap-5">
          <TextField label="Email" type="email" fullWidth className="!bg-white" />
          <TextField label="Password" type="password" fullWidth className="!bg-white" />
          <Button variant="contained" fullWidth className="!py-3 !mt-4 !rounded-lg !bg-blue-600 hover:!bg-blue-700">
            Login
          </Button>
          <Box className="!mt-4 !text-sm !text-gray-600">
            <p>Dummy Email & Password</p>
            <div className="!flex !flex-col">
              <span>karanchavan2194@gmail.com</span>
              <span>Karan123</span>
            </div>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default AdminLogin;
