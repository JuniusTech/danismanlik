import React from "react";

import Header from "../../components/Header";

import HomeCarousel from "../../components/HomeCarousel";
import NasilCalisiyor from "../../components/NasilCalisiyor";


const UserHomePageBody = () => {
  return (
    <div>
      <Header />
      <NasilCalisiyor />
      <HomeCarousel />
    </div>
  );
};

export default UserHomePageBody;
