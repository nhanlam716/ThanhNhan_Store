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
import { Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useState } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { error, isLoading } = useSelector(
    (state: RootState) => state.authState
  );
  const [openModal, setOpenModal] = useState(false);

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
          // toast.error("Thông tin của bạn đã được đăng kí");
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
              <Input
                label="mật khẩu:"
                types="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}
              <Input
                label="nhập lại mật khẩu:"
                types="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
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
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Thông tin của bạn đã được đăng kí !!!
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={handleGoToLogin}>
                    Đi đến trang đăng nhập
                  </Button>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Ở lại trang đăng kí
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default WithNotAuth(RegisterPage);
