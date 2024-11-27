import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputCheckOut from "../../../components/inputForm/InputCheckOut";
import { Button, Label, Radio } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/store";
import { logout } from "../../../stores/slices/authSlices";
import { formatPrice } from "../../../utils/helper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "flowbite-react";
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import TotalCheckout from "./totalCheckout/TotalCheckout";
import FormProvinces from "./formProvinces/FormProvinces";
import { axiosClient } from "../../../api/axiosClient";
import { toast } from "react-toastify";
import WithAuth from "../../../hocs/WithAuth";

const Checkout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading } = useSelector(
    (state: RootState) => state.authState
  );
  const cartItems = useSelector((state: RootState) => {
    return state.cartState.data;
  });
  const navigate = useNavigate();

  const [deliveryOption, setDeliveryOption] = useState<string>("delivery");
  const [cashOption, setCashOption] = useState<string>("cash");
  const [openModal, setOpenModal] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "[]");

  const formik = useFormik({
    initialValues: {
      fullName: `${user.lastName} ${user.firstName}`,
      email: user?.email,
      phoneNumber: "",
      address: "",
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "SĐT không hợp lệ")
        .required("Vui lòng nhập SĐT"),
      address: Yup.string().required("Vui lòng nhập thông tin địa chỉ"),
    }),
    onSubmit: () => {
      setShowPaymentMethod(true);
    },
  });

  const handleDeliveryOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryOption(e.target.value);
  };

  const handleCashOPtionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCashOption(e.target.value);
  };

  const handleCompleteCheckout = async () => {
    if (!cartItems || cartItems.length === 0) {
      toast.error(
        "Giỏ hàng trống. Vui lòng thêm sản phẩm trước khi thanh toán."
      );
      return;
    }

    try {
      const user = JSON.parse(localStorage.getItem("user") || "[]");

      const orderData = {
        userId: user.id,
        fullName: `${user.lastName} ${user.firstName}`,
        email: user.email,
        phoneNumber: formik.values.phoneNumber,
        address: formik.values.address,
        products: cartItems,
        paymentMethod: cashOption,
        deliveryOption: deliveryOption,
        status: "Pending",
        orderDate: new Date(),
      };

      await axiosClient.post(
        "http://localhost:3000/CheckoutProductCard",
        orderData
      );

      setIsCheckoutSuccess(true);
    } catch (error) {
      console.error("Lỗi khi hoàn tất thanh toán:", error);
    }
  };

  // const resetCheckoutInfo = () => {
  //   setShowPaymentMethod(false);
  //   setCashOption("cash");
  //   setDeliveryOption("delivery");
  //   formik.resetForm();
  //   dispatch(resetCart());
  // };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <div className="max-w-[83rem] my-0 mx-auto">
        <div className="flex px-[5%]">
          <>
            <div className="w-[60%] pt-[4em] pr-[4em]">
              <div>
                <h2 className="text-4xl font-medium tracking-tight">
                  Giày bóng đá chính hãng
                </h2>
                <div className="flex gap-6 mt-3 text-xs relative">
                  <p>
                    <Link to="/" className="text-[#338dbc]">
                      Giỏ hàng
                    </Link>
                  </p>
                  <p className="before after">Thông tin giao hàng</p>
                  <p>Phương thức thanh toán</p>
                </div>
                {!showPaymentMethod ? (
                  <>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="mt-3">
                        <h3 className="text-lg opacity-80">
                          Thông tin giao hàng
                        </h3>
                      </div>
                      <div>
                        <div className="flex gap-4 mt-4">
                          <div>
                            <img
                              className="rounded-md"
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDUwIDUwIj48dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg1MHY1MEgwVjB6IiBmaWxsPSIjRDhEOEQ4Ii8+PHBhdGggZD0iTTI1LjEwMyAyNi4yNDJjMy4yMTIgMCA1LjY0Mi0yLjkyIDUuNjQyLTYuNzg3IDAtMy4wODYtMi41OC01LjcwNS01LjY0Mi01LjcwNS0zLjA2IDAtNS42NCAyLjYyLTUuNjQgNS43MDUgMCAzLjg2NiAyLjQzIDYuNzg3IDUuNjQgNi43ODd6bTAtMTAuNTRjMS45NTIgMCAzLjY3OCAxLjc2MyAzLjY3OCAzLjc1MyAwIDIuNzU3LTEuNTc0IDQuODM1LTMuNjc3IDQuODM1LTIuMTAzIDAtMy42NzctMi4wNzgtMy42NzctNC44MzUgMC0xLjk5IDEuNzI2LTMuNzUzIDMuNjc3LTMuNzUzem0tOC40NSAyMC42MTVsLjE3Ny0xLjg3N2MuMzktMy43NzggNC42OTctNC42MSA4LjI3My00LjYxIDMuNTc3IDAgNy44ODQuODMyIDguMjc0IDQuNTk4bC4xNzYgMS44OWgyLjAxNWwtLjE3Ni0yLjA4Yy0uNDQtNC4xMTctNC4wNjgtNi4zODQtMTAuMjktNi4zODQtNi4yMiAwLTkuODQ2IDIuMjY3LTEwLjI4NyA2LjM5N2wtLjE3NiAyLjA2N2gyLjAxNHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+"
                              alt="avatar"
                            />
                          </div>
                          <div>
                            <p>
                              {`${user.lastName} ${user.firstName} (${user.email})`}
                            </p>
                            <p
                              onClick={handleOpenModal}
                              className="text-[#4239a9] cursor-pointer"
                            >
                              Đăng xuất
                            </p>
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
                                    Bạn có chắc chắn muốn đăng xuất ???
                                  </h3>
                                  <div className="flex justify-center gap-4">
                                    <Button
                                      color="failure"
                                      onClick={handleLogout}
                                    >
                                      Đồng ý
                                    </Button>
                                    <Button
                                      color="gray"
                                      onClick={() => setOpenModal(false)}
                                    >
                                      Từ chối
                                    </Button>
                                  </div>
                                </div>
                              </Modal.Body>
                            </Modal>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="mt-2">
                            <InputCheckOut
                              placeholder="Họ tên"
                              types="text"
                              value={formik.values.fullName}
                            />
                          </div>
                          <div className="mt-3">
                            <InputCheckOut
                              placeholder="email"
                              types="email"
                              value={formik.values.email}
                            />
                          </div>
                          <div className="mt-3">
                            <InputCheckOut
                              placeholder="Số điện thoại"
                              types="text"
                              name="phoneNumber"
                              value={formik.values.phoneNumber}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                          </div>
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber && (
                              <p className="text-red-500">
                                {formik.errors.phoneNumber}
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="border-solid border border-[#ccc] rounded-lg mt-6">
                        <div className="flex items-center gap-2 border-solid border-b border-[#ccc] p-4">
                          <Radio
                            id="delivery"
                            name="deliveryOption"
                            value="delivery"
                            checked={deliveryOption === "delivery"}
                            onChange={handleDeliveryOptionChange}
                          />
                          <Label htmlFor="delivery">Giao tận nơi</Label>
                        </div>
                        {deliveryOption === "delivery" && (
                          <FormProvinces formik={formik} />
                        )}
                        <div className="flex items-center gap-2 border-solid border-t border-[#ccc] p-4">
                          <Radio
                            id="pickup"
                            name="deliveryOption"
                            value="pickup"
                            checked={deliveryOption === "pickup"}
                            onChange={handleDeliveryOptionChange}
                          />
                          <Label htmlFor="pickup">Nhận tại shop</Label>
                        </div>
                        {deliveryOption === "pickup" && (
                          <div className="p-4">
                            <div className="flex items-center gap-2 border-solid border border-[#ccc] p-4 rounded">
                              <Radio
                                id="D52"
                                name="deliveryOption"
                                value="D52"
                              />
                              <Label htmlFor="D52">
                                <strong>D52, Tân Bình: </strong>
                                27 Đường D52, P. 12, Q. Tân Bình, TP. HCM |
                                Hotline: 0901 377 722, Quận Tân Bình, Hồ Chí
                                Minh
                              </Label>
                            </div>
                            <div className="flex items-center gap-2 border-solid border border-[#ccc] p-4 rounded">
                              <Radio
                                id="PVB"
                                name="deliveryOption"
                                value="PVB"
                              />
                              <Label htmlFor="PVB">
                                <strong>Phạm Văn Bạch, Tân Bình: </strong>
                                48 Phạm Văn Bạch, P. 15, Q. Tân Bình, TP. HCM |
                                Hotline: 0901 710 780, Quận Tân Bình, Hồ Chí
                                Minh
                              </Label>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <Link to="/shopping" className="text-[#338dbc]">
                          Giỏ hàng
                        </Link>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <div className="flex mt-5">
                          <Button
                            color="blue"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading
                              ? "Đang xử lý..."
                              : "Tiếp tục đến phương thức thanh toán"}
                          </Button>
                        </div>
                      </div>
                      <div className="pt-8 pb-5">
                        <Link
                          to="/"
                          className="flex items-center uppercase text-lg font-semibold opacity-80"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 4L8 12L16 20"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          tiếp tục mua sắm
                        </Link>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 pt-5">
                    <h2 className="text-xl font-medium">
                      Phương thức vận chuyển
                    </h2>
                    <div className="border-solid border border-[#ccc] rounded-lg mt-6">
                      <div className="flex items-center justify-between gap-2 p-4 cursor-pointer">
                        <div>
                          <Radio
                            id="ship"
                            name="shipOption"
                            value="ship"
                            checked={true}
                            readOnly
                          />
                          <Label className="ml-2" htmlFor="ship">
                            Giao tận nơi
                          </Label>
                        </div>
                        <div>{formatPrice(28000)}</div>
                      </div>
                    </div>
                    <h2 className="text-xl font-medium mt-5">
                      Phương thức thanh toán
                    </h2>
                    <div className="border-solid border border-[#ccc] rounded-lg mt-6">
                      <div className="flex items-center justify-between border-solid border-b border-[#ccc] gap-2 p-4 cursor-pointer">
                        <div className="flex items-center gap-2 ">
                          <Radio
                            id="cash"
                            name="cashOption"
                            value="cash"
                            checked={cashOption === "cash"}
                            onChange={handleCashOPtionChange}
                          />
                          <img
                            src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6"
                            alt="logo"
                          />
                          <Label htmlFor="cash">
                            Thanh toán khi giao hàng (COD)
                          </Label>
                        </div>
                      </div>
                      {cashOption === "cash" && (
                        <div className="p-6 bg-slate-100">
                          <p>
                            - Khách nhận hàng vui lòng thanh toán tiền hàng +
                            tiền ship cho bên vận chuyển.
                          </p>
                          <p>
                            - Shop cam kết hỗ trợ đổi size/giày trong vòng 7
                            ngày đối với HÀNG MỚI chưa qua sử dụng. Quý khách
                            vui lòng giữ giày sạch khi thử phòng trường hợp phải
                            đổi hàng.
                          </p>
                          <p>
                            - Shop Thanh Hùng Futsal HỖ TRỢ CHO XEM HÀNG NHƯNG
                            KHÔNG HỖ TRỢ CHO KHÁCH THỬ GIÀY KHI NHẬN HÀNG
                          </p>
                        </div>
                      )}
                      <div className="flex items-center justify-between border-solid border-b border-[#ccc] gap-2 p-4">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <Radio
                            id="transfer"
                            name="transferOption"
                            value="transfer"
                            checked={cashOption === "transfer"}
                            onChange={handleCashOPtionChange}
                          />
                          <img
                            src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6"
                            alt="logo"
                          />
                          <Label htmlFor="transfer">
                            Chuyển khoản qua ngân hàng
                          </Label>
                        </div>
                      </div>
                      {cashOption === "transfer" && (
                        <div className="p-6 bg-slate-100">
                          Quý khách vui lòng chuyển khoản tới một trong những
                          ngân hàng dưới đây theo cú pháp nội dung: (SĐT mua
                          hàng) ck đơn hàng (Mã đơn hàng) *ACB Số TK: 233029569
                          Chủ TK: Nguyễn Phan Thanh Hùng ACB PGD Tân Định
                        </div>
                      )}
                      <div className="flex items-center justify-between border-solid border-b border-[#ccc] gap-2 p-4">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <Radio
                            id="fundiin"
                            name="fundiinOption"
                            value="fundiin"
                            checked={cashOption === "fundiin"}
                            onChange={handleCashOPtionChange}
                          />
                          <img
                            src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6"
                            alt="logo"
                          />
                          <Label htmlFor="fundiin">
                            Trả sau 3 kì miễn lãi qua Fundiin
                          </Label>
                        </div>
                      </div>
                      {cashOption === "fundiin" && (
                        <div className="p-6 bg-slate-100">
                          <h5>
                            Mua trước Trả sau linh hoạt đến 12 tháng - chuẩn 3
                            KHÔNG với Fundiin
                          </h5>
                          <p>Không lãi suất - không phí ẩn</p>
                          <p>
                            Không thủ tục rườm rà - chỉ với CCCD và hình selfie
                          </p>
                          <p>Không chờ đợi - xét duyệt nhanh chóng</p>
                          <h5>Ưu đãi*:</h5>
                          <p>
                            Dành cho KH lần đầu thanh toán Fundiin - ưu đãi độc
                            quyền đến 50K:
                          </p>
                          <p>- Giảm 20% tối đa 30K</p>
                          <p>
                            - Giảm 3% tối đa 50K Dành cho KH đã từng thanh toán
                            Fundiin
                          </p>

                          <p>
                            - ưu đãi không giới hạn số lần dùng: - Giảm 10% tối
                            đa 15K (dùng 1 lần/tháng){" "}
                          </p>
                          <p>
                            - Giảm 0,2% không giới hạn giá trị và số lần sử dụng{" "}
                          </p>
                          <p>
                            (*) Mã được nhập tại giao diện thanh toán của
                            Fundiin
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button
                        color="gray"
                        onClick={() => setShowPaymentMethod(false)}
                      >
                        Quay lại
                      </Button>
                      <Button
                        color="blue"
                        disabled={isLoading}
                        onClick={handleCompleteCheckout}
                      >
                        {isLoading ? "Đang xử lý..." : "Hoàn tất thanh toán"}
                      </Button>
                    </div>
                    <Modal
                      show={isCheckoutSuccess}
                      size="md"
                      onClose={() => {
                        setIsCheckoutSuccess(false);
                        // resetCheckoutInfo();
                      }}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="text-center">
                          <HiOutlineCheckCircle className="mx-auto mb-4 h-14 w-14 text-green-500" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500">
                            Thanh toán thành công!
                          </h3>
                          <p>
                            Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.
                          </p>
                          <div className="flex justify-center mt-4">
                            <Button
                              color="green"
                              onClick={() => {
                                navigate("/account");
                                setIsCheckoutSuccess(false);
                              }}
                            >
                              Quay lại trang chủ
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                )}
                <div className="mt-8 border-t border-solid border-[#ccc]">
                  <p className="p-3 text-center text-[#4B5563]">
                    Powered by Thành Nhân
                  </p>
                </div>
              </div>
            </div>
          </>
          <div className="w-[40%] pt-[4em] pl-[4em] border-l-2 border-solid border-[#ccc]">
            {!showPaymentMethod ? (
              <TotalCheckout shippingFee="-" />
            ) : (
              <TotalCheckout shippingFee={28000} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuth(Checkout);
