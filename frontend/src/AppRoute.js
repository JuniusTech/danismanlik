import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LawyerHomePage from "./pages/LawyerHomePage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/search" element={<SearchPage />} />
      <Route path="/lawyer" element={<LawyerHomePage />} />
    </Routes>
  );
};

export default AppRoute;
