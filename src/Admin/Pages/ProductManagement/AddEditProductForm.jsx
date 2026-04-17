// --- AddEditProductForm.jsx ---
import React from "react";
import {
  TextField, Button, Paper, Typography, MenuItem, Box, Dialog
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../Redux/Slices/ProductAdminSlice";

const categories = ["Electronics", "Clothing", "Books", "Home", "Other"];

const validationSchema = Yup.object({
  title: Yup.string().required("Product name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number().required("Price is required").positive("Must be positive"),
  stock: Yup.number().required("Stock is required").integer("Must be an integer"),
  category: Yup.string().required("Category is required"),
  image: Yup.string().url("Must be a valid URL").required("Image URL is required"),
});

const AddEditProductForm = ({ open, onClose, product }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: product || {
      title: "",
      description: "",
      price: "",
      stock: "",
      category: "",
      image: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (product?.id) {
          await dispatch(updateProduct({ id: product.id, product: values }));
        } else {
          await dispatch(addProduct(values));
        }
        resetForm();
        onClose();
      } catch (error) {
        console.error("Failed to save product:", error);
      }
    },
  });

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <Box className="!flex !justify-center !items-center">
        <Paper elevation={3} className="!p-8 !w-full !rounded-xl !shadow-none">
          <Typography variant="h5" className="!mb-6 !text-center !font-semibold">
            {product ? "Edit Product" : "Add New Product"}
          </Typography>

          <form onSubmit={formik.handleSubmit} className="!flex !flex-col !gap-4">
            <TextField label="Product title" name="title" fullWidth variant="outlined"
              value={formik.values.title} onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title} />

            <TextField label="Description" name="description" fullWidth multiline rows={3} variant="outlined"
              value={formik.values.description} onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description} />

            <div className="grid grid-cols-2 !space-x-3.5">
              <TextField label="Price" name="price" type="number" variant="outlined"
                value={formik.values.price} onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price} />

              <TextField label="Stock" name="stock" type="number" variant="outlined"
                value={formik.values.stock} onChange={formik.handleChange}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                helperText={formik.touched.stock && formik.errors.stock} />
            </div>

            <TextField select label="Category" name="category" fullWidth variant="outlined"
              value={formik.values.category} onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category} >
              {categories.map((cat) => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
            </TextField>

            <TextField label="Image URL" name="image" fullWidth variant="outlined"
              value={formik.values.image} onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              helperText={formik.touched.image && formik.errors.image} />

            <Button variant="contained" color="primary" type="submit" className="!mt-4 !py-3 !bg-blue-600 hover:!bg-blue-700">
              {product ? "Update Product" : "Add Product"}
            </Button>
          </form>
        </Paper>
      </Box>
    </Dialog>
  );
};

export default AddEditProductForm;
