import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { Formik } from "formik";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../Redux/Slice/ProductSlice";

const SearchProducts = () => {
  const dispatch = useDispatch();

  return (
    <Box className="md:!flex !items-center !px-3 !py-1 !rounded-md !shadow-md !bg-gray-100">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => dispatch(setSearchTerm(values.search))}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="!flex !items-center !gap-2 w-full"
          >
            <TextField
              name="search"
              value={values.search}
              onChange={handleChange}
              variant="standard"
              size="small"
              fullWidth
              placeholder="Search products..."
              InputProps={{ disableUnderline: true }}
              className="!text-sm  !rounded"
              sx={{
                "& .MuiInputBase-input": {
                  padding: "6px 8px",
                  width: "100%",
                },
              }}
            />
            <IconButton type="submit" className="!text-gray-600 hover:!text-blue-500">
              <BsSearch />
            </IconButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchProducts;
