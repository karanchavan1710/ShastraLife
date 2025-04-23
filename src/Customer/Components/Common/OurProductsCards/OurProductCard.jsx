import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography
} from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../../FavoriteButton/FavoriteButton";

const OurProductCard = ({ item }) => {
  return (
    <Card className="!rounded-xl !shadow-nd bg-white relative !overflow-hidden cursor-pointer !p-2">
     <Link to={`/products/${item.id}`}>
     <CardMedia
     className="!w-full !h-[140px] !object-contain !mix-blend-multiply"
     component="img"
     src={item.image}
     loading="lazy"
     alt={item.title || "Product Image"}
   />
     </Link>

      {/* Discount Label */}
      <Typography className="absolute top-3 right-4 bg-red-500 text-white !px-2 !py-1 !text-sm !rounded-md">
        30% OFF
      </Typography>

      <CardContent className="!text-start">
        <Link to={`/products/${item.id}`}>
          <Typography variant="h6" className="!font-bold hover:underline line-clamp-1">
            {item.title?.slice(0, 40)}...
          </Typography>
        </Link>
        <Typography className="!text-gray-800 !text-sm line-clamp-1">
          {item.description?.slice(0, 70)}...
        </Typography>

        <Rating value={item.rating?.rate || 4} precision={0.5} readOnly />

        <div className="flex justify-between items-center mt-2">
          <Typography variant="body1" className="!font-semibold !text-lg">
            $ {item.price}
          </Typography>
          <FavoriteButton item={item} />
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(OurProductCard);
