import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import HomeCarousel from "../components/HomeCarousel";
import NasilCalisiyor from "../components/NasilCalisiyor";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <NasilCalisiyor />
      <HomeCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
