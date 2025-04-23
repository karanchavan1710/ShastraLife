import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Slice/CategorySlice";
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import OrangeButton from "../Common/Buttons/OrangeButton";

const API_URL = "https://fakestoreapi.com/products";

const ProductCategory = ({ sortOrder, onSortChange }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        const uniqueCategories = ["all", ...new Set(response.data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        🛍️ Browse by Category
      </Typography>

      <Box sx={{ display: "flex",justifyContent:"center", flexWrap: "wrap", gap: 2, overflowX: "auto", pb: 2 }}>
        {categories.map((category) => (
          <OrangeButton
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => {
              console.log("Selected Category:", category); // Debugging
              dispatch(setCategory(category));
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </OrangeButton>
        ))}
      </Box>
       {/* Sort Dropdown */}
       <FormControl size="small" sx={{ minWidth: 180 }}>
       <InputLabel>Sort by Price</InputLabel>
       <Select value={sortOrder} onChange={(e) => onSortChange(e.target.value)} label="Sort by Price">
         <MenuItem value="">None</MenuItem>
         <MenuItem value="lowToHigh">Low to High</MenuItem>
         <MenuItem value="highToLow">High to Low</MenuItem>
       </Select>
     </FormControl>
    </Box>
  );
};

export default ProductCategory;
