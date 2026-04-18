import React, { useState } from "react";
import { Modal } from "@mui/material";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import toast from "react-hot-toast";
import PricingCard from "../Cart/PricingCard";
import { v4 as uuidv4 } from "uuid";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderApi } from "../../Redux/Slice/OrderSlice";
import { add } from "../../Redux/Slice/AddressSlice"; 
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const { items } = useSelector((state) => state.customer.cart);
  const addresses = useSelector((state) => state.customer.addresses);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Total price calculation (same logic as in CartPage)
// Calculate the total price based on items in the cart
const totalPrice = items.reduce((total, item) => {
  const price = parseInt(item.price) || 0;
  const quantity = parseInt(item.quantity) || 0;

  return total + price * quantity;
}, 0);

// Calculate shipping and discount
const shipping = totalPrice > 0 ? 50 : 0; // Shipping cost only if totalPrice > 0
const discount = totalPrice > 500 ? 100 : 0; // Discount for totalPrice > 500

// Calculate the final price
const finalPrice = totalPrice + shipping - discount;

console.log("Total Price:", totalPrice);
console.log("Shipping:", shipping);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setNewAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    });
    setOpen(false);
  };

  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, street, city, state, zip, phone } = newAddress;

    if (!name || !street || !city || !state || !zip || !phone) {
      toast.error("Please fill all the fields");
      return;
    }

    const updatedAddress = { ...newAddress, id: uuidv4() };
    dispatch(add(updatedAddress));
    handleClose();
    toast.success("Address added successfully");
  };

  const initiatePayment = () => {
    if (!selectedAddressId) {
      toast.error("Please select an address");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Creating the order data after validations
    const orderData = {
      items,
      address: selectedAddressId,
      total: finalPrice,
      createdAt: new Date().toISOString(),
    };

    // Initiating Razorpay payment
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Test API Key ID
      amount: finalPrice * 100, // Convert to paise
      currency: "INR",
      name: "Shastra Life",
      description: "Thanks for visiting our site for your order ❤️",
      handler: function (response) {
        console.log("✅ Payment Success:", response);
        toast.success("Payment Successful!");

        // Dispatch place order API after payment success
        dispatch(placeOrderApi(orderData))
          .then(() => {
            toast.success("Order placed successfully!");
            navigate("/order-success");
          })
          .catch(() => {
            toast.error("Error placing order. Please try again.");
          });
      },
      prefill: {
        name: "Karan Chavan",
        email: "karan@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Karan's Dev Lane",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="!mx-auto !p-4">
      <div className="flex justify-between !items-center !mb-4">
        <h2 className="!text-xl !font-semibold">Saved Addresses</h2>
        <OrangeButton variant="contained" onClick={handleOpen}>
          Add New Address
        </OrangeButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        <div className="!space-y-4 text-start lg:col-span-2">
          {addresses.length === 0 ? (
            <p className="text-gray-500">No addresses saved yet.</p>
          ) : (
            addresses.map((addr) => (
              <AddressCard
                key={addr.id}
                addr={addr}
                onSelect={() => setSelectedAddressId(addr.id)}
                isSelected={selectedAddressId === addr.id}
              />
            ))
          )}
        </div>

        {/* Pricing Card */}
        <div className="flex flex-col !p-4 bg-white !shadow">
          <PricingCard
            title="order now"
            price={totalPrice}
            onSubmit={initiatePayment} // Proceed to payment after validation
          />
        </div>
      </div>

      {/* Modal for Adding New Address */}
      <Modal open={open} onClose={handleClose}>
          <AddressForm
            newAddress={newAddress} // Pass the state
            handleChange={handleChange}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          />
      </Modal>
    </div>
  );
};

export default React.memo(CheckOutPage);
