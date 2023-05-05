import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HeaderCards from "../components/HeaderCards";
import HomeCarousel from "../components/HomeCarousel";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderCards />
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
