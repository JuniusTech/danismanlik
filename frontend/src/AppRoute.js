import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default AppRoute;
