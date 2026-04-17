import { Avatar, Card, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { MdElectricBolt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../Redux/Slice/ViewOrderSlice";

const OrderCard = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.customer.viewOrder);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="!flex !justify-center !items-center">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div className="!text-red-500">Error: {error}</div>;
  }

  return (
    <div className="!space-y-6">
      {orders.length === 0 ? (
        <p className="!text-gray-500 !text-center">Orders not found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="!bg-white !p-5 !shadow-lg !rounded-xl !border !border-gray-200 hover:!shadow-xl !transition-shadow !duration-300"
          >
            {/* Order Header */}
            <div className="!flex !items-center !gap-4 !text-start !mb-4">
              <Avatar sx={{ bgcolor: "#f97316" }}>
                <MdElectricBolt color="white" />
              </Avatar>
              <div className="!flex !flex-col !space-y-1.5">
                <span className="!uppercase !font-semibold !text-orange-600 !text-sm !tracking-wide">
                  Status:
                  <span className="!ml-1 !px-2 !py-0.5 !rounded-full !bg-orange-100 !text-orange-700 !text-xs">
                    Shipped
                  </span>
                </span>
                <p className="!text-gray-600">
                  Arriving by <strong>{new Date(order.createdAt).toDateString()}</strong>
                </p>
                <p className="!text-gray-600">
                  <strong>Total:</strong> ₹{order.total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="!space-y-4">
              {order.items.map((item) => (
                <Card
                  key={item.id}
                  className="!p-4 !bg-green-50 !flex !items-center !text-start !gap-4 !rounded-lg !shadow-inner"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                     loading="lazy"
                    className="!w-[100px] !h-[100px] !object-contain !rounded-md border border-gray-200 mix-blend-multiply !p-2"
                  />
                  <div className="!space-y-1">
                    <h2 className="!font-bold !text-lg !text-gray-800">Karan</h2>
                    <Link to={`/account/order/${order.id}`}>
                      <p className="!text-gray-700">{item.title}</p>
                    </Link>
                    <p className="!font-semibold !text-green-700">₹{item.price.toFixed(2)}</p>
                    <p className="!text-gray-600">
                      <strong>Qty:</strong> {item.quantity}
                    </p>
                    <p className="!text-gray-600">
                      <strong>Size:</strong> Free
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderCard;
