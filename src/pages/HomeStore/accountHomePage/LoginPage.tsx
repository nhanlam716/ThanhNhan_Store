import React from "react";
import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import InputParam from "../../../components/inputForm/InputParam";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../stores/slices/authSlices";
import { RootState, AppDispatch } from "../../../stores/store";
import { useNavigate } from "react-router-dom";
import WithNotAuth from "../../../hocs/WithNotAuth";
import { toast } from "react-toastify";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector(
    (state: RootState) => state.authState
  );

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
        .min(8, "Mật khẩu cần ít nhất 8 ký tự")
        .matches(/[a-z]/, "Phải có ít nhất một chữ cái thường")
        .matches(/[A-Z]/, "Phải có ít nhất một chữ cái hoa")
        .matches(/[0-9]/, "Phải có ít nhất một chữ số")
        .matches(/[@$!%*?&#]/, "Phải có ít nhất một ký tự đặc biệt")
        .required("Mật khẩu là bắt buộc"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(loginUser(values));
        if (resultAction?.payload) {
          localStorage.setItem("user", JSON.stringify(resultAction.payload));
          navigate("/account");
          resetForm();
        } else {
          toast.error("Email hoặc mât khẩu của bạn không đúng!!!");
          resetForm();
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
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
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="flex mt-5">
                <Button color="dark" type="submit" disabled={isLoading}>
                  {isLoading ? "Đang xử lý..." : "Đăng nhập"}
                </Button>
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

export default WithNotAuth(LoginPage);
