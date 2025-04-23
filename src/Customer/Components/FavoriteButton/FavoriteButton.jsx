import { IconButton } from "@mui/material";
import React from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, favoriteApi, removeFromApiFavorite, removeFromFavorite } from "../../Redux/Slice/FavoriteSlice";
import toast from "react-hot-toast";

const FavoriteButton = ({ item }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const isFavorited = favoriteItems.some((favItem) => favItem.id === item.id);

  // Inside a Product/Favorite Card component
const handleFavoriteClick = () => {
  if (isFavorited) {
    dispatch(removeFromFavorite(item.id));
    dispatch(removeFromApiFavorite(item.id));
    toast.error(`Favorite ${item.title} has been removed`);
  } else {
    dispatch(addToFavorite(item));
    dispatch(favoriteApi(item));
    toast.success(`Favorite ${item.title} has been added`);
  }
};


  return (
   <>
   <IconButton color="error" onClick={handleFavoriteClick}>
   {isFavorited ? <IoHeartSharp /> : <IoHeartOutline />}
 </IconButton>
   </>
  );
};

export default FavoriteButton;
