import React,{ useContext} from "react";
import Navbar from "../components/Navbar";
import UserHomePageBody from "../components/HomePageBodies/UserHomePageBody";
import LawyerHomePageBody from "../components/HomePageBodies/LawyerHomePageBody";
import Footer from "../components/Footer";
import { Store } from "../Store";
const HomePage = () => {
  
  const { state, setIsLawyer } = useContext(Store);
  const { is_lawyer } = state;
  return (
    <div>
      <Navbar />
      {is_lawyer ? <LawyerHomePageBody /> : <UserHomePageBody />}
      <Footer />
    </div>
  );
};

export default HomePage;
