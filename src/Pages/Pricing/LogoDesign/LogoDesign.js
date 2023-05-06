import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const LogoDesign = () => {
  return (
    <div className="mt-[80px] mb-[54px] text-center">
      <h1 className="text-black text-[46px] font-bold leading-[70px] mb-[54px]">
        Logo Design
      </h1>
      <div className="grid grid-cols-[350px] md:grid-cols-[350px_350px] lg:grid-cols-[350px_350px_350px] gap-[30px] justify-center">
        <div className="card rounded-br-[5px] rounded-bl-[5px] w-[350px] h-[710px] bg-base-100 shadow-xl mx-auto">
          <div className="min-h-[170px] bg-[url('/src/assets/images/Pricing/LogoDesign/shape-1.png')] bg-center bg-no-repeat bg-cover text-center pt-[40px] pb-[55px]">
            <h3 className="uppercase text-white text-[18px] leading-[26px] font-medium mb-[20px]">
              Basic Plan
            </h3>
            <p className="text-white text-[50px] leading-[26px] font-bold">
              $150
            </p>
          </div>
          <div className="px-[45px] pt-[30px] pb-[20px]">
            <h2
              className="text-black text-[20px] leading-[36px] font-semibold 
            pb-[20px]"
            >
              Logo Only
            </h2>
            <div className="flex flex-col">
              <ul className="text-[#8E8D8E] text-[18px] font-normal leading-[36px] text-left">
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  3 Concepts
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Source File
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  High Resolution
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Logo Transparency
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Unlimited Revisions
                </li>
                <li className="mx-[15px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  3 Days Delivery
                </li>
              </ul>
              <div className="pt-[45px] pb-[30px]">
                <div
                  className="w-[183px] px-[45px] py-[15px] bg-transparent mx-auto
                 border border-[#E0E0E0] rounded-[50px] text-black text-[17px] font-normal leading-[30px] cursor-pointer hover:bg-secondary hover:text-white"
                >
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-br-[5px] rounded-bl-[5px] w-[350px] h-[710px] bg-base-100 shadow-xl mx-auto">
          <div className="min-h-[170px] bg-[url('/src/assets/images/Pricing/LogoDesign/shape-2.png')] bg-center bg-no-repeat bg-cover text-center pt-[40px] pb-[55px]">
            <h3 className="uppercase text-white text-[18px] leading-[26px] font-medium mb-[20px]">
              STANDARD PLAN
            </h3>
            <p className="text-white text-[50px] leading-[26px] font-bold">
              $250
            </p>
          </div>
          <div className="px-[45px] pt-[30px] pb-[20px]">
            <h2
              className="text-black text-[20px] leading-[36px] font-semibold 
            pb-[20px]"
            >
              Logo + Stationery
            </h2>
            <div className="flex flex-col">
              <ul className="text-[#8E8D8E] text-[18px] font-normal leading-[36px] text-left">
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  3 Concepts
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Source File
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  High Resolution
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Logo Transparency
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Unlimited Revisions
                </li>
                <li className="mx-[15px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  5 Days Delivery
                </li>
              </ul>
              <div className="pt-[45px] pb-[30px]">
                <div
                  className="w-[183px] px-[45px] py-[15px] bg-transparent mx-auto
                 border border-[#E0E0E0] rounded-[50px] text-black text-[17px] font-normal leading-[30px] cursor-pointer hover:bg-secondary hover:text-white"
                >
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-br-[5px] rounded-bl-[5px] w-[350px] h-[710px] bg-base-100 shadow-xl mx-auto">
          <div className="min-h-[170px] bg-[url('/src/assets/images/Pricing/LogoDesign/shape-3.png')] bg-center bg-no-repeat bg-cover text-center pt-[40px] pb-[55px]">
            <h3 className="uppercase text-white text-[18px] leading-[26px] font-medium mb-[20px]">
              GOLDEN PLAN
            </h3>
            <p className="text-white text-[50px] leading-[26px] font-bold">
              $350
            </p>
          </div>
          <div className="px-[45px] pt-[30px] pb-[20px]">
            <h2
              className="text-black text-[20px] leading-[36px] font-semibold 
            pb-[20px]"
            >
              Logo + Brand Book
            </h2>
            <div className="flex flex-col">
              <ul className="text-[#8E8D8E] text-[18px] font-normal leading-[36px] text-left">
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  3 Concepts
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Source File
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  High Resolution
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Logo Transparency
                </li>
                <li className="mx-[15px] mb-[10px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  Unlimited Revisions
                </li>
                <li className="mx-[15px]">
                  <span>
                    <FontAwesomeIcon
                      className="text-[24px] font-black text-green-600 mr-[10px]"
                      icon={faCheck}
                    />
                  </span>
                  7 Days Delivery
                </li>
              </ul>
              <div className="pt-[45px] pb-[30px]">
                <div
                  className="w-[183px] px-[45px] py-[15px] bg-transparent mx-auto
                 border border-[#E0E0E0] rounded-[50px] text-black text-[17px] font-normal leading-[30px] cursor-pointer hover:bg-secondary hover:text-white"
                >
                  Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoDesign;
