import React from "react";
import ButtonQuantity from "../../components/button/ButtonQuantity";
import { Link } from "react-router-dom";
type CartItem = {
  id: number;
  image: string;
  name: string;
  code: string;
  group: string;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: 1,
    image:
      "https://product.hstatic.net/200000278317/product/balo-thanh-hung-futsal-mau-ngau-nhien-1_ab21fbd1f0e5420a8ed84a1fe9cac9a6_compact.jpg",
    name: "BALO THANH HÙNG FUTSAL - MÀU NGẪU NHIÊN",
    code: "Balongaunhien",
    group: "Balo",
    price: 90000,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://product.hstatic.net/200000278317/product/balo-thanh-hung-futsal-mau-ngau-nhien-1_ab21fbd1f0e5420a8ed84a1fe9cac9a6_compact.jpg",
    name: "BALO THANH HÙNG FUTSAL - MÀU NGẪU NHIÊN",
    code: "Balongaunhien",
    group: "Balo",
    price: 90000,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://product.hstatic.net/200000278317/product/balo-thanh-hung-futsal-mau-ngau-nhien-1_ab21fbd1f0e5420a8ed84a1fe9cac9a6_compact.jpg",
    name: "BALO THANH HÙNG FUTSAL - MÀU NGẪU NHIÊN",
    code: "Balongaunhien",
    group: "Balo",
    price: 90000,
    quantity: 1,
  },
  {
    id: 4,
    image:
      "https://product.hstatic.net/200000278317/product/da-bong-nike-zoom-mercurial-vapor-15-pro-16-tf-fq8687-700-xanh-chuoi-1_8bbe68fb9d23471c8a8feb567aaa6555_compact.jpg",
    name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF - FQ8687-700 - XANH CHUỐI",
    code: "FQ8687-700-38-5",
    group: "38.5",
    price: 2750000,
    quantity: 1,
  },
];
const ShoppingCard = () => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto p-9">
          <div className="flex flex-col items-start md:flex-row p-4 ">
            <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b flex">
                    <th className="text-left p-2 flex-[8%]"></th>
                    <th className="text-left p-2 flex-[42%]">Sản phẩm</th>
                    <th className="text-right p-2 flex-[12%]">Đơn giá</th>
                    <th className="text-center p-2 flex-[24%]">Số lượng</th>
                    <th className="text-right p-2 flex-[14%]">Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b flex items-center py-6"
                    >
                      <td className="flex-[8%] text-center"></td>
                      <td className="flex-[42%] flex items-center p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 mr-4 rounded"
                        />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-gray-500 text-sm">
                            Mã SP: {item.code}
                          </p>
                          <p className="text-gray-500 text-sm">
                            Nhóm: {item.group}
                          </p>
                        </div>
                      </td>
                      <td className="flex-[12%] text-right p-2 font-semibold">
                        {item.price.toLocaleString()}₫
                      </td>
                      <td className="flex-[26%] text-center p-2">
                        <ButtonQuantity decrease="-" increase="+" />
                      </td>
                      <td className="flex-[12%] text-right p-2 font-semibold">
                        {(item.price * item.quantity).toLocaleString()}₫
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 pl-14">
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
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 mt-4 md:mt-0 md:ml-4 rounded-lg shadow-md">
              <div className="flex justify-between mb-6">
                <span className="text-gray-700 font-semibold">Thành tiền</span>
                <span className="text-red-500 font-semibold text-xl">
                  {totalAmount.toLocaleString()}₫
                </span>
              </div>
              <div className="mt-4">
                <button className=" bg-black text-white px-6 py-3 rounded w-full text-lg">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
