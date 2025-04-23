import React from "react";
import productData from "./../../../assets/ProductBanners";
import ProductBanner from './ProductBanner'

const BannerList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 !gap-2">
      {productData.filter((item)=>item.id !== 3 && item.id !== 4).map((product) => (
        <ProductBanner key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BannerList;
