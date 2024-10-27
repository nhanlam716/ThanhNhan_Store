import React from "react";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";
import { CATEGORY, PRICE } from "../../constants/headerCategories";
import TitleProduct from "../../components/title/TitleProduct";
import { Checkbox, Label } from "flowbite-react";

const HeaderHomePage = () => {
  return (
    <div className="my-6">
      <div className="max-w-6xl my-0 mx-auto">
        <div>
          <div className="flex gap-5">
            <div className="flex-[30%]">
              <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded">
                danh mục
              </h3>
              <div className="flex flex-wrap gap-[10px] mb-4 border-[1px] border-solid border-[#ccc] p-4 rounded">
                {CATEGORY.map((item, index) => (
                  <div key={index} className="mb-[10px]">
                    <Link
                      className="border-solid border-[1px] border-[#ccc] p-2 text-sm font-medium tracking-tighter"
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <TitleProduct title="giá" />
                <div className="mb-4 border-[1px] border-solid border-[#ccc] p-4 rounded">
                  <ul>
                    {PRICE.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center gap-3 mb-[10px]"
                      >
                        <Checkbox id={item.id} />
                        <Label htmlFor={item.id}>{item.name}</Label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <TitleProduct title="thương hiệu" />
              </div>
              <div className="mb-4">
                <TitleProduct title="size" />
              </div>
            </div>
            <div className="flex-[70%]">
              <Banner image="https://file.hstatic.net/200000278317/collection/main-category-banner-all_df361d5490c241baa6cf83475c785540_master.jpg" />
              <div className="py-4 border-b border-[#333]">
                <h1 className="text-5xl uppercase font-medium">
                  tất cả sản phẩm
                </h1>
                <p className="mt-5 text-[16px] tracking-tight">
                  Chọn một đôi giày đá bóng thích hợp sẽ giúp bạn tự tin thể
                  hiện hết khả năng mỗi khi ra sân. Và để xác định đúng “chân
                  ái” dành riêng cho bạn, có 3 yếu tố tiên quyết bạn nên cân
                  nhắc: mặt sân thi đấu (sân sàn hay sân cỏ nhân tạo), form chân
                  (chân thon hay bè) và mức giá mong muốn.
                </p>
                <p className="mt-3 text-[16px] tracking-tight">
                  Tại{" "}
                  <Link className="font-semibold text-[#288ad6]" to="/">
                    Thanh Hùng Futsal
                  </Link>
                  , chúng mình đang có sẵn những mẫu{" "}
                  <Link className="font-semibold text-[#288ad6]" to="/">
                    Giày Đá Bóng Cỏ Nhân Tạo
                  </Link>{" "}
                  và{" "}
                  <Link className="font-semibold text-[#288ad6]" to="/">
                    Giày Futsal
                  </Link>{" "}
                  mới và hot nhất đến từ 10 thương hiệu thể thao hàng đầu trong
                  nước và quốc tế, bao gồm các thương hiệu hàng đầu hiện nay như
                  Nike, adidas, PUMA, Mizuno, Joma, Asics...Cùng với đó là các{" "}
                  <Link className="font-semibold text-[#288ad6]" to="/">
                    Phụ Kiện Ra Sân
                  </Link>{" "}
                  tiện lợi như vớ, túi đựng giày, trái bóng,...
                </p>
              </div>
              <div className="my-4">
                <div className="flex justify-between items-center">
                  <div>
                    <Link
                      className="border-solid border-[1px] border-[#ccc] p-[14px] text-base font-normal tracking-tighter mr-3"
                      to="/"
                    >
                      Mad Voltage Pack
                    </Link>
                    <Link
                      className="border-solid border-[1px] border-[#ccc] p-[14px] text-base font-normal tracking-tighter mr-3"
                      to="/"
                    >
                      Vivid Horizon Pack
                    </Link>
                    <Link
                      className="border-solid border-[1px] border-[#ccc] p-[14px] text-base font-normal tracking-tighter mr-3"
                      to="/"
                    >
                      Kylian Mbappe SE
                    </Link>
                  </div>
                  <div>
                    <label htmlFor="" className="mr-3 font-semibold">
                      Sắp xếp theo:
                    </label>
                    <select
                      name=""
                      id=""
                      className="p-3 w-48 h-full border-solid border-[#0e1c22] text-[#0e1c22] text-base bg-none outline-none"
                    >
                      <option>Sản phẩm nổi bật</option>
                      <option>Sản phẩm nổi bật</option>
                      <option>Sản phẩm nổi bật</option>
                      <option>Sản phẩm nổi bật</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
