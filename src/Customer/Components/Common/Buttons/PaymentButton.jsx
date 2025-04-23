import React from "react";
import toast from "react-hot-toast";
import OrangeButton from "./OrangeButton";

const PaymentButton = ({ onSubmit }) => {
  const initiatePayment = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Test API Key ID
      amount: 50000, // 500.00 INR in paise
      currency: "INR",
      name: "Your Store",
      description: "Test Transaction",
      handler: function (response) {
        console.log("✅ Payment Success:", response);
        toast.success("Payment Successful!");
        if (onSubmit) onSubmit(); // Call handlePlaceOrder after payment
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
    <OrangeButton onClick={initiatePayment}>
      Pay with Razorpay
    </OrangeButton>
  );
};

export default PaymentButton;
