import { Button } from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToApiCart } from "../../Redux/Slice/CartSlice";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();


  const { items } = useSelector((state) => state.customer.cart);
  const { token } = useSelector((state) => state.customer.auth);
  
  const isInCart = Array.isArray(items) && items.some((cartItem) => cartItem.productId === item.id);


  const handleAddToCart = async () => {
    if (isInCart) {
      toast.error("Item is already in the cart!");
      return;
    }
  
    try {
      await dispatch(addToApiCart(item)).unwrap();
      toast.success("Item added to cart!");
    } catch {
      toast.error("Failed to add item.");
    }
  };
  
  return (
    <Button
      variant={isInCart ? "outlined" : "contained"}
      fullWidth
      size="small"
      className="!rounded-[4px]"
      onClick={handleAddToCart}
      disabled={isInCart}
      startIcon={!isInCart && <FaShoppingCart />}
      sx={{
        textTransform: "capitalize",
        backgroundColor: isInCart ? "#f5f5f5" : "#ff5722", // grey and orangered
        color: isInCart ? "#666" : "#fff",
        borderColor: isInCart ? "transparent" : "transparent",
        "&:hover": {
          backgroundColor: isInCart ? "#e0e0e0" : "#e64a19",
        },
      }}
    >
      {isInCart ? "Added" : "Add to Cart"}
    </Button>
  );
};

export default memo(AddToCartButton);
