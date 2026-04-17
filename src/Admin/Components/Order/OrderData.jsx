import React from 'react'

const OrderData = [
    {
      "orderId": "ORD-1001",
      "customerName": "Aarav Mehta",
      "email": "aarav.mehta@example.com",
      "phone": "+91 9876543210",
      "orderDate": "2025-05-01",
      "status": "Delivered",
      "paymentMethod": "Credit Card",
      "totalAmount": 2549,
      "items": [
        {
          "productName": "Bluetooth Headphones",
          "quantity": 1,
          "price": 1999
        },
        {
          "productName": "USB-C Charging Cable",
          "quantity": 1,
          "price": 550
        }
      ],
      "shippingAddress": "101, MG Road, Pune, Maharashtra, India"
    },
    {
      "orderId": "ORD-1002",
      "customerName": "Sneha Patil",
      "email": "sneha.patil@example.com",
      "phone": "+91 9876501234",
      "orderDate": "2025-05-03",
      "status": "Pending",
      "paymentMethod": "UPI",
      "totalAmount": 1049,
      "items": [
        {
          "productName": "Smart LED Bulb",
          "quantity": 2,
          "price": 499
        },
        {
          "productName": "Wall Mount Stand",
          "quantity": 1,
          "price": 51
        }
      ],
      "shippingAddress": "B-502, Green Valley, Nashik, Maharashtra, India"
    },
    {
      "orderId": "ORD-1003",
      "customerName": "Rahul Singh",
      "email": "rahul.singh@example.com",
      "phone": "+91 9845012345",
      "orderDate": "2025-05-05",
      "status": "Cancelled",
      "paymentMethod": "Cash on Delivery",
      "totalAmount": 3499,
      "items": [
        {
          "productName": "Fitness Smartwatch",
          "quantity": 1,
          "price": 3499
        }
      ],
      "shippingAddress": "304, Skyline Tower, Mumbai, Maharashtra, India"
    }
  ]
  
export default OrderData