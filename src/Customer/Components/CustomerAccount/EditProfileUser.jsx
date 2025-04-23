import React from "react";
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button, TextField
} from "@mui/material";
import OrangeButton from "../Common/Buttons/OrangeButton";

const EditProfileUser = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: '80%' } }}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent className="!flex !flex-col !gap-4 !p-3">
        <TextField label="Name" defaultValue={user.name} fullWidth />
        <TextField label="Email" defaultValue={user.email} fullWidth />
        <TextField label="Phone" defaultValue={user.phone} fullWidth />
        <TextField label="Location" defaultValue={user.location} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <OrangeButton variant="contained"  onClick={onClose}>Save</OrangeButton>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileUser;
