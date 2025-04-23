import React from "react";
import { Avatar } from "@mui/material";
import OrangeButton from "../Common/Buttons/OrangeButton";
import { useAuth0 } from "@auth0/auth0-react";

const UserDetailsCard = ({ onEdit }) => {
  const { user } = useAuth0();

  return (
    <div className="!flex !flex-col sm:!flex-row sm:!items-center sm:!gap-6">
      <Avatar
        src={user?.picture}
        alt={user?.name}
         loading="lazy"
        sx={{ width: 100, height: 100 }}
        className="!mb-4 sm:!mb-0"
      />
      <div className="!flex-1">
        <h2 className="!text-2xl !font-bold !text-gray-900">{user?.name}</h2>
        <p className="!text-gray-600 !mt-1">{user?.bio || "No bio available."}</p>
        <div className="!mt-4">
          <p className="!text-sm !text-gray-700">
            <span className="!font-medium">📧 Email:</span> {user?.email}
          </p>
          <p className="!text-sm !text-gray-700">
            <span className="!font-medium">📞 Phone:</span> {user?.phone || "Not provided"}
          </p>
          <p className="!text-sm !text-gray-700">
            <span className="!font-medium">📍 Location:</span> {user?.location || "Not specified"}
          </p>
        </div>
        <OrangeButton
          variant="contained"
          className="!mt-4 !text-white"
          onClick={onEdit}
        >
          Edit Profile
        </OrangeButton>
      </div>
    </div>
  );
};

export default UserDetailsCard;
