import React from "react";
import Header from "../src/app/components/Header";
import HeroSection from "../src/app/components/HeroSection";
import Feature from "../src/app/components/Feature";
import Categories from "../src/app/components/Categories";
import Products from "../src/app/components/Products";
import Footer from "../src/app/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <main className="bg-gray-100">
        <HeroSection />
      </main>

      {/* Features */}
      <Feature />

      {/* Categories */}
      <Categories />

      {/* Products */}
      <Products />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
