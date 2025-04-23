import React from "react";
import { useSelector } from "react-redux";
import OrangeButton from "../../Components/Common/Buttons/OrangeButton";
import PaymentButton from "../../Components/Common/Buttons/PaymentButton";

const PricingCard = ({ onSubmit, title,price }) => {

  const totalPrice = price;;
  const shipping = totalPrice > 0 ? 50 : 0; // Example: flat rate
  const discount = totalPrice > 500 ? 100 : 0; // Example logic
  const finalTotal = totalPrice + shipping - discount;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="!bg-white !rounded-xl !shadow-md !p-6 !space-y-4">
      <h2 className="!text-xl !font-semibold">Price Details</h2>
      <div className="!flex !justify-between">
        <span>Subtotal</span>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div className="!flex !justify-between">
        <span>Shipping</span>
        <span>{formatCurrency(shipping)}</span>
      </div>
      <div className="!flex !justify-between">
        <span>Discount</span>
        <span className="!text-green-600">- {formatCurrency(discount)}</span>
      </div>
      <hr className="!border-t !my-2" />
      <div className="!flex !justify-between !text-lg !font-bold">
        <span>Total</span>
        <span>{formatCurrency(finalTotal)}</span>
      </div>
      <div className="!mt-6 !text-center">
       <OrangeButton onClick={onSubmit} totalPrice={finalTotal}>{title}</OrangeButton>
      </div>
    </div>
  );
};

export default PricingCard;
