import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Button, IconButton, Paper } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { fetchFavoritesFromApi, removeFromApiFavorite, removeFromFavorite } from "../../Redux/Slice/FavoriteSlice";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.customer.favorite.favoriteItems);

  useEffect(()=>{
dispatch(fetchFavoritesFromApi())
  },[dispatch])

  const handleRemoveFavorites=(item)=>{
    dispatch(removeFromFavorite(item.id))
    dispatch(removeFromApiFavorite(item.id))
    toast.error(`Removed "${item.title}" from favorites`);
  }

  return (
    <Box className="!w-full !mx-auto !p-6 ">
    <Typography variant="h4" className="!text-center !mb-6">
    Your {favorites.length} favorite Products ❤️
    </Typography>
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <Box
            key={item.id}
            className="!flex !items-center !justify-between !p-4 !mb-4 !border-b !border-gray-200"
          >
            {/* Product Image & Details */}
            <Box className="!flex !items-center !gap-4">
            <Link to={`/products/${item.id}`}>  <img src={item.image} alt={item.name} loading="lazy" image className="!w-16 !h-16 !rounded-lg" /></Link>
              <Box>
               <Link to={`/products/${item.id}`}> <Typography variant="h" className="!font-semibold">
               {item.title}
             </Typography></Link>
                <Typography variant="body1" className="!text-gray-600">
                  ₹{item.price}
                </Typography>
              </Box>
            </Box>

            {/* Actions */}
            <Box className="!flex !gap-3">
             <AddToCartButton item={item} />
              <IconButton onClick={()=>handleRemoveFavorites(item)} color="error">
                <MdDelete />
              </IconButton>
            </Box>
          </Box>
        ))
      ) : (
        <Paper className="!p-3">
          💔 No favorite items yet!
        </Paper>
      )}
    </Box>
  );
};

export default FavoritePage;
