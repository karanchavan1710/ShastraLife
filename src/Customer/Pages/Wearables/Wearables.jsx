import React, { memo, useEffect } from 'react'
import ProductCard from '../../Components/ProductCard/ProductCard';
import { fetchProducts } from '../../Redux/Slice/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const Wearables = () => {
const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    } 
  }, [status, dispatch]);

  return (
<div className="!mx-auto p-4">
      <h1 className="text-2xl font-bold !my-3">Products</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load products.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !gap-4 !mt-4 !p-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>   
)
}

export default memo(Wearables)