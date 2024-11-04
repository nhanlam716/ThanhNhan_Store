import InputTitle from "../../../components/inputForm/InputTitle";
import Input from "../../../components/inputForm/Input";
import Button from "../../../components/button/Button";
import InputParam from "../../../components/inputForm/InputParam";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
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
        .max(15, "Phải ít hơn hoặc bằng 15 ký tự")
        .required("Bạn hãy nhập đầy đủ thông tin"),
      confirmPassword: Yup.string()
        .max(15, "Phải ít hơn hoặc bằng 15 ký tự")
        .required("Bạn hãy nhập đầy đủ thông tin"),
    }),
    onSubmit: (values) => {
      // Object.keys(formik.errors).length === 0
      //   ? console.log(values)
      //   : alert(
      //       "Vui lòng điền đầy đủ và chính xác thông tin trước khi đăng ký."
      //     );
      console.log(values);
    },
  });

  return (
    <>
      <div className="bg-slate-100">
        <div className="max-w-4xl mx-auto p-9">
          <div className="p-14 bg-white">
            <InputTitle title="Đăng ký" />
            <form action="" onSubmit={formik.handleSubmit}>
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
