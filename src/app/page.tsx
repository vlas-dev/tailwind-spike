'use client'
import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
      <div>
        <Navbar />
        <Features />
        <Footer />
      </div>
  );
};

export default Home;
