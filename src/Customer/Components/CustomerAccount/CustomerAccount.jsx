import React, { useState } from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import FavoritePage from "../../Pages/Favourite/Favourite";
import UserDetailsCard from "./UserDetailsCard";
import EditProfileUser from "./EditProfileUser";
import UserTabs from "./UserTabs";
import MyOrders from "../Order/CustomerOrder";



const UserProfile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [editOpen, setEditOpen] = useState(false);

  const user = {
    name: "Karan Chavan",
    email: "karanchavan2194@gmail.com",
    phone: "+91 9850502194",
    location: "Shrirampur, Maharashtra",
    bio: "Frontend Developer passionate about clean UI and real-time web apps.",
    avatar: "https://ui-avatars.com/api/?name=Karan+Chavan&background=0D8ABC&color=fff",
  };

  return (
    <section className="!py-10 !px-4 sm:!px-6 lg:!px-8 max-w-7xl !mx-auto">
      <div className="!p-6">
        <Breadcrumbs>
          <Link to="/">Home</Link>
          <Link className="font-bold text-black">User Profile</Link>
        </Breadcrumbs>

        <UserDetailsCard user={user} onEdit={() => setEditOpen(true)} />
        <UserTabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} />

        <Box className="!mt-6">
          {tabIndex === 0 && <MyOrders/>}
          {tabIndex === 1 && <FavoritePage />}
          {tabIndex === 2 && <Typography>Settings options will come here.</Typography>}
        </Box>

        <Link className="text-xl font-semibold tracking-wide hover:underline" to="/account/order">
          View All Orders
        </Link>
      </div>

      <EditProfileUser open={editOpen} onClose={() => setEditOpen(false)} user={user} />
    </section>
  );
};

export default UserProfile;
