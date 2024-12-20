import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
    <div className="w-full bg-[#F0F2F3] py-16 ml-[300px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-12">
        {/* Left Section */}
        <div className="flex flex-col lg:w-1/2 space-y-6 lg:space-y-10 text-center lg:text-left">
          <div className="text-lg lg:text-xl font-serif text-[#272343]">
            WELCOME TO CHAIRY
          </div>
          <h1 className="text-3xl lg:text-6xl font-bold text-[#272343] leading-tight">
            Best Furniture Collection for your interior.
          </h1>
          <button className="flex items-center justify-center gap-2 bg-[#029FAE] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#027a87] transition">
            Shop Now
            <FaArrowRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            className="w-full h-auto lg:h-[600px] object-cover"
            src="/image/BG.png"
            alt="chair"
          />
        </div>
    

      {/* Logos Section */}
      <div className="flex justify-center flex-wrap items-center mt-16 gap-8">
        <img
          className="w-20 lg:w-40 h-auto"
          src="/image/comlogo.svg"
          alt="logos"
        />
       
      </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
