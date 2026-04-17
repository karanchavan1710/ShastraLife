import React, { useState } from "react";
import { Avatar, Badge, Box, Button } from "@mui/material";
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavItem from "./NavItem";
import NavIcon from "./NavIcon";
import MobileMenu from "./MobileMenu";
import SearchProducts from "./SearchProducts";
import OrangeButton from "../Buttons/OrangeButton";
import AuthModal from "../../Auth/AuthModal";
import { logout } from "../../../Redux/Slice/AuthSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Selectors (from customer store)
  const user = useSelector((state) => state.customer.auth?.user);
  const favItems = useSelector((state) => state.customer.favorite?.favoriteItems || []);
  const cartItems = useSelector((state) => state.customer.cart?.items || []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // which auth tab to show

  const handleOpenRegister = () => {
    setIsLogin(false);
    setOpenAuthModal(true);
  };

  const handleCloseAuth = () => {
    setOpenAuthModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/products", label: "PRODUCTS" },
    { to: "/wearables", label: "WEARABLES" },
    { to: "/team", label: "TEAM" },
    { to: "/contact", label: "CONTACT-US" },
  ];

  return (
    <Box className="!sticky !top-0 !z-50 !shadow-xl">
      {/* Top Strip */}
      <div className="!bg-amber-900 !text-white !text-sm !px-4 !py-3">
        <div className="!flex !justify-between !items-center !max-w-7xl !mx-auto !text-lg">
          <div className="!gap-4 flex">
            <span>🚚 Fast Delivery</span>
            <span className="!hidden sm:!block">📦 Free Shipping</span>
          </div>
          <div className="!gap-6 !flex !items-center">
            {user ? (
              <>
                <span className="!text-white">{"Welcome, " + user.firstName}</span>
                <Avatar
                  src={user.profilePic || ""}
                  alt={user.firstName || "U"}
                  className="!w-8 !h-8 !rounded-full"
                />
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <OrangeButton onClick={handleOpenRegister}>Register</OrangeButton>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="!bg-white !px-4 !py-3">
        <div className="!flex !justify-between !items-center !max-w-7xl !mx-auto !w-full">
          <Link to="/" className="!text-2xl !font-bold !text-orange-600">
            Shastra Life
          </Link>
          <div className="!flex-1 !px-4 !max-w-xl">
            <SearchProducts />
          </div>
          <div className="!flex !items-center !gap-4">
            <div className="!hidden md:!flex !gap-4 !text-gray-600 !text-xl">
              <Badge badgeContent={favItems.length} color="error">
                <NavIcon IconComponent={FiHeart} to="/favourite" title="Wishlist" />
              </Badge>
              <Badge badgeContent={cartItems.length} color="secondary">
                <NavIcon IconComponent={FiShoppingCart} to="/cart" title="Cart" />
              </Badge>
              <NavIcon IconComponent={FiUser} to="/account/profile" title="Account" />
            </div>
            <div
              className="md:!hidden !text-2xl !cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="!text-sm !hidden md:!block !bg-white">
        <div className="!flex !justify-center !gap-6 !py-3 !max-w-7xl !mx-auto !uppercase">
          {navLinks.map((link) => (
            <NavItem key={link.label} to={link.to} label={link.label} />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        closeMenu={() => setMobileMenuOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal
        open={openAuthModal}
        handleClose={handleCloseAuth}
        isLogin={isLogin}
      />
    </Box>
  );
};

export default Navbar;
