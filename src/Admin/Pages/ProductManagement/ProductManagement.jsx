// --- ProductManagement.jsx ---
import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import ProductTable from "../../Components/ProductTable/ProductTable";
import AddEditProductForm from "./AddEditProductForm";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../../Redux/Slices/ProductAdminSlice";



const ProductManagement = () => {

  const { items, loading, error } = useSelector((state) => state.admin.productsData);

 
  console.log(items, 'items') 
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = () => {
    setSelectedProduct(null);
    setOpenForm(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setOpenForm(true);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) dispatch(deleteProduct(id));
  };

  const handleClose = () => {
    setOpenForm(false);
    setSelectedProduct(null);
  };

  if (loading) return <Typography className="text-center p-4 text-blue-500">Loading...</Typography>;
  if (error) return <Typography className="text-center p-4 text-red-500">Error: {error}</Typography>;

  return (
    <div className="!p-4">
      <Box className="flex justify-between items-center !mb-5">
        <Typography variant="h5" className="!font-bold !text-gray-200">
          Product List
        </Typography>
        <Button variant="contained" color="warning" onClick={handleAdd}>
          Add Product
        </Button>
      </Box>

      <ProductTable items={items} onEdit={handleEdit} onDelete={handleDelete} />

      <AddEditProductForm open={openForm} onClose={handleClose} product={selectedProduct} />
    </div>
  );
};

export default ProductManagement;
