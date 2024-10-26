import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../layouts/homePage/HomePage";
import ProductPage from "../pages/productPage/ProductPage";
import LoginPage from "../pages/adminPage/LoginPage";
import Password from "../pages/adminPage/Password";
import RegisterPage from "../pages/adminPage/RegisterPage";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password" element={<Password />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
