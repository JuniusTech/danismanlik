import React from "react";

import Header from "../../components/Header";

import HomeCarousel from "../../components/HomeCarousel";
import HowItWorks from "../HowItWorks";


const UserHomePageBody = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <HomeCarousel />
    </div>
  );
};

export default UserHomePageBody;
