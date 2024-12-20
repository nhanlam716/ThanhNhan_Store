import React, { useEffect, useState } from "react";
import Banner from "../../../components/banner/Banner";
import { Link, useSearchParams } from "react-router-dom";
import {
  BRANDS,
  CATEGORY,
  OUTSTANDING_PRODUCTS,
  PRICE,
  SIZES,
} from "../../../constants/headerCategories";
import { Checkbox, Label } from "flowbite-react";
import InputLink from "../../../components/inputForm/InputLink";
import { CONTENT } from "../../../constants/allProducts";
import { axiosClient } from "../../../api/axiosClient";
import Cards from "../../../components/card/Cards";
import { IProduct } from "../../../types/types";

interface ProductParams {
  type?: string | null;
  brand?: string | null;
  discountedPrice_gte?: number;
  discountedPrice_lte?: number;
}

const HeaderHomePage = () => {
  const [searchParams] = useSearchParams();
  // const previousSearchParams = Object.fromEntries(
  //   Array.from(searchParams.entries())
  // );
  const type = searchParams.get("type");
  const brand = searchParams.get("brand");

  const [data, setData] = useState<IProduct[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<{
    gte: number;
    lte: number;
  } | null>(null);
  const [showPrice, setShowPrice] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response: any = await axiosClient.get("/productsCards", {
  //         params: { type, brand },
  //       });
  //       setData(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [type, brand]);

  useEffect(() => {
    async function fetchData() {
      try {
        const params: ProductParams = { type, brand };

        if (selectedPrice) {
          params.discountedPrice_gte = selectedPrice.gte;
          params.discountedPrice_lte = selectedPrice.lte;
        }

        let response: any = await axiosClient.get("/productsCards", { params });

        if (sortOrder) {
          response = response.sort((a: IProduct, b: IProduct) => {
            switch (sortOrder) {
              case "name-asc":
                return a.name.localeCompare(b.name);

              case "name-desc":
                return b.name.localeCompare(a.name);

              case "price-asc":
                return a.discountedPrice - b.discountedPrice;

              case "price-desc":
                return b.discountedPrice - a.discountedPrice;

              default:
                return 0;
            }
          });
        }

        setData(response);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [type, brand, selectedPrice, sortOrder]);

  const handlePriceChange = (priceId: string | null) => {
    if (priceId) {
      const selectedRange = PRICE.find((item) => item.id === priceId);
      if (selectedRange) {
        setSelectedPrice({
          gte: selectedRange.gte,
          lte: selectedRange.lte,
        });
      }
    } else {
      setSelectedPrice(null);
    }
  };

  const handleRenderTitle = () => {
    // {type
    //   ? brand
    //     ? CONTENT[type][brand]?.title
    //     : CONTENT[type]?.title
    //   : ""}

    if (type && brand) return CONTENT[type][brand]?.title;

    if (type) return CONTENT[type]?.title;

    return "Tất cả sản phẩm";
  };

  const handleRenderBanner = () => {
    // {
    //   type ? (
    //     <Banner
    //       image={brand ? CONTENT[type][brand].banner : CONTENT[type].banner}
    //     />
    //   ) : (
    //     <Banner
    //       image={
    //         "https://file.hstatic.net/200000278317/collection/main-category-banner-all_df361d5490c241baa6cf83475c785540_master.jpg"
    //       }
    //     />
    //   );
    // }
    if (type && brand) return <Banner image={CONTENT[type][brand].banner} />;

    if (type) return <Banner image={CONTENT[type].banner} />;

    return (
      <Banner
        image={
          "https://file.hstatic.net/200000278317/collection/main-category-banner-all_df361d5490c241baa6cf83475c785540_master.jpg"
        }
      />
    );
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleTogglePrice = () => setShowPrice(!showPrice);

  const handleToggleBrand = () => setShowBrand(!showBrand);

  const handleToggleSize = () => setShowSize(!showSize);

  return (
    <div className="my-6">
      <div className="max-w-6xl my-0 mx-auto">
        <div>
          <div className="flex gap-5">
            <div className="flex-[20%]">
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
                <div onClick={handleTogglePrice}>
                  <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded flex items-center justify-between cursor-pointer">
                    giá{" "}
                    {showPrice ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </h3>
                </div>
                {showPrice && (
                  <div className="mb-4 border-[1px] border-solid border-[#ccc] p-4 rounded">
                    <ul>
                      {PRICE.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center gap-3 mb-[10px]"
                        >
                          <Checkbox
                            id={item.id}
                            checked={
                              selectedPrice?.gte === item.gte &&
                              selectedPrice?.lte === item.lte
                            }
                            onChange={() => handlePriceChange(item.id)}
                          />
                          <Label htmlFor={item.id}>{item.name}</Label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div onClick={handleToggleBrand}>
                  <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded flex items-center justify-between cursor-pointer">
                    thương hiệu{" "}
                    {showBrand ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </h3>
                </div>
                {showBrand && (
                  <div className="mb-4 border-[1px] border-solid border-[#ccc] p-2 rounded">
                    <ul className="p-2 max-h-[270px] overflow-y-auto space-y-3 uppercase scrollbar-custom">
                      {BRANDS.map((item) => (
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
                )}
              </div>
              <div className="mb-4">
                <div onClick={handleToggleSize}>
                  <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded flex items-center justify-between cursor-pointer">
                    size{" "}
                    {showSize ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-[#fff]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </h3>
                </div>
                {showSize && (
                  <div className="mb-4 border-[1px] border-solid border-[#ccc] p-2 rounded">
                    <ul className="grid grid-cols-2 gap-4 p-2 max-h-[270px] overflow-y-auto space-y-3 uppercase scrollbar-custom">
                      {SIZES.map((item) => (
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
                )}
              </div>
            </div>
            <div className="flex-[80%]">
              {handleRenderBanner()}
              <div className="py-4 border-b border-[#333]">
                <h1 className="text-5xl uppercase font-medium">
                  {handleRenderTitle()}
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
                    <InputLink link="Mad Voltage Pack" />
                    <InputLink link="Vivid Horizon Pack" />
                    <InputLink link="Kylian Mbappe SE" />
                  </div>
                  <div>
                    <label htmlFor="" className="mr-3 font-semibold">
                      Sắp xếp theo:
                    </label>
                    <select
                      name=""
                      id="sort"
                      className="p-3 w-48 h-full border-solid border-[#0e1c22] text-[#0e1c22] text-base bg-none outline-none"
                      onChange={(e) => {
                        const value = e.target.value;
                        let order = null;

                        switch (value) {
                          case "Giá: Tăng dần":
                            order = "price-asc";
                            break;
                          case "Giá: Giảm dần":
                            order = "price-desc";
                            break;
                          case "Tên: A - Z":
                            order = "name-asc";
                            break;
                          case "Tên: Z - A":
                            order = "name-desc";
                            break;
                          default:
                            order = null;
                        }

                        setSortOrder(order);
                      }}
                    >
                      {OUTSTANDING_PRODUCTS.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {(currentData || []).map((item, index) => (
                    <Cards key={index} {...item} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`px-4 py-2 mx-1 border rounded ${
                      currentPage === index + 1 ? "bg-gray-200" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 mx-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomePage;
