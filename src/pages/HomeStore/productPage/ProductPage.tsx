import logomini from "../../../assets/image/logo_transparent.png";
import logoStore from "../../../assets/image/logo_store.webp";
import iconStore from "../../../assets/image/icon_store.webp";
import iconBag from "../../../assets/image/pd_policy_1_img.webp";
import iconShoe from "../../../assets/image/pd_policy_2_img.webp";
import iconOto from "../../../assets/image/pd_policy_3_img.webp";
import iconcard from "../../../assets/image/pd_policy_4_img.webp";
import ButtonQuantity from "../../../components/button/ButtonQuantity";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { axiosClient } from "../../../api/axiosClient";
import { IProduct } from "../../../types/types";
import { useDispatch } from "react-redux";

import { setIsRefetch } from "../../../stores/slices/cardSlices";
import { AppDispatch } from "../../../stores/store";
import { formatPrice } from "../../../utils/helper";
import { toast } from "react-toastify";
import Modals from "../../../components/modal/Modals";

const ProductPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClickSize = (size: any) => {
    setSelectedSize(size);
  };

  const id = params?.id;
  const [data, setData] = useState<IProduct>();

  const fetchData = useCallback(async (id: string) => {
    try {
      const response: any = await axiosClient.get(`/productsCards/${id}`);
      setData(response);
      setMainImage(response?.image || response?.Thumbnail?.[0] || null);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [fetchData, id]);

  const handleAddToCart = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!user?.id) {
      // toast.error("Vui lòng đăng nhập trước khi chọn sản phẩm!");
      setOpenModal(true);
      return;
    }

    if (data && user?.id) {
      try {
        const existedData: any = await axiosClient.get(
          `/userProductCard?userId=${user.id}`
        );
        const hasProduct = existedData?.find(
          (item: any) => item?.id === data?.id
        );
        if (hasProduct) {
          const body = {
            ...hasProduct,
            quantity: Number(hasProduct?.quantity) + quantity,
          };
          await axiosClient.put(`/userProductCard/${id}`, body);
        } else {
          const body = {
            ...data,
            quantity,
            userId: user?.id,
            size: selectedSize,
          };
          await axiosClient.post("/userProductCard", body);
        }

        setQuantity(1);
        setSelectedSize(null);
        dispatch(setIsRefetch());
        toast.success("Thêm sản phẩm thành công!!!");
      } catch (error) {
        toast.error("Có lỗi xảy ra khi thêm sản phẩm:");
      }
    }
  };

  const handleGoToLogin = () => {
    navigate("/login");
    setOpenModal(false);
  };

  const onIncreaseCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onDecreaseCart = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleMoveUp = () => {
    setMainImage((prev) => {
      const images = data?.Thumbnail || [];
      const currentIndex = images.indexOf(prev || images[0]);
      return currentIndex === 0
        ? images[images.length - 1]
        : images[currentIndex - 1];
    });
  };

  const handleMoveDown = () => {
    setMainImage((prev) => {
      const images = data?.Thumbnail || [];
      const currentIndex = images.indexOf(prev || images[0]);
      return currentIndex === images.length - 1
        ? images[0]
        : images[currentIndex + 1];
    });
  };

  return (
    <div>
      <div className="mt-16">
        <div className="max-w-6xl my-0 mx-auto">
          <div className="flex gap-7">
            <div className="flex-1 max-w-[50%] px-3">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center space-y-2">
                  <button
                    onClick={handleMoveUp}
                    className="bg-gray-200 p-2 rounded h-[30px] w-full flex justify-center items-center text-xl opacity-80 hover:bg-blue-500 text-white duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col items-center space-y-4 overflow-y-auto scrollbar-custom h-[22rem] p-2 rounded-lg shadow-md">
                    {data?.Thumbnail &&
                      data?.Thumbnail.map((item: any, index: any) => (
                        <img
                          key={index}
                          src={item}
                          alt={`Thumbnail ${index + 1}`}
                          className={`w-20 h-20 mt-1 rounded object-cover cursor-pointer border-4 ${
                            mainImage === item
                              ? "border-blue-500"
                              : "border-transparent"
                          }`}
                          onClick={() => setMainImage(item)}
                        />
                      ))}
                  </div>
                  <button
                    onClick={handleMoveDown}
                    className="bg-gray-200 p-2 rounded h-[30px] w-full flex justify-center items-center text-xl opacity-80 hover:bg-blue-500 text-white duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                {data && (
                  <div className="relative pt-[14px]">
                    <img
                      src={mainImage || data?.Thumbnail[0]}
                      alt="Main product"
                      className="w-[400px] h-full object-cover opacity-100"
                    />
                    <span className="absolute mt-[14px] top-0 right-0 bg-red-500 text-white px-4 py-3 text-sm">
                      {data?.discount}
                    </span>
                  </div>
                )}
              </div>
            </div>
            {data && (
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-4">
                  <h1 className="text-[26px] font-medium uppercase">
                    {data?.name} - {data?.color}
                  </h1>
                </div>
                <ul className="relative flex gap-6">
                  <li className="befores">
                    Loại:{" "}
                    <span className="text-gray-500 text-sm">
                      {data?.shoeType}
                    </span>
                  </li>
                  <li>
                    Mã SP:{" "}
                    <span className="text-gray-500 text-sm">
                      {data?.codeSP}
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-red-500 text-4xl font-bold">
                      {formatPrice(data?.discountedPrice)}
                    </span>
                    <span className="text-2xl text-gray-400 line-through">
                      {data?.originalPrice}₫
                    </span>
                    <span className="text-green-500 text-2xl">
                      (Tiết kiệm {data.installment}₫)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-6">
                    <p className="text-base">Trả sau đến 12 tháng với </p>
                    <a href="./ProductPage.tsx">
                      <img src={logomini} alt="" />
                    </a>
                  </div>
                  <p className="max-w-80 mt-6 bg-blue-500 text-white px-4 py-2 rounded tracking-tight">
                    Giảm đến 100K khi thanh toán qua Fundiin.{" "}
                    <a
                      href="./ProductPage.tsx"
                      className="underline italic ml-1"
                    >
                      Xem thêm
                    </a>
                  </p>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-400">
                    Kích thước:
                  </h2>
                  <div className="flex space-x-2 mt-2">
                    {[
                      "38",
                      "38.5",
                      "39",
                      "40",
                      "40.5",
                      "41",
                      "42",
                      "42.5",
                      "43",
                    ].map((size) => (
                      <button
                        key={size}
                        onClick={() => handleClickSize(size)}
                        className={`border px-4 py-2 rounded ${
                          selectedSize === size
                            ? "bg-blue-500 text-white"
                            : "border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3">
                    <ul className="relative flex gap-6">
                      <li>
                        <a
                          href="./ProductPage.tsx"
                          className="underline text-[12px] tracking-tight"
                        >
                          Bảng quy đổi size
                        </a>
                      </li>
                      <li className="afters">
                        <a
                          href="./ProductPage.tsx"
                          className="underline text-[12px] tracking-tight"
                        >
                          Hướng dẫn đo size giày
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-5 space-x-4">
                  <span className=" flex-[0.5] text-lg text-slate-400">
                    Số lượng:{" "}
                  </span>
                  <ButtonQuantity
                    increaseBtn="+"
                    decreaseBtn="-"
                    quantity={quantity}
                    onDecrease={onDecreaseCart}
                    onIncrease={onIncreaseCart}
                  />
                  <button
                    onClick={handleAddToCart}
                    className="bg-red-500 text-white px-6 py-3 rounded w-full flex-1 text-lg"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => navigate("/checkout")}
                    className=" bg-black text-white px-6 py-3 rounded w-full text-lg"
                  >
                    MUA NGAY
                  </button>
                </div>
                <div className="mt-4">
                  <div className="p-4 border-solid border-2 border-[#333]">
                    <div className="flex gap-2 uppercase font-bold text-[red]">
                      <img src={logoStore} alt="logostore" />
                      <span className="text-lg">có mặt tại 3 cửa hàng:</span>
                    </div>
                    <div className="mt-3">
                      <div className="flex gap-2 mt-2">
                        <img src={iconStore} alt="iconStore" />
                        <span className="text-sm font-bold">
                          27 Đường D52, P. 12, Q. Tân Bình, TP. HCM | Hotline:
                          0901 377 722
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <img src={iconStore} alt="iconStore" />
                        <span className="text-sm font-bold">
                          27 Đường D52, P. 12, Q. Tân Bình, TP. HCM | Hotline:
                          0901 377 722
                        </span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <img src={iconStore} alt="iconStore" />
                        <span className="text-sm font-bold">
                          27 Đường D52, P. 12, Q. Tân Bình, TP. HCM | Hotline:
                          0901 377 722
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="p-2">
                    <div className="flex items-center gap-5 mb-5">
                      <div className="max-w-[48px]">
                        <img src={iconBag} alt="Bags" />
                      </div>
                      <div>
                        <h4 className="uppercase text-[red] text-sm font-bold">
                          ưu đãi tặng kèm
                        </h4>
                        <span className="text-[12px] font-medium leading-3">
                          Tặng kèm vớ dệt kim và balô chống thấm đựng giày cho
                          mỗi đơn hàng Giày đá bóng.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="max-w-[48px]">
                        <img src={iconShoe} alt="Bags" />
                      </div>
                      <div>
                        <h4 className="uppercase text-[red] text-sm font-bold">
                          đổi hàng dễ dàng{" "}
                        </h4>
                        <span className="text-[12px] font-medium leading-3">
                          Hỗ trợ khách hàng đổi size hoặc mẫu trong vòng 7 ngày.
                          (Sản phẩm chưa qua sử dụng).
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="max-w-[48px]">
                        <img src={iconOto} alt="Bags" />
                      </div>
                      <div>
                        <h4 className="uppercase text-[red] text-sm font-bold">
                          Chính sách giao hàng{" "}
                        </h4>
                        <span className="text-[12px] font-medium leading-3">
                          COD Toàn quốc | Freeship toàn quốc khi khách hàng
                          thanh toán chuyển khoản trước với đơn hàng Giày đá
                          bóng trên 1 triệu.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="max-w-[48px]">
                        <img src={iconcard} alt="Bags" />
                      </div>
                      <div>
                        <h4 className="uppercase text-[red] text-sm font-bold">
                          Thanh toán tiện lợi
                        </h4>
                        <span className="text-[12px] font-medium leading-3">
                          Chấp nhận các loại hình thanh toán bằng thẻ, tiền mặt,
                          chuyển khoản.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Modals
            btnTitle="Đi đến trang đăng nhập"
            btnTitle2="Ở lại trang sản phẩm"
            title="Vui lòng đăng nhập trước khi chọn sản phẩm!"
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            onclick={handleGoToLogin}
            onclick2={() => setOpenModal(false)}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
