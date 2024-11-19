import React from "react";
import { Link } from "react-router-dom";

const AccountPage = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="bg-slate-100 py-12">
      <div className="max-w-6xl my-0 mx-auto">
        <div className="pb-3">
          <h2 className="text-3xl font-medium">Tài khoản của bạn</h2>
        </div>
        <div className="flex flex-col items-start md:flex-row">
          <div className="w-full md:w-2/3 mr-5 bg-white py-7 px-4 rounded-lg shadow-md">
            <p className="text-2xl font-medium">
              Bạn chưa đặt mua sản phẩm nào
            </p>
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
                <span className="w-[220px] font-medium text-[black]">: </span>
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
