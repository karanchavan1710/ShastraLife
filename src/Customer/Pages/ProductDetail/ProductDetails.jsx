import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Breadcrumbs, Typography } from "@mui/material";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import AddToCartButton from "../../Components/AddToCartButton/AddToCartButton";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.customer.products.items);
  const status = useSelector((state) => state.customer.products.status);

  useEffect(() => {
    if (products.length === 0 && status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length, status]);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((item) => item.id === Number(id));
      setProduct(foundProduct || null);
    }
  }, [id, products]);

  if (status === "loading") {
    return <p className="!text-center !text-xl">Loading...</p>;
  }

  if (!product) {
    return <p className="!text-center !text-xl">Product Not Found</p>;
  }

  return (
    <section className="!py-12 sm:!py-16">
      <div className="!max-w-6xl !mx-auto !px-4">
        {/* Breadcrumbs */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" className="!hover:!underline !text-gray-600">Home</Link>
          <Link to="/products" className="!hover:!underline !text-gray-600">Products</Link>
          <Typography color="black" className="!font-bold">{product.title}</Typography>
        </Breadcrumbs>

        <div className="!mt-8 !grid !grid-cols-1 !gap-12 lg:!mt-12 lg:!grid-cols-5 lg:!gap-16">
          {/* Product Image */}
          <div className="lg:!col-span-3">
            <img
              className="!h-96 !w-full !object-contain !rounded-lg"
              src={product.thumbnail || product.image}
              alt={product.title}
               loading="lazy"
            />
          </div>

          {/* Product Info */}
          <div className="lg:!col-span-2 !text-start">
            <h1 className="!text-2xl !font-bold !text-gray-900 sm:!text-3xl !my-2">
              {product.title}
            </h1>
            <p className="!text-gray-700 !text-[16px]">{product.description}</p>

            <div className="!mt-5 !flex !items-center">
              <p className="!ml-2 !text-sm !font-medium !text-gray-500">
                Rating: {product.rating?.rate || product.rating} / 5
              </p>
            </div>

            <div className="!mt-10 !border-t !py-4">
              <h1 className="!text-3xl !font-bold">${product.price}</h1>
            </div>

            <div className="!flex !items-center !justify-between !gap-3 !border-b !pb-4">
              <AddToCartButton item={product} />
              <FavoriteButton item={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
