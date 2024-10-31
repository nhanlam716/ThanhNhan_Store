import React from "react";
import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import Button from "../../../components/button/Button";
import InputParam from "../../../components/inputForm/InputParam";

const RegisterPage = () => {
  return (
    <>
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
              <InputParam
                description="Bạn đã có tài khoản?"
                link="Đăng nhập"
                href="./login"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
