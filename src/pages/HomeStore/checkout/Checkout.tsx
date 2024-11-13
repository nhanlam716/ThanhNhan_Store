import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InputParam from "../../../components/inputForm/InputParam";
import InputCheckOut from "../../../components/inputForm/InputCheckOut";
import { Button, Label, Radio } from "flowbite-react";
import { axiosClient } from "../../../api/axiosClient";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { CardItems } from "../../../stores/slices/cardSlices";
interface Location {
  code: string;
  name: string;
}

const Checkout = () => {
  const [provinces, setProvinces] = useState<Location[]>([]);
  const [districts, setDistricts] = useState<Location[]>([]);
  const [wards, setWards] = useState<Location[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [deliveryOption, setDeliveryOption] = useState<string>("delivery");

  const cartItems = useSelector((state: RootState) => {
    return state.cartState.data;
  });

  const totalMoney = (Items: CardItems[]) => {
    const resultWithReduce = Items.reduce((result, cart) => {
      const money = cart.quantity * cart.discountedPrice;
      result = result + money;
      return result;
    }, 0);
    return resultWithReduce;
  };

  useEffect(() => {
    getProvinces();
  }, []);

  const getProvinces = async () => {
    try {
      const response = await axiosClient.get(
        "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1"
      );
      setProvinces(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách tỉnh:", error);
    }
  };

  const getDistricts = async (provinceCode: string) => {
    try {
      const response = await axiosClient.get(
        `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`
      );
      setDistricts(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách huyện:", error);
    }
  };

  const getWards = async (districtCode: string) => {
    try {
      const response = await axiosClient.get(
        `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`
      );
      setWards(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách xã:", error);
    }
  };

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setDistricts([]);
    setWards([]);
    getDistricts(provinceId);
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setWards([]);
    getWards(districtId);
  };

  const handleDeliveryOptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryOption(e.target.value);
  };

  const user = JSON.parse(localStorage.getItem("user") || "[]");

  return (
    <div>
      <div className="max-w-6xl my-0 mx-auto">
        <div className="flex">
          <div className="flex-1 pt-[4em] pr-[4em]">
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
              <div className="mt-3">
                <h3 className="text-lg opacity-80">Thông tin giao hàng</h3>
              </div>
              {user ? (
                <>
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
                        {user.lastName} {user.firstName} ({user.email})
                      </p>
                      <p className="text-[#4239a9] cursor-pointer">Đăng xuất</p>
                    </div>
                  </div>
                  <form action="" className="mt-4">
                    <InputCheckOut type="text">
                      {user.lastName} {user.firstName}
                    </InputCheckOut>
                    <div className="flex gap-3 mt-3">
                      <div className="flex-[70%]">
                        <InputCheckOut type="email">{user.email}</InputCheckOut>
                      </div>
                      <div className="flex-[30%]">
                        <InputCheckOut
                          placeholder="Số điện thoại"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <div className="opacity-80">
                    <InputParam
                      description="Bạn đã có tài khoản?"
                      link="Đăng nhập"
                      href="./login"
                    />
                  </div>
                  <form action="" className="mt-4">
                    <InputCheckOut placeholder="Họ và tên" type="text" />
                    <div className="flex gap-3 mt-3">
                      <div className="flex-[70%]">
                        <InputCheckOut placeholder="Email" type="email" />
                      </div>
                      <div className="flex-[30%]">
                        <InputCheckOut
                          placeholder="Số điện thoại"
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                </>
              )}

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
                  <form action="" className="my-4 p-4">
                    <div className="flex gap-3 mb-3">
                      <select
                        onChange={handleProvinceChange}
                        className="flex-1 border-solid border rounded-md border-[#ccc]"
                      >
                        <option value="">Chọn Tỉnh/Thành phố</option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                      <select
                        onChange={handleDistrictChange}
                        className="flex-1 border-solid border rounded-md border-[#ccc]"
                        disabled={!selectedProvince}
                      >
                        <option value="">Chọn Quận/Huyện</option>
                        {districts.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                      <select
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        className="flex-1 border-solid border rounded-md border-[#ccc]"
                        disabled={!selectedDistrict}
                      >
                        <option value="">Chọn Phường/Xã</option>
                        {wards.map((ward) => (
                          <option key={ward.code} value={ward.code}>
                            {ward.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <InputCheckOut
                      placeholder="Địa chỉ: Thôn, xóm, đường, số nhà"
                      type="text"
                    />
                  </form>
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
                      <Radio id="D52" name="deliveryOption" value="D52" />
                      <Label htmlFor="D52">
                        <strong>D52, Tân Bình: </strong>
                        27 Đường D52, P. 12, Q. Tân Bình, TP. HCM | Hotline:
                        0901 377 722, Quận Tân Bình, Hồ Chí Minh
                      </Label>
                    </div>
                    <div className="flex items-center gap-2 border-solid border border-[#ccc] p-4 rounded">
                      <Radio id="PVB" name="deliveryOption" value="PVB" />
                      <Label htmlFor="PVB">
                        <strong>Phạm Văn Bạch, Tân Bình: </strong>
                        48 Phạm Văn Bạch, P. 15, Q. Tân Bình, TP. HCM | Hotline:
                        0901 710 780, Quận Tân Bình, Hồ Chí Minh
                      </Label>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-3">
                <Link to="/shopping" className="text-[#338dbc]">
                  Giỏ hàng
                </Link>
                <Button color="blue">
                  Tiếp tục đến phương thức thanh toán
                </Button>
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
              <div className="mt-8 border-t border-solid border-[#ccc]">
                <p className="p-3 text-center text-[#4B5563]">
                  Powered by Thành Nhân
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 pt-[4em] pl-[4em] border-l-2 border-solid border-[#ccc]">
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex mb-4 relative">
                  <img
                    src={item.image}
                    alt=""
                    className="w-16 h-16 rounded-md"
                  />
                  <span className="absolute top-[-6px] left-[53px] text-[10px] text-center w-4 h-4 leading-4 bg-[#c54934] text-[#fff] rounded-full">
                    {item.quantity}
                  </span>
                  <div className="ml-4">
                    <p className="font-normal leading-[119%]">
                      {item.name} - {item.codeSP} - {item.color}
                    </p>
                    <p className="text-gray-500">{item.size}</p>
                  </div>
                  <div className="ml-6 flex items-center">
                    <p className="font-semibold opacity-85">
                      {item.discountedPrice}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t py-6">
                <div className="flex gap-4">
                  <div className="flex-[75%]">
                    <InputCheckOut placeholder="Mã giảm giá" type="text" />
                  </div>
                  <div className="flex-[25%]">
                    <Button color="blue">Sử dụng</Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 px-0 py-7 border-t border-b border-solid border-[#ccc]">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tạm tính</span>
                  <span>{totalMoney(cartItems).toLocaleString()} ₫</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phí vận chuyển</span>
                  <span>-</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-semibold mt-6">
                <span>Tổng cộng</span>
                <span>{totalMoney(cartItems).toLocaleString()} VND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
