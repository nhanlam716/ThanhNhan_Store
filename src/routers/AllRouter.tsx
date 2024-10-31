import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomeStore/homePage/HomePage";
import LoginPage from "../pages/HomeStore/accountHomePage/LoginPage";
import RegisterPage from "../pages/HomeStore/accountHomePage/RegisterPage";
import Password from "../pages/HomeStore/accountHomePage/Password";
import ShoppingCard from "../pages/HomeStore/shoppingCardPage/ShoppingCard";
import ProductPage from "../pages/HomeStore/productPage/ProductPage";
import HeaderHomePage from "../pages/HomeStore/headerHomepage/HeaderHomePage";
import LoginPageAdmin from "../pages/adminStore/loginPage/LoginPageAdmin";
import LoginAdminStore from "../pages/adminStore/loginPage/login/LoginAdminStore";
import PasswordAdminStore from "../pages/adminStore/loginPage/login/PasswordAdminStore";
import BannerPage from "../pages/HomeStore/productPage/BannerPage";

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
          <Route path="/bannerPage/:id" element={<BannerPage />} />
          <Route path="/headerHomePage" element={<HeaderHomePage />} />
        </Route>
        <Route element={<LoginPageAdmin />}>
          <Route path="/loginAdminStore" element={<LoginAdminStore />} />
          <Route path="/passwordAdminStore" element={<PasswordAdminStore />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRouter;
