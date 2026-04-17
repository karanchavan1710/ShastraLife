
// --- ProductTable.jsx ---
import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton, Tooltip, Typography
} from "@mui/material";
import { MdEdit, MdDelete } from "react-icons/md";

const ProductTable = ({ items , onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} className="!shadow-md !rounded-xl !p-5 ">
      {items?.length === 0 ? (
        <Typography variant="h6" className="!text-center !text-gray-500 p-4">
          Products not available
        </Typography>
      ) : (
        <Table className='overflow-scroll'>
          <TableHead className="bg-blue-600">
            <TableRow>
              <TableCell className="!text-white !font-bold">ID</TableCell>
              <TableCell className="!text-white !font-bold">Img</TableCell>
              <TableCell className="!text-white !font-bold">Product Name</TableCell>
              <TableCell className="!text-white !font-bold">Category</TableCell>
              <TableCell className="!text-white !font-bold">Price</TableCell>
              <TableCell className="!text-white !font-bold">Stock</TableCell>
              <TableCell className="!text-white !font-bold">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items?.map((p) => (
              <TableRow key={p.id} className="hover:!bg-blue-50">
                <TableCell>{p.id}</TableCell>
                <TableCell>
                <img src={p.image} className='h-16 w-24'/>
                </TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.stock || 37}</TableCell>
                <TableCell>
                  <div className="flex !gap-2">
                    <Tooltip title="Edit">
                      <IconButton color="primary" onClick={() => onEdit(p)}>
                        <MdEdit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton color="error" onClick={() => onDelete(p.id)}>
                        <MdDelete />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ProductTable;
