import React from "react";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import OurProducts from "../../Components/OurProducts/OurProducts";
import FAQ from "../FAQ/FAQ";
import Testominals from "../Testomonials/Testomonials";
import BannerList from "../../Components/Banner/BannerList";
import { IconButton, Tooltip } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="">
        {" "}
        <HomeSlider />
      </div>

      <div className="!my-5">
        <h2 className="font-bold text-2xl !my-3">Our Products</h2>
        <OurProducts />
      </div>

      <BannerList/>
      <Testominals />


      <div>
        <FAQ />
      </div>

    
    
    </>
  );
};

export default HomePage;
