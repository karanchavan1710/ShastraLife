import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaLock, FaHeadset, FaExchangeAlt, FaTruck } from "react-icons/fa";

const policyData = [
  { title: "Free Shipping", description: "For all Orders Over $100", icon: <LiaShippingFastSolid /> },
  { title: "Secure Payment", description: "100% Secure Payment", icon: <FaLock /> },
  { title: "24/7 Support", description: "Dedicated Support Team", icon: <FaHeadset /> },
  { title: "Easy Returns", description: "Hassle-Free Returns Policy", icon: <FaExchangeAlt /> },
  { title: "Fast Delivery", description: "Get Your Order Quickly", icon: <FaTruck /> },
];

const Policy = () => {
  return (
    <div className="!bg-white !text-black !py-[70px] !mb-2">
      <div className="!flex !items-center !justify-center !gap-9 !flex-wrap">
        {policyData.map((policy, index) => (
          <div key={index} className="!flex !items-center !justify-center !flex-col !group">
            <div className="!text-[40px] !transition-all !duration-300 hover:text-orange-500 text-gray-800 hover:-translate-y-2">
              {policy.icon}
            </div>
            <h3 className="!text-[18px] !font-semibold !text-gray-800 !mt-3">
              {policy.title}
            </h3>
            <p className="!text-[13px] !font-medium !text-gray-600">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Policy);
