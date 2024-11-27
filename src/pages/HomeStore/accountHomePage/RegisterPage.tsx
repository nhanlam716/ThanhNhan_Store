import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import InputParam from "../../../components/inputForm/InputParam";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/store";
import { registerUser } from "../../../stores/slices/authSlices";
import { useNavigate } from "react-router-dom";
import WithNotAuth from "../../../hocs/WithNotAuth";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import Modals from "../../../components/modal/Modals";

const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector(
    (state: RootState) => state.authState
  );
  const [openModal, setOpenModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [conPasswordVisible, setConPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConPasswordVisibility = () => {
    setConPasswordVisible(!conPasswordVisible);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Bạn hãy nhập đầy đủ thông tin"),
      lastName: Yup.string().required("Bạn hãy nhập đầy đủ thông tin"),
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
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
        .required("Bạn hãy nhập đầy đủ thông tin"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const resultAction = await dispatch(registerUser(values));

        if (resultAction?.payload) {
          toast.success("Đăng kí thành công");
          navigate("/login");
          resetForm();
        } else {
          setOpenModal(true);
          resetForm();
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  });

  const handleGoToLogin = () => {
    navigate("/login");
    setOpenModal(false);
  };

  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-4xl mx-auto p-9">
          <div className="p-14 bg-white">
            <InputTitle title="Đăng ký" />
            <form onSubmit={formik.handleSubmit}>
              <div className="flex gap-10">
                <div className="flex-1">
                  <Input
                    label="Họ"
                    types="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{ color: "red" }}>
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex-1">
                  <Input
                    label="Tên"
                    types="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div style={{ color: "red" }}>{formik.errors.lastName}</div>
                  ) : null}
                </div>
              </div>
              <Input
                label="email:"
                types="text"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}
              <div className="relative">
                <Input
                  label="mật khẩu:"
                  types={passwordVisible ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-[68%] right-3 transform -translate-y-1/2"
                >
                  {passwordVisible ? (
                    <HiEyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <HiEye className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <div className="relative">
                <Input
                  label="nhập lại mật khẩu:"
                  types={conPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <button
                  type="button"
                  onClick={toggleConPasswordVisibility}
                  className="absolute top-[68%] right-3 transform -translate-y-1/2"
                >
                  {conPasswordVisible ? (
                    <HiEyeOff className="w-5 h-5 text-gray-500" />
                  ) : (
                    <HiEye className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div style={{ color: "red" }}>
                  {formik.errors.confirmPassword}
                </div>
              ) : null}
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="flex mt-5">
                <Button color="dark" type="submit" disabled={isLoading}>
                  {isLoading ? "Đang xử lý..." : "Đăng Ký"}
                </Button>
              </div>
              <InputParam
                description="Bạn đã có tài khoản?"
                link="Đăng nhập"
                href="./login"
              />
            </form>
          </div>
          <Modals
            title="Thông tin của bạn đã được đăng kí !!!"
            btnTitle="Đi đến trang đăng nhập"
            btnTitle2="Ở lại trang đăng kí"
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onclick2={() => setOpenModal(false)}
            onclick={handleGoToLogin}
          />
        </div>
      </div>
    </>
  );
};

export default WithNotAuth(RegisterPage);
