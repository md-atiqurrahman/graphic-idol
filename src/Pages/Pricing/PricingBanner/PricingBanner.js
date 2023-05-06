import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

const PricingBanner = () => {
  return (
    <div className="min-h-[450px] bg-[url('/src/assets/images/Banner/cup-coffee-table.jpg')] bg-fixed bg-center bg-no-repeat bg-cover text-center">
      <Navbar></Navbar>
      <div className="bg-primary opacity-90 pt-[99px]  pb-[138px]">
        <div className=" text-white text-[56px] font-bold leading-[66px]">
          <h2>
            No Hidden Charges!
            <br />
            Choose your plan
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PricingBanner;
