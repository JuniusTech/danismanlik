import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import HomeCarousel from "../components/HomeCarousel";
import NasilCalisiyor from "../components/NasilCalisiyor";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <NasilCalisiyor />
      <HomeCarousel />
    </div>
  );
};

export default HomePage;
