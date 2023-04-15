import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";




const Main = () => {
  return (
    <div className="relative pb-[91px] lg:pb-[94px] min-h-[100vh]">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
