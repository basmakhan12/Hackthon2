import React from "react";
import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
 
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Header */}
      <div className="w-full h-[40px] bg-[#272343] text-white flex justify-between items-center px-4 md:px-12 lg:px-24 text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-2">
          <TiTick className="text-lg" aria-label="Free Shipping Icon" />
          <span>Free Shipping On All Orders Over $50</span>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-4 opacity-70">
          <div className="flex items-center gap-1 hover:opacity-100 cursor-pointer">
            Eng <IoIosArrowDown className="text-lg" />
          </div>
          <div className="hover:opacity-100 cursor-pointer">Faqs</div>
          <div className="flex items-center gap-1 hover:opacity-100 cursor-pointer">
            <AiOutlineExclamationCircle className="text-lg" />
            Need Help
          </div>
        </div>
      </div>

      {/* Middle Header */}
      <div className="container mx-auto py-4 flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Comforty Furniture Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-[#272343]">Comforty</span>
        </div>
        {/* Cart Section */}
        <div className="relative flex items-center gap-2 bg-[#f0f2f3] p-2 rounded-lg">
          <FiShoppingCart className="text-xl text-[#272343]" />
          <span className="text-sm">Cart</span>
          <div className="absolute -top-2 -right-2 bg-[#56d3be] text-white text-xs px-2 py-1 rounded-full">
            2
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="w-full bg-white border-t">
        <div className="container mx-auto py-4 flex justify-between items-center px-4">
          {/* Navigation Links */}
          <div className="flex gap-6 text-sm md:text-base">
            <Link
                className="hover:text-[#56d3be] 
                  text-[#56d3be] font-bold" href="/"
             
               
              >
                Home
            
            </Link>
            <Link className="hover:text-[#56d3be]
                 text-[#56d3be] font-bold" href="/Shop">  Shop
             
            </Link>
            <Link className="hover:text-[#56d3be]
                 text-[#56d3be] font-bold" href="/Product"
              >
                Product
            </Link>
            <Link className="hover:text-[#56d3be]
                   text-[#56d3be] font-bold" href="/Pages"
              >
                Pages
             
            </Link>
            <Link   className="hover:text-[#56d3be] 
                text-[#56d3be] font-bold" href="/AboutUs" 
              
               
                
              >
                AboutUs
              
            </Link>
          </div>
          {/* Contact Info */}
          <address className="not-italic text-sm">
            Contact: <a href="tel:8085550111" className="font-bold">(808) 555-0111</a>
          </address>
        </div>
      </nav>
    </header>
  );
};

export default Header;
