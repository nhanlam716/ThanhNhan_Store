import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Carrousel from "./components/carrousel/Carrousel";
import Title from "./components/title/Title";

import Banner from "./components/banner/Banner";
import Card from "./components/card/Card";
import ProductPage from "./pages/homePage/ProductPage";
import Button from "./components/button/Button";

const products = [
  {
    image:
      "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-1_a9b6c46a91374f6da090f8058878530b_large.jpg",
    name: "Nike Zoom Mercurial Superfly 10",
    originalPrice: "2,929,000đ",
    discountedPrice: "2,250,000đ",
    discount: "-23%",
    badge: "Mới ra mắt",
    installment: "Trả sau 1.125.000đ x2 kỳ",
  },
  {
    image:
      "https://product.hstatic.net/200000278317/product/ong-nike-zoom-mercurial-superfly-9-academy-km-tf-fq8333-800-vang-cam-1_18a007fffefe443ba0adcb73ffeba855_large.jpg",
    name: "Adidas F50 League TF",
    originalPrice: "2,400,000đ",
    discountedPrice: "1,950,000đ",
    discount: "-19%",
    badge: "Mới ra mắt",
    installment: "Trả sau 975.000đ x2 kỳ",
  },
  {
    image:
      "https://product.hstatic.net/200000278317/product/giay-da-banh-mizuno-alpha-pro-p1gd236409-xam-trang-1_2ed2d605078541c2bcd7c34d6edc398a_large.jpg",
    name: "Adidas F50 League TF",
    originalPrice: "2,400,000đ",
    discountedPrice: "1,950,000đ",
    discount: "-19%",
    badge: "Mới ra mắt",
    installment: "Trả sau 975.000đ x2 kỳ",
  },
  {
    image:
      "https://product.hstatic.net/200000278317/product/g-futsal-giay-da-bong-puma-future-7-pro-cage-tt-107923-01-xanh-duong-1_3119b2ae2e594446a2a738ad0c3b6b43_large.jpg",
    name: "Adidas F50 League TF",
    originalPrice: "2,400,000đ",
    discountedPrice: "1,950,000đ",
    discount: "-19%",
    badge: "Mới ra mắt",
    installment: "Trả sau 975.000đ x2 kỳ",
  },
  // Add more products
];

function App() {
  return (
    <>
      <Header />
      <Carrousel />
      <Title title="mới ra mắt" />
      <Banner image="https://theme.hstatic.net/200000278317/1000929405/14/mustbuy_img_master.jpg?v=1859" />
      <div className="mb-36"></div>
      <div className="max-w-6xl my-0 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="mb-36"></div>
      <ProductPage />
      <Button />
    </>
  );
}

export default App;
