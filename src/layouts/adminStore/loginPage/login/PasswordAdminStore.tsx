import React from "react";
import Input from "../../../../components/inputForm/Input";
import Button from "../../../../components/button/Button";
import InputTitle from "../../../../components/inputForm/InputTitle";
import { Link } from "react-router-dom";

const PasswordAdminStore = () => {
  return (
    <>
      <div className="p-6 border-b-[1px] border-[#ccc]">
        <img
          src="https://theme.hstatic.net/200000278317/1000929405/14/logo_medium.png?v=1891"
          alt=""
        />
      </div>
      <div className="py-[40px] lg:py-[80px] px-[24px] lg:px-[160px] w-full flex justify-center text-left">
        <div className="w-full lg:w-auto">
          <InputTitle title={"Quên mật khẩu"} />
          <form className="w-full lg:w-[352px] flex flex-col ">
            <div className="z-10 mt-[-22px]">
              <Input
                label="email:"
                types="text"
                placeholder="Nhập email của bạn"
              />
            </div>

            <p className="text-[14px] text-[#0B0A0F] w-full text-center mt-2 z-10">
              <Link to="/loginAdminStore">Đăng nhập</Link>
            </p>
            <div className="mt-[-38px]">
              <Button title="Lấy lại mật khẩu" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PasswordAdminStore;
