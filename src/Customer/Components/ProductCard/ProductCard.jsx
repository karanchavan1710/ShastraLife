import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductCard = ({ item }) => {
  return (
    <Card className="!overflow-hidden !rounded-md !shadow-lg cursor-pointer relative">
      <Link to={`/products/${item.id}`}>
        <CardMedia
          className="!h-48 !object-contain !p-2 !w-full"
          component="img"
          src={item.image}
          alt={item.title}
          loading="lazy"  // Lazy loading for image
        />
      </Link>

      {item.discountPercentage && (
        <Typography className="bg-red-500 text-white !px-2 !py-1 !rounded-md !text-sm absolute right-4 top-3">
          {item.discountPercentage}% OFF
        </Typography>
      )}

      <CardContent className="!bg-gray-200 !text-start">
        <Link to={`/products/${item.id}`}>
          <Typography variant="h6" className="!font-bold hover:!underline line-clamp-1">
            {item.title
              ? `${item.title.slice(0, 20)}...`
              : item.title}
          </Typography>
        </Link>

        <Typography className="!text-gray-800 !text-sm !line-clamp-1">
          {item.description.length > 50
            ? `${item.description.slice(0, 50)}...`
            : item.description}
        </Typography>

        <Rating value={item?.rating?.rate || 0} readOnly />

        <div className="flex justify-between !items-center mt-2">
          <Typography variant="body1" className="!font-semibold !text-lg">
            ₹{item.price.toLocaleString("en-IN")}
          </Typography>

          <FavoriteButton item={item} />
        </div>
      </CardContent>
      <AddToCartButton item={item} />
      <Typography className="!text-gray-500 !text-sm text-center">
        {/* Optional text or details can go here */}
      </Typography>
    </Card>
  );
};

export default memo(ProductCard);
