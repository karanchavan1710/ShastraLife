import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Divider
} from '@mui/material';
import { MdArrowBack } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/Slice/ProductSlice';
import { fetchOrders } from '../../Redux/Slice/ViewOrderSlice';

const OrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orders, loading: orderLoading, error: orderError } = useSelector((state) => state.customer.viewOrder);
  const { items: products, status: productStatus } = useSelector((state) => state.customer.products);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(fetchOrders());
    }
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, orders.length, products.length]);

  const order = orders.find((order) => order.id.toString() === id.toString());
  const product = products.find((prod) => prod.id.toString() === order?.productId?.toString());

  if (orderLoading || productStatus === 'loading') {
    return <p className="!text-center !text-blue-500 !text-xl !mt-10">Loading...</p>;
  }

  if (orderError || productStatus === 'failed') {
    return <p className="!text-center !text-red-500 !text-xl !mt-10">Failed to load data.</p>;
  }

  if (!order || !product) {
    return <p className="!text-center !text-red-500 !text-xl !mt-10">Order or Product not found</p>;
  }

  const total = order.price * order.quantity;

  return (
    <div className="!flex !flex-col !items-center !px-4 !py-8 !max-w-4xl !mx-auto">
      <Button
        variant="outlined"
        startIcon={<MdArrowBack />}
        onClick={() => navigate('/account/orders')}
        className="!self-start !mb-4"
      >
        Back to Orders
      </Button>

      <Card className="!shadow-none !rounded-xl !w-full">
        <div className="!flex !flex-col md:!flex-row !gap-4 !p-6 items-center text-start justify-center">
          <Avatar
            src={product.image}
            alt={product.title}
            loading="lazy"  // Lazy loading for image
            variant="rounded"
            sx={{ width: 250, height: 250 }}
          />
          <CardContent className="!flex-1">
            <Typography variant="h5" className="!text-indigo-600 !font-semibold">
              {product.title}
            </Typography>

            <Divider className="!my-3" />

            <Typography className="!text-gray-800 !mb-1">
              <strong>Order ID:</strong> #{order.id}
            </Typography>
            <Typography className="!text-gray-800 !mb-1">
              <strong>Quantity:</strong> {order.quantity}
            </Typography>
            <Typography className="!text-gray-800 !mb-1">
              <strong>Price per item:</strong> ₹{order.price}
            </Typography>
            <Typography className="!text-gray-800 !mb-1">
              <strong>Total:</strong> ₹{total}
            </Typography>
            <Typography className="!text-gray-800 !mb-1">
              <strong>Order Date:</strong> {order.date}
            </Typography>
            <Typography className="!text-gray-800 !mb-1">
              <strong>Delivery Date:</strong> {order.deliveryDate || 'Not Delivered Yet'}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetails;
