import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Chip, Button, TablePagination, Select, MenuItem, Dialog, DialogTitle,
  DialogContent, Typography, IconButton
} from '@mui/material';
import { FaDoorClosed } from 'react-icons/fa';

const orders = [
  {
    orderId: "ORD-1005",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1005",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-10026",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-10037",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-10013",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-10012",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-10403",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-10501",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-10602",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-10073",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-10401",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-13002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-10036",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  }, {
    orderId: "ORD-1001",
    customerName: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 9876543210",
    orderDate: "2025-05-01",
    status: "Delivered",
    paymentMethod: "Credit Card",
    totalAmount: 2549,
    items: [
      { productName: "Bluetooth Headphones", quantity: 1, price: 1999 },
      { productName: "USB-C Charging Cable", quantity: 1, price: 550 }
    ]
  },
  {
    orderId: "ORD-1002",
    customerName: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "+91 9876501234",
    orderDate: "2025-05-03",
    status: "Pending",
    paymentMethod: "UPI",
    totalAmount: 1049,
    items: [
      { productName: "Smart LED Bulb", quantity: 2, price: 499 },
      { productName: "Wall Mount Stand", quantity: 1, price: 51 }
    ]
  },
  {
    orderId: "ORD-1003",
    customerName: "Rahul Singh",
    email: "rahul.singh@example.com",
    phone: "+91 9845012345",
    orderDate: "2025-05-05",
    status: "Cancelled",
    paymentMethod: "Cash on Delivery",
    totalAmount: 3499,
    items: [
      { productName: "Fitness Smartwatch", quantity: 1, price: 3499 }
    ]
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered': return 'success';
    case 'Pending': return 'warning';
    case 'Cancelled': return 'error';
    default: return 'default';
  }
};

export default function OrderTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const filteredOrders = statusFilter === "All"
    ? orders
    : orders.filter(o => o.status === statusFilter);

    const paginationOrderTable = filteredOrders.slice(
        page * rowsPerPage, 
        page * rowsPerPage + rowsPerPage
    )
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white !p-1">Order Management</h2>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          size="small"
          className="w-48"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </Select>
      </div>

      <TableContainer component={Paper} className="shadow-md rounded-xl">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Total ₹</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginationOrderTable
              .map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>
                    <Chip label={order.status} color={getStatusColor(order.status)} />
                  </TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell>₹{order.totalAmount}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => setSelectedOrder(order)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredOrders.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10]}
        />
      </TableContainer>

      {/* Dialog for Order Items */}
      <Dialog open={!!selectedOrder} onClose={() => setSelectedOrder(null)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Order Details - {selectedOrder?.orderId}
          <IconButton onClick={() => setSelectedOrder(null)} className="!absolute !right-3 !top-2 !bg-gray-600 hover:!bg-gray-700">
            <FaDoorClosed className="text-white"/>
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1" gutterBottom>
            Customer: {selectedOrder?.customerName}
          </Typography>
          <Typography variant="subtitle2" className="!mb-2">
            Items:
          </Typography>
          {selectedOrder?.items.map((item, index) => (
            <div key={index} className="!mb-2">
              <div className="flex justify-between">
                <span>{item.productName} (x{item.quantity})</span>
                <span>₹{item.price}</span>
              </div>
            </div>
          ))}
          <hr className="my-3" />
          <Typography variant="body1" className="text-right font-semibold">
            Total: ₹{selectedOrder?.totalAmount}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
