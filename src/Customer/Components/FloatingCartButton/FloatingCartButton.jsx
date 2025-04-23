import React, { useState } from "react";
import {
  IconButton,
  Badge,
  Tooltip,
  Drawer,
  Box,
  Typography,
  Card,
  Button,
  Divider,
} from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OrangeButton from "../Common/Buttons/OrangeButton";

const FloatingCartButton = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items || []);
  const navigate = useNavigate();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <>
      <Tooltip title="Cart" >
        <IconButton
        className="!animate-bounce"
          onClick={toggleDrawer(true)}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "orangered",
            color: "white",
            padding: "14px",
            zIndex: 2000,
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#e65100",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Badge badgeContent={cartItems.length} color="error">
            <FaShoppingCart />
          </Badge>
        </IconButton>
      </Tooltip>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 340, padding: 2 }}>
          <Typography variant="h6" className="!mb-4 font-bold text-center text-orange-600">
            🛒 Your Cart
          </Typography>

          <Divider sx={{ mb: 2 }} />

          {cartItems.length === 0 ? (
            <Typography variant="body1" color="text.secondary" className="text-center">
              No items in cart.
            </Typography>
          ) : (
            <>
              {cartItems.map((item, i) => (
                <Card
                  key={i}
                  className="!mb-3 !p-3 flex items-center gap-3 shadow-sm !w-full"
                  sx={{ borderRadius: 2 }}
                >
                <Link to={`/products/${item.id}`}>
                <img src={item.image} alt={item.title} className="h-[60px] w-[60px] !object-contain" />
                </Link>
                  <div className="flex flex-col">
                  <Link to={`/products/${item.id}`}>
                  <Typography variant="subtitle1" className="!font-semibold !line-clamp-1">
                  {item.title}
                </Typography>
                  </Link>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price} x {item.quantity || 1}
                    </Typography>
                    <Typography variant="body2" cla ssName="text-green-600 font-medium">
                      Subtotal: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                    </Typography>
                  </div>
                </Card>
              ))}

              <Divider sx={{ mt: 2, mb: 2 }} />

              <Typography  className="!text-right !mb-3 !font-bold text-orange-700 !tracking-wide">
                Total: ₹{totalPrice.toFixed(2)}
              </Typography>

              <OrangeButton
                fullWidth
                onClick={() => {
                  setOpen(false);
                  navigate("/cart");
                }}
              >
                Go to Cart
              </OrangeButton>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default FloatingCartButton;
