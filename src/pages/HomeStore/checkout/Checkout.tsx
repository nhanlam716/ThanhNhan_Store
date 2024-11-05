import React from "react";
import { Link } from "react-router-dom";
import InputParam from "../../../components/inputForm/InputParam";
import InputCheckOut from "../../../components/inputForm/InputCheckOut";
import { Button, Label, Radio } from "flowbite-react";

const Checkout = () => {
  return (
    <div>
      <div className="max-w-6xl my-0 mx-auto">
        <div className="flex">
          <div className="flex-1 pt-[4em] pr-[4em]">
            <div>
              <h2 className="text-4xl font-medium tracking-tight">
                Giày bóng đá chính hãng
              </h2>
              <div className="flex gap-6 mt-3 text-xs relative">
                <p>
                  <Link to="/" className="text-[#338dbc]">
                    Giỏ hàng
                  </Link>
                </p>
                <p className="before after">Thông tin giao hàng</p>
                <p>Phương thức thanh toán</p>
              </div>
              <div className="mt-3">
                <h3 className="text-lg opacity-80">Thông tin giao hàng</h3>
              </div>
              <div className="opacity-80">
                <InputParam
                  description="Bạn đã có tài khoản?"
                  link="Đăng nhập"
                  href="./login"
                />
              </div>
              <form action="" className="mt-4">
                <InputCheckOut placeholder="Họ và tên" type="text" />
                <div className="flex gap-3 mt-3">
                  <div className="flex-[70%]">
                    <InputCheckOut placeholder="Email" type="email" />
                  </div>
                  <div className="flex-[30%]">
                    <InputCheckOut placeholder="Số điện thoại" type="text" />
                  </div>
                </div>
              </form>
              <div className="border-solid border border-[#ccc] rounded-lg mt-6">
                <div className="flex items-center gap-2 border-solid border-b border-[#ccc] p-4 mb-4">
                  <Radio
                    id="delivery"
                    name="delivery"
                    value="delivery"
                    defaultChecked
                  />
                  <Label htmlFor="delivery">Giao tận nơi</Label>
                </div>
                <form action="" className="mb-4 p-4">
                  <div className="flex gap-3 mb-3">
                    <select
                      name=""
                      id=""
                      className="flex-1 border-solid border rounded-md border-[#ccc]"
                    >
                      <option value=""></option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="flex-1 border-solid border rounded-md border-[#ccc]"
                    >
                      <option value=""></option>
                    </select>
                    <select
                      name=""
                      id=""
                      className="flex-1 border-solid border rounded-md border-[#ccc]"
                    >
                      <option value=""></option>
                    </select>
                  </div>
                  <InputCheckOut
                    placeholder="Địa chỉ: Thôn, xóm, đường, số nhà"
                    type="text"
                  />
                </form>
                <div className="flex items-center gap-2 border-solid border-t border-[#ccc] p-4">
                  <Radio
                    id="delivery"
                    name="delivery"
                    value="delivery"
                    defaultChecked
                  />
                  <Label htmlFor="delivery">Nhận tại shop</Label>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <Link to="/shopping" className="text-[#338dbc]">
                  Giỏ hàng
                </Link>
                <Button color="blue">
                  Tiếp tục đến phương thức thanh toán
                </Button>
              </div>
              <div className="pt-8 pb-5">
                <Link
                  to="/"
                  className="flex items-center uppercase text-lg font-semibold opacity-80"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 4L8 12L16 20"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  tiếp tục mua sắm
                </Link>
              </div>
              <div className="mt-8 border-t border-solid border-[#ccc]">
                <p className="p-3 text-center text-[#4B5563]">
                  Powered by Thành Nhân
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 pt-[4em] pl-[4em] border-l-2 border-solid border-[#ccc]">
            <div>
              <div className="flex mb-4">
                <img
                  src="https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-1_a9b6c46a91374f6da090f8058878530b_small.jpg"
                  alt="Product"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <p className="font-medium">
                    ADIDAS F50 LEAGUE TF - IF1335 - ĐỎ/CAM
                  </p>
                  <p className="text-gray-500">39 1/3</p>
                </div>
                <div className="ml-6">
                  <p className="font-semibold">3,900,000₫</p>
                </div>
              </div>
              <div className="border-t py-6">
                <div className="flex gap-4">
                  <div className="flex-[80%]">
                    <InputCheckOut placeholder="Mã giảm giá" type="text" />
                  </div>
                  <div className="flex-[20%]">
                    <Button color="blue">Sử dụng</Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 px-0 py-7 border-t border-b border-solid border-[#ccc]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tạm tính</span>
                  <span>3,900,000₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phí vận chuyển</span>
                  <span>-</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-semibold mt-6">
                <span>Tổng cộng</span>
                <span>3,900,000₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
