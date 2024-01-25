'use client'
import React from "react";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const Home: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Features />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
