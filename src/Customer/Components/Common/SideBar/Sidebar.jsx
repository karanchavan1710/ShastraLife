import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  Badge,
} from "@mui/material";
import { BsList } from "react-icons/bs";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
 
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(isOpen);
  };

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <Tooltip title="Menu">
        <IconButton onClick={toggleDrawer(true)} sx={{ color: "black" }}>
          <BsList size={28} />
        </IconButton>
      </Tooltip>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div className="!w-64 bg-white text-black h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="!p-4 !text-lg !font-semibold !border-b !border-gray-700">
            Shastra Life
          </div>

          {/* Sidebar Menu */}
          <List>
            <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <AiFillHome className="text-orange-500" size={24} />
              </ListItemIcon>
              <ListItemText primary="Home" sx={{ color: "black" }} />
            </ListItem>

            <ListItem component={Link} to="/cart" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <MdOutlineShoppingBag className="text-orange-500" size={24} />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Cart" sx={{ color: "black" }} />
            </ListItem>

            
            <ListItem component={Link} to="/favourite" onClick={toggleDrawer(false)}>
            <ListItemIcon>
           <Badge badgeContent={favoriteItems.length} color="success"> <FaRegHeart className="text-orange-500" size={24} /></Badge>
            </ListItemIcon>
            <ListItemText primary="Favourite" sx={{ color: "black" }} />
            </ListItem>
            <ListItem component={Link} to="/account" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <AiOutlineUser className="text-orange-500" size={24} />
              </ListItemIcon>
              <ListItemText primary="Account" sx={{ color: "black" }} />
            </ListItem>
            </List>
            
          <Divider className="!border-gray-700" />

          {/* Footer */}
          <div className="!p-4 !text-sm text-gray-400">© 2025 Shastra Life</div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
