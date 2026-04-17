import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/Slice/ProductSlice";
import ProductCategory from "../../Components/Categories/ProductCategory";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.customer.products);
  const selectedCategory = useSelector((state) => state.customer.category.selectedCategory);
  const [sortOrder, setSortOrder] = useState(""); // <--- New sort state

  // Fetch products once when idle or if items are empty
  useEffect(() => {
    if (status === "idle" && items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [status, dispatch, items]);

  // Filter and sort products using useMemo to avoid recalculating on every render
  const filteredProducts = useMemo(() => {
    let products = [...items];

    if (selectedCategory !== "all") {
      products = products.filter((item) => item.category === selectedCategory);
    }

    if (sortOrder === "lowToHigh") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [items, selectedCategory, sortOrder]);

  return (
    <div className="!mx-auto p-4">
      <ProductCategory sortOrder={sortOrder} onSortChange={setSortOrder} />
      <h1 className="text-2xl font-bold">🛒 Products</h1>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load products.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-3 mt-4 !p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
