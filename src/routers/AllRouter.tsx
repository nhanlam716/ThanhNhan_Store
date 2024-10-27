import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../layouts/homePage/HomePage";
import ProductPage from "../pages/productPage/ProductPage";
import LoginPage from "../pages/adminHomePage/LoginPage";
import Password from "../pages/adminHomePage/Password";
import RegisterPage from "../pages/adminHomePage/RegisterPage";
import ShoppingCard from "../pages/shoppingCardPage/ShoppingCard";
import HeaderHomePage from "../pages/headerHomepage/HeaderHomePage";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password" element={<Password />} />
          <Route path="/shopping" element={<ShoppingCard />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/headerHomePage" element={<HeaderHomePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
