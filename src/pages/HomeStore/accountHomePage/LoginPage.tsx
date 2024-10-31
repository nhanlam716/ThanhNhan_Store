import React from "react";
import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import Button from "../../../components/button/Button";
import InputParam from "../../../components/inputForm/InputParam";

const LoginPage = () => {
  return (
    <>
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
                href="./register"
              />
              <InputParam link="Quên mật khẩu ?" href="./password" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
