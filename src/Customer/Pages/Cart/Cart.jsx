import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
  fetchCartFromApi,
  removeFromCartApi,
  updateCartItemApi,
} from "../../Redux/Slice/CartSlice";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PricingCard from "./PricingCard";
import React, { useEffect } from "react";

// CartPage component wrapped with React.memo for optimization
const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartFromApi());
  }, [dispatch]);

  // ✅ Fixed Total Calculation with safety
  const totalPrice = items.reduce((total, item) => {
    const price = parseInt(item.price) || 0;
    const quantity = parseInt(item.quantity) || 0;
    return total + price * quantity;
  }, 0);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCartApi(item.id));
    toast.error(`Removed ${item.title} from the cart`);
  };

  const handleQuantityChange = (item, amount) => {
    const updatedQuantity = item.quantity + amount;
    if (updatedQuantity >= 1) {
      dispatch(updateCartItemApi({ ...item, quantity: updatedQuantity }));
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty. Please add items before checking out.");
    } else {
      navigate('/checkout');
      console.log("Proceeding to checkout");
    }
  };

  return (
    <section className="!bg-gray-100 !py-6 sm:!py-12 lg:!py-6">
      <div className="!mx-auto !px-4 sm:!px-6 lg:!px-8">
        <div className="!flex !items-center !justify-center">
          {items.length === 0 ? (
            <p className="!text-center !text-gray-600 text-2xl my-2 font-bold tracking-wide">
              Your cart is empty.
            </p>
          ) : (
            <h1 className="!text-2xl !font-semibold !text-gray-900">
              Your Cart ({items.length})
            </h1>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="!bg-white !shadow">
              <div className="!px-4 !py-6 sm:!px-8 sm:!py-10">
                <div className="!flow-root">
                  <ul className="!-my-8">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="!flex !flex-col !space-y-3 !py-6 text-left sm:!flex-row sm:!space-x-5 sm:!space-y-0 border-b"
                      >
                        <div className="!shrink-0">
                          <Link to={`/products/${item.id}`}>
                            <img
                              className="!h-24 md:!w-full !rounded-lg !object-cover"
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                            />
                          </Link>
                        </div>

                        <div className="!flex !flex-1 !flex-col !justify-between">
                          <Link to={`/products/${item.id}`}>
                            <p className="!text-base !font-semibold !text-gray-900">
                              {item.title}
                            </p>
                          </Link>

                          <div className="!flex !items-center !justify-between">
                            <p className="!text-lg !font-semibold !text-gray-900">
                              ₹{parseFloat(item.price).toFixed(2)}
                            </p>
                            <div className="!flex !items-center">
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item, -1)}
                                className="!cursor-pointer !px-4 !bg-gray-200 !rounded-l-md hover:!bg-black hover:!text-white"
                              >
                                -
                              </button>
                              <span className="!px-4 !bg-gray-100">
                                {item.quantity ?? 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(item, 1)}
                                className="!cursor-pointer !px-4 !bg-gray-200 !rounded-r-md hover:!bg-black hover:!text-white"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => handleRemoveFromCart(item)}
                          className="!text-gray-500 hover:!text-gray-900 !cursor-pointer"
                        >
                          <AiFillDelete className="!h-5 !w-5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtotal */}
                <div className="!mt-6 !py-2">
                  <div className="!flex !items-center !justify-between">
                    <p className="!text-sm !text-gray-400">Subtotal</p>
                    <p className="!text-lg !font-semibold !text-gray-900">
                      ₹{totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Summary */}
          <div>
            <PricingCard
              title={'Checkout'}
              price={totalPrice} // Pass totalPrice for breakdown
              onSubmit={() => handleCheckout()} // Proceed to checkout
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(CartPage);
