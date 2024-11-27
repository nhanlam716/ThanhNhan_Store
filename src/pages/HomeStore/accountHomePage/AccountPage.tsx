import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../../api/axiosClient";
import { IProduct } from "../../../types/types";
import { formatPrice } from "../../../utils/helper";

interface OrderResponse {
  fullName: string;
  email: string;
  phoneNumber: number;
  address: string;
  paymentMethod: string;
  deliveryOption: string;
  status: string;
  orderDate: string;
  products: IProduct[];
}

const AccountPage = () => {
  const [orders, setOrders] = useState<OrderResponse[] | null>();
  const [expanded, setExpanded] = useState<number | null>(null);
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response: any = await axiosClient.get(
          `http://localhost:3000/CheckoutProductCard?userId=${user.id}`
        );
        setOrders(response);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user?.id]);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-6xl my-0 mx-auto">
        <div className="pb-3">
          <h2 className="text-3xl font-medium">Tài khoản của bạn</h2>
        </div>
        <div className="flex flex-col items-start md:flex-row">
          <div className="w-full md:w-2/3 mr-5 bg-white py-7 px-4 rounded-lg shadow-md">
            {orders && orders.length > 0 ? (
              <div>
                <h3 className="text-2xl font-medium mb-4">Sản phẩm đã đặt</h3>
                <ul className="divide-y divide-gray-200">
                  {orders?.map((el, index) => (
                    <div key={index}>
                      {el.products.map((item, index) => (
                        <li key={index} className="py-4 ">
                          <div className="flex items-center gap-7">
                            <div className="flex items-center gap-4">
                              <img
                                src={item?.image}
                                alt={item?.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div>
                                <p className="text-lg font-medium text-gray-800">
                                  {item?.name}
                                </p>
                                <p className="text-gray-500 text-sm">
                                  Kích thước: {item?.size} - Số lượng:{" "}
                                  {item?.quantity}
                                </p>
                                <p className="text-red-500 font-medium">
                                  Giá: {formatPrice(item?.discountedPrice)}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleExpand(index)}
                              className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className={`w-5 h-5 transform transition-transform ${
                                  expanded === index ? "rotate-180" : ""
                                }`}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          </div>
                          {expanded === index && (
                            <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-inner">
                              <p className="text-sm text-gray-700">
                                <strong>Họ tên:</strong> {el.fullName}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Email:</strong> {el.email}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Điện thoại:</strong> {el.phoneNumber}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Địa chỉ:</strong> {el.address}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Phương thức thanh toán:</strong>{" "}
                                {el.paymentMethod}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Tình trạng:</strong> {el.status}
                              </p>
                              <p className="text-sm text-gray-700">
                                <strong>Ngày đặt:</strong> {el.orderDate}
                              </p>
                            </div>
                          )}
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-2xl font-medium">
                Bạn chưa đặt mua sản phẩm nào
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md">
            <div className="p-4 border-b-2 border-solid border-[#e9e8e8]">
              <p className="text-base font-medium">Thông tin tài khoản</p>
            </div>
            <div className="p-4 mt-2">
              <div className="flex justify-between flex-wrap text-xl mb-4">
                <span className="w-[101px] text-[#868282]">Họ tên</span>
                <span className="w-[220px] font-medium text-[black]">
                  : {user.firstName} {user.lastName}
                </span>
              </div>
              <div className="flex justify-between flex-wrap text-xl mb-4">
                <span className="w-[101px] text-[#868282]">Điện thoại</span>
                <span className="w-[220px] font-medium text-[black]">
                  : {user.phone || "Chưa cập nhật"}
                </span>
              </div>
              <div className="flex justify-between flex-wrap text-xl mb-4">
                <span className="w-[101px] text-[#868282]">Email</span>
                <span className="w-[220px] font-medium text-[black]">
                  : {user.email}
                </span>
              </div>
            </div>
            <div className="p-4 mb-5">
              <Link
                to="/information"
                className="uppercase text-[14px] font-medium"
              >
                xem địa chỉ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
