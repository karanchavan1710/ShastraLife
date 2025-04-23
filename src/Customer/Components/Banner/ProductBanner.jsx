import { Box, Typography, Button } from "@mui/material";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <Box
      className={`!relative !w-full !h-[300px] !rounded-lg !overflow-hidden !shadow-2xl ${product.bgColor} !transition-all !duration-500 hover:!shadow-3xl`}
    >
      {/* Background Image with Overlay */}
      <Box className="!absolute !inset-0 !w-full !h-full">
        <img
          src={product.image}
          alt={product.title}
           loading="lazy"
          className="!absolute !inset-0 !w-full !h-full !object-cover !opacity-20 !transition-transform !duration-500 hover:!scale-110"
        />
        <Box className="!absolute !inset-0 !bg-gradient-to-t !from-black/80 !to-transparent"></Box>
      </Box>

      {/* Content */}
      <Box className="!relative !flex !flex-col !items-start !justify-center !h-full !px-10 !z-10 !text-white">
        <Typography
          variant="h3"
          className="!font-extrabold !text-3xl sm:!text-5xl !drop-shadow-lg"
        >
          {product.title}
        </Typography>
        <Typography variant="body1" className="!mt-2 !text-base sm:!text-lg">
          {product.description}
        </Typography>

       
      </Box>
    </Box>
  );
};

export default ProductBanner;
