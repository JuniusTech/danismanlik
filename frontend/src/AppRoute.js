import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LoginForm from "./pages/LoginForm";
import { AvukatLoginPage } from "./pages/AvukatLoginPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/AvukatLoginPage" element={<AvukatLoginPage />} />
    </Routes>
  );
};

export default AppRoute;
