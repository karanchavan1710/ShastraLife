import React from "react";
import NavItem from "./NavItem";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, navLinks, closeMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="md:!hidden !text-sm !px-4 !py-4 uppercase text-start bg-white">
      <div className="!flex !flex-col !gap-3">
        {navLinks.map((link) => (
          <div
            key={link.label}
            onClick={closeMenu}
            className="!py-2 !px-3 !rounded-md hover:!bg-blue-100 transition duration-150 ease-in-out"
          >
            <NavItem to={link.to} label={link.label} />
          </div>
        ))}

        <div className="!flex !gap-4 !pt-4 !border-t !border-white !text-xl">
          <Link to="/favourite" onClick={closeMenu}>
            <IconButton className="!bg-orange-500 hover:!bg-orange-400" title="wishlist">
              <FiHeart className="!cursor-pointer !text-xl text-white" />
            </IconButton>
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            <IconButton className="!bg-orange-500 hover:!bg-orange-400" title="cart">
              <FiShoppingCart className="!cursor-pointer !text-xl text-white" />
            </IconButton>
          </Link>
          <Link to="/account/profile" onClick={closeMenu}>
            <IconButton className="!bg-orange-500 hover:!bg-orange-400" title="my-account">
              <FiUser className="!cursor-pointer !text-xl text-white" />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
