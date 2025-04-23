import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";

const AddressForm = ({ newAddress, handleChange, handleClose, handleSubmit }) => {
  return (
    <Box className="!absolute !top-1/2 !left-1/2 !transform -translate-x-1/2 -translate-y-1/2 !bg-white !p-6 !rounded-2xl !shadow-lg !w-[90%] !max-w-lg !space-y-4">
      <Typography variant="h6" className="!mb-2">Add New Address</Typography>
      <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4">
        <TextField label="Full Name" name="name" value={newAddress.name} onChange={handleChange} fullWidth />
        <TextField label="Phone Number" name="phone" value={newAddress.phone} onChange={handleChange} fullWidth />
        <TextField label="Street Address" name="street" value={newAddress.street} onChange={handleChange} fullWidth />
        <TextField label="City" name="city" value={newAddress.city} onChange={handleChange} fullWidth />
        <TextField label="State" name="state" value={newAddress.state} onChange={handleChange} fullWidth />
        <TextField label="Zip Code" name="zip" value={newAddress.zip} onChange={handleChange} fullWidth />
      </div>
      <div className="!flex !justify-end !gap-4 !pt-4">
        <Button onClick={handleClose} color="secondary" variant="outlined">Cancel</Button>
        <OrangeButton onClick={handleSubmit} variant="contained">Save Address</OrangeButton>
      </div>
    </Box>
  );
};

export default AddressForm;
