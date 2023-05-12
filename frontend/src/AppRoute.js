import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LawyerHomePage from "./pages/LawyerHomePage";
import EmailVerify from "./pages/EmailVerify";
import UserForgetPass from "./pages/UserForgetPass";
import UserResetPass from "./pages/UserResetPass";
import LawyerForgetPass from "./pages/LawyerForgetPass";
import LawyerResetPass from "./pages/LawyerResetPass";
import LawyerDetail from "./pages/LawyerDetail";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/lawyer" element={<LawyerHomePage />} />
      <Route path="/lawyerdetail" element={<LawyerDetail />} />
      <Route path="/verify/:id/:token" element={<EmailVerify />} />
      <Route path="/forget-password" element={<UserForgetPass />} />
      <Route path="/reset-password/:id/:token" element={<UserResetPass />} />
      <Route path="/forget-password-law" element={<LawyerForgetPass />} />

      <Route
        path="/reset-password-law/:id/:token"
        element={<LawyerResetPass />}
      />
    </Routes>
  );
};

export default AppRoute;
