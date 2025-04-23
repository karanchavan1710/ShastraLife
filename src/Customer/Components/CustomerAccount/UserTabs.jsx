import React from "react";
import { Tabs, Tab } from "@mui/material";

const UserTabs = ({ value, onChange }) => (
  <Tabs
    value={value}
    onChange={onChange}
    className="!mt-6"
    indicatorColor="primary"
    textColor="primary"
    variant="fullWidth"
  >
    <Tab label="Orders" />
    <Tab label="Favorites" />
    <Tab label="Settings" />
  </Tabs>
);

export default UserTabs;
