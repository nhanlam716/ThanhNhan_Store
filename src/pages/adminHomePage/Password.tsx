import React from "react";
import InputTitle from "../../components/inputForm/InputTitle";
import Input from "../../components/inputForm/Input";
import Button from "../../components/button/Button";
import InputParam from "../../components/inputForm/InputParam";

const Password = () => {
  return (
    <>
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
              <InputParam
                description="Trở lại"
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

export default Password;
