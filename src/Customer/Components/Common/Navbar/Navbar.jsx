import React, { useState } from 'react';
import { Badge, Box, Button } from '@mui/material';
import { FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import NavItem from './NavItem';
import NavIcon from './NavIcon';
import MobileMenu from './MobileMenu';
import SearchProducts from './SearchProducts';
import OrangeButton from '../Buttons/OrangeButton'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();


  const FavItem = useSelector((state)=>state.favorite.favoriteItems)

  const CartItem = useSelector((state)=>state.cart.items)

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/products', label: 'PRODUCTS' },
    { to: '/wearables', label: 'WEARABLES' },
    { to: '/team', label: 'TEAM' },
    { to: '/contact', label: 'CONTACT-US' },
  ];

  return (
    <Box className="!sticky !top-0 !z-50 !shadow-xl">
      {/* Top Strip */}
      <div className="!bg-amber-900 !text-white !text-sm !px-4 !py-3">
        <div className="!flex !justify-between !items-center !max-w-7xl !mx-auto !text-lg">
         <div className="!flex !items-center !space-x-4">
         <div className="!gap-4 flex">
         <span>🚚 Fast Delivery</span>
         <span className='!hidden sm:!block'>📦 Free Shipping</span>
       </div>
         </div>
          <div className="!gap-6 !flex !items-center !justify-between ">
            {!isAuthenticated ? (
              <OrangeButton
                onClick={() => loginWithRedirect()}
                className="!hover:underline !text-white"
              >
                Login
              </OrangeButton>
            ) : (
              <>
                <span className="!text-white">Hi, {user.name.split(' ')[0]}</span>
                <OrangeButton
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                  className="!hover:underline !text-white"
                >
                  Logout
                </OrangeButton>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="!bg-white !px-4 !py-3">
        <div className="!flex !justify-between !items-center !max-w-7xl !mx-auto !w-full">
          {/* Logo */}
          <Link to="/" className="!text-2xl !font-bold !text-orange-600">
            Shastra Life
          </Link>

          {/* Search Bar */}
          <div className="!flex-1 !px-4 !max-w-xl">
            <SearchProducts />
          </div>

          {/* Icons + Hamburger */}
          <div className="!flex !items-center !gap-4">
            <div className="!hidden md:!flex !gap-4 !text-gray-600 !text-xl">
            <Badge badgeContent={FavItem.length} color='error'>
              <NavIcon IconComponent={FiHeart} to="/favourite" title="Wishlist" />
            </Badge>
              <Badge badgeContent={CartItem.length} color='secondary'>
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

      {/* Bottom Nav (Desktop) */}
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
    </Box>
  );
};

export default Navbar;
