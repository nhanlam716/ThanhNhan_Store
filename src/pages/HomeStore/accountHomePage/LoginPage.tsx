import React from "react";
import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import Button from "../../../components/button/Button";
import InputParam from "../../../components/inputForm/InputParam";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Địa chỉ email không hợp lệ")
        .required("Bạn hãy nhập đầy đủ thông tin"),
      password: Yup.string()
        .max(15, "Phải ít hơn hoặc bằng 15 ký tự")
        .required("Bạn hãy nhập đầy đủ thông tin"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-2xl mx-auto p-9">
          <div className="p-10 bg-white">
            <InputTitle title="Đăng nhập" />
            <form action="" onSubmit={formik.handleSubmit}>
              <Input
                label="email:"
                types="text"
                placeholder="Nhập email của bạn"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <Input
                label="mật khẩu:"
                types="password"
                placeholder="Nhập mật khẩu"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <div className="flex mt-[-34px]">
                <Button title="Đăng nhập" href="/" />
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
