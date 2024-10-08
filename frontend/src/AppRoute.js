import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

import EmailVerify from "./pages/EmailVerify";
import UserForgetPass from "./pages/UserForgetPass";
import UserResetPass from "./pages/UserResetPass";
import LawyerForgetPass from "./pages/LawyerForgetPass";
import LawyerResetPass from "./pages/LawyerResetPass";
import LawyerDetail from "./pages/LawyerDetail";
import Payment from "./components/payment/PaymentMain";
import UserDashboard from "./pages/UserDashboard";
import HesapDoğrulamaEkranı from "./components/şifre yenileme/HesapDoğrulamaEkrani.jsx";
import LawyerDashboard from "./pages/LawyerDashboard";
import LawyerHomePage from "./pages/LawyerHomePage";
import FaqMain from "./components/frequently asking questions/FaqMain.jsx";
import SifreSıfırlama from "./pages/ResetPassword";
import YeniSifreBelirle from "./components/şifre yenileme/YeniSifreBelirle";
import UyeliginizAktifEdildi from "./pages/UyeliginizAktifEdildi";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/lawyer/:lawyerid" element={<LawyerDetail />} />
      <Route path="/verify/:id/:token" element={<EmailVerify />} />
      <Route path="/forget-password" element={<UserForgetPass />} />
      <Route path="/sifre-sıfırlama" element={<SifreSıfırlama />} />
      <Route path="/hesap-doğrulama" element={<HesapDoğrulamaEkranı />} />
      <Route path="/reset-password/:id/:token" element={<UserResetPass />} />
      <Route path="/forget-password-law" element={<LawyerForgetPass />} />
      <Route path="/yeni-sifre-belirle" element={<YeniSifreBelirle />} />
      <Route path="/userDashboard" element={<UserDashboard />} />
      <Route path="/lawyerDashboard" element={<LawyerDashboard />} />
      <Route path="/lawyerhomepage" element={<LawyerHomePage />} />
      <Route path="/frequentlyaskingquestion" element={<FaqMain />} />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/üyeliğiniz-aktif-edildi"
        element={<UyeliginizAktifEdildi />}
      />


      <Route
        path="/reset-password-law/:id/:token"
        element={<LawyerResetPass />}
      />
    </Routes>
  );
};

export default AppRoute;
