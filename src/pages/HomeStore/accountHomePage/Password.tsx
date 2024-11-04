import React from "react";
import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import Button from "../../../components/button/Button";
import InputParam from "../../../components/inputForm/InputParam";
import { useFormik } from "formik";
import * as Yup from "yup";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Địa chỉ email không hợp lệ")
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
          <div className="p-14 bg-white">
            <InputTitle title="Quên mật khẩu" />
            <form action="">
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
