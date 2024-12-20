  import React from 'react'
import { GiSofa } from "react-icons/gi";



const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] w-full">
      {/* Main Footer Section */}
      <div className="flex flex-wrap justify-center items-center gap-8 px-4 md:px-12 lg:px-24 py-8">
        {/* First Image */}
        <img
          className="w-full max-w-[200px] md:max-w-[300px] mt-4"
          src="/image/Chairy.svg"
          alt="Footer Logo"
        />

        {/* Second Image */}
        <img
          className="w-[100px] md:w-[105px] h-auto mt-4"
          src="/image/footer-text.svg"
          alt="Footer Text"
        />

        {/* Third Image */}
        <img
          className="w-[120px] md:w-[156px] h-auto mt-4"
          src="/image/Frametext.svg"
          alt="Frame Text"
        />

        {/* Newsletter Section */}
        <img
          className="w-full max-w-[250px] md:max-w-[424px] h-auto border border-gray-200 rounded-md mt-4"
          src="/image/Newsletter.svg"
          alt="Newsletter"
        />
      </div>

      {/* Last Footer Section */}
      <div className="w-full mt-8">
        <img
          src="/image/Frame 69.svg"
          alt="Footer Bottom"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Footer;

    
              
        {/* <div className="flex items-center gap-2 ml-[500px]">
          <GiSofa className=" flex text-4xl md:text-6xl text-[#56d3be]" />
          <div className=" text-lg md:text-xl">Comforty</div>
          <div className=' flex w-[350px] h-[72px] font-sans font-normal text-xs mt-[100px]'>
            <img src="/image/para.svg" alt="Paragraph" />  */}
{/*           
          <img className='mt-[50px] text-3xl' src="/image/Social-Links.svg" alt="Social links" /> */} 
           

{/* </div>
</div> */}


       
       
 



