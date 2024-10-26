import React from "react";
import Carrousel from "../../components/carrousel/Carrousel";
import Title from "../../components/title/Title";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/card/Cards";
import {
  BANNER,
  BANNER_ROUNDED,
  IMAGE_BANNER,
  VIDEO_BANNER,
} from "../../constants/imageBanner";
import BannerRounded from "../../components/banner/BannerRounded";
import Button from "../../components/button/Button";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import CardNews from "../../components/card/CardNews";
import InputTitle from "../../components/inputForm/InputTitle";
import Input from "../../components/inputForm/Input";
import InputParam from "../../components/inputForm/InputParam";

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
];
const news = [
  {
    image:
      "https://file.hstatic.net/200000278317/article/edator-24-belligold-phien-ban-signature-dau-tien-cua-jude-bellingham-1_6c5ab8bb2ccc423091654dc531de9b21_large.jpg",
    description:
      "Khám phá adidas Predator 24 “BelliGold” - phiên bản signature đầu tiên của Jude Bellingham!",
    param:
      "Tiếp nối bộ sưu tập trang phục signature đầu tiên, vừa qua, adidas đã dành...",
  },
  {
    image:
      "https://file.hstatic.net/200000278317/article/top-5-giay-da-bong-co-nhan-tao-lam-tu-soi-det-ngon-nhat-hien-nay-1_7167d7acc31343eea7aadaa786962c6b_large.jpg",
    description:
      "Top 5 giày đá bóng cỏ nhân tạo làm từ sợi dệt ngon nhất hiện nay",
    param:
      "Trên thị trường giày đá bóng cỏ nhân tạo hiện nay, những đôi giày với...",
  },
  {
    image:
      "https://file.hstatic.net/200000278317/article/50-messi-triunfo-estelar-kim-chi-nam-cho-nhung-nha-vo-dich-tuong-lai-1_441baf191c99484c9e6167defe14caaf_large.jpg",
    description:
      "Khám phá adidas F50 Messi “Triunfo Estelar” - Kim chỉ nam cho những nhà vô địch tương lai!",
    param:
      "Trước ngày “Messi Day” (10.10), adidas đã chính thức trình làng mẫu giày đá bóng...",
  },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-slate-100">
        <div className="max-w-2xl mx-auto p-9">
          <div className="p-10 bg-white">
            <InputTitle title="Đăng nhập" />
            <form action="">
              <Input
                label="email:"
                types="text"
                placeholder="Nhập email của bạn"
              />
              <Input
                label="mật khẩu:"
                types="password"
                placeholder="Nhập mật khẩu"
              />
              <div className="flex mt-[-34px]">
                <Button title="Đăng nhập" />
              </div>
              <InputParam
                description="Bạn chưa có tài khoản?"
                link="Đăng ký ngay"
              />
              <InputParam link="Quên mật khẩu ?" />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="max-w-4xl mx-auto p-9">
          <div className="p-14 bg-white">
            <InputTitle title="Đăng ký" />
            <form action="">
              <div className="flex gap-10">
                <div className="flex-1">
                  <Input label="Họ" types="text" />
                </div>
                <div className="flex-1">
                  <Input label="Tên" types="text" />
                </div>
              </div>
              <Input label="email:" types="text" />
              <Input label="mật khẩu:" types="password" />
              <Input label="nhập lại mật khẩu:" types="password" />
              <div className="flex mt-[-34px]">
                <Button title="Đăng ký" />
              </div>
              <InputParam description="Bạn đã có tài khoản?" link="Đăng nhập" />
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="max-w-2xl mx-auto p-9">
          <div className="p-14 bg-white">
            <InputTitle title="Quên mật khẩu" />
            <form action="">
              <Input
                label="email:"
                types="text"
                placeholder="Nhập email của bạn"
              />
              <div className="flex mt-[-34px]">
                <Button title="Gửi" />
              </div>
              <InputParam description="Trở lại" link="Đăng nhập" />
            </form>
          </div>
        </div>
      </div>
      <Carrousel />
      <Title title="Sản phẩm mới ra mắt" />
      <Banner image="https://theme.hstatic.net/200000278317/1000929405/14/mustbuy_img_master.jpg?v=1859" />
      <div className="max-w-6xl mx-auto mt-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Cards key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="bg-slate-100 pb-10">
        <div className="max-w-6xl my-0 mx-auto mt-6 ">
          <Title title="Bạn đang quan tâm" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGE_BANNER.map((item, index) => (
              <Banner key={index} image={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="pb-10">
        <div className="max-w-6xl my-0 mx-auto">
          <Title title="Tìm theo thương hiệu" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BANNER.map((item, index) => (
              <Banner
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Banner image="https://theme.hstatic.net/200000278317/1000929405/14/home_banner_img.jpg?v=1886" />
      <div className="m-10">
        <div className="max-w-4xl my-0 mx-auto">
          <Title title="trải nghiệm mua sắm tại cửa hàng" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {BANNER_ROUNDED.map((item, index) => (
              <BannerRounded
                key={index}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-10 mt-28">
        <div className="max-w-6xl my-0 mx-auto mt-6 ">
          <ul className="flex justify-center gap-2 pb-2 mb-8 uppercase">
            <li>
              <a href="./HomePage.tsx" className="p-4 text-4xl">
                Giày sân cỏ nhân tạo
              </a>
            </li>
            <li>
              <a href="./HomePage.tsx" className="p-4 text-4xl">
                Giày sân futsal
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Cards key={index} {...product} />
            ))}
          </div>
        </div>
        <Button title="Xem thêm" />
      </div>
      <div>
        <Title title="sản phẩm hot Sale" />
        <div className="max-w-6xl mx-auto mt-6 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Cards key={index} {...product} />
            ))}
          </div>
        </div>
        <Button title="Xem thêm" />
      </div>
      <div>
        <Title title="khách hàng của thf" />
        <div className="max-w-6xl mx-auto mt-6 mb-12">
          <img
            src="https://theme.hstatic.net/200000278317/1000929405/14/index_blog_review_image.png?v=1886"
            alt="khách hàng"
          />
        </div>
      </div>
      <div className="bg-slate-100 pb-10">
        <div className="max-w-6xl my-0 mx-auto ">
          <Title title="tin tức giày" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <CardNews key={index} {...item} />
            ))}
          </div>
          <a
            href="./HomePage.tsx"
            className="flex justify-center items-center pt-8 my-8 text-base font-bold uppercase"
          >
            Xem tất cả
            <svg
              className="ml-1"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4L16 12L8 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <div className="max-w-6xl my-0 mx-auto ">
          <Title title="thanh hùng Futsal 's channel" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_BANNER.map((item, index) => (
              <iframe
                key={index}
                src={item}
                title="Youtube Page"
                height="200"
                className="border-none w-full overflow-hidden object-cover"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
