import React from "react";

function Categories() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24">
    
      
      
      {/* Image Section */}
      <div className="mt-[20] flex w-[1900px] ml-[50px] ">
        <img
          src="/image/Top-Categotires.png"
          alt="hot-Categories"
          className="w-[50%] max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] "
        />
      </div>
      <div className="w-[1500px] ml-[px]50 text-9xl mt-[200px]">
      <div className="w-full h-auto mt-24 flex justify-center px-4 md:px-12 lg:px-24">
  <img
    src="/image/hot-category.svg"
    alt="Hot Category"
    className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1320px] h-auto"
  />
</div>
</div>

    </div>
  );
}

export default Categories;

