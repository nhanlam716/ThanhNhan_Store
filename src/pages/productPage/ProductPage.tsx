import React, { useState } from "react";
import logomini from "../../assets/image/logo_transparent.png";
import logoStore from "../../assets/image/logo_store.webp";
import iconStore from "../../assets/image/icon_store.webp";
import iconBag from "../../assets/image/pd_policy_1_img.webp";
import iconShoe from "../../assets/image/pd_policy_2_img.webp";
import iconOto from "../../assets/image/pd_policy_3_img.webp";
import iconcard from "../../assets/image/pd_policy_4_img.webp";

const ProductPage = () => {
  const images = [
    "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
    "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
    "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
    "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
    "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <div>
        <div className="max-w-6xl my-0 mx-auto">
          <div className="flex gap-7">
            <div className="flex-1 max-w-[50%] px-3">
              <div className="flex space-x-4">
                <div className="flex flex-col items-center space-y-2">
                  <button className="bg-gray-200 p-2 rounded h-[30px] w-full flex justify-center items-center text-xl opacity-80">
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
                  <div className="flex flex-col items-center space-y-4 overflow-auto h-96 p-2 rounded-lg shadow-md hide-scrollbar">
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-20 h-20 rounded-lg object-cover cursor-pointer transition-transform transform hover:scale-110 hover:shadow-lg duration-300 border-2 ${
                          selectedImage === image
                            ? "border-red-500"
                            : "border-transparent"
                        }`}
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </div>
                  <button className="bg-gray-200 p-2 rounded h-[30px] w-full flex justify-center items-center text-xl opacity-80">
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
                <div className="relative pt-[14px]">
                  <img
                    src={selectedImage}
                    alt="Main product"
                    className="w-[400px] h-auto object-cover"
                  />
                  <span className="absolute mt-[14px] top-0 right-0 bg-red-500 text-white px-2 py-1 text-sm">
                    -19%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-[26px] font-normal uppercase">
                  MIZUNO ALPHA PRO AS - P1GD236409
                </h1>
                <span className="text-gray-500 uppercase">XÁM-TRẮNG</span>
              </div>
              <ul className="relative flex gap-6">
                <li>
                  Loại:{" "}
                  <span className="text-gray-500 text-sm">
                    Giày Cỏ Nhân Tạo (Turf)
                  </span>
                </li>
                <li className="befores">
                  Mã SP:{" "}
                  <span className="text-gray-500 text-sm">P1GD236409</span>
                </li>
              </ul>
              <div className="mt-6">
                <div className="flex items-center space-x-4">
                  <span className="text-red-500 text-4xl font-bold">
                    2,750,000₫
                  </span>
                  <span className="text-2xl text-gray-400 line-through">
                    3,390,000₫
                  </span>
                  <span className="text-green-500">(Tiết kiệm 640,000₫)</span>
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <p className="text-base">Trả sau đến 12 tháng với </p>
                  <a href="./ProductPage.tsx">
                    <img src={logomini} alt="" />
                  </a>
                </div>
                <p className="max-w-80 mt-6 bg-blue-500 text-white px-4 py-2 rounded tracking-tight">
                  Giảm đến 100K khi thanh toán qua Fundiin.{" "}
                  <a href="./ProductPage.tsx" className="underline italic ml-1">
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
                      className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
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
                <div className="flex-1 flex items-center ">
                  <button className="px-[16px] py-[6px] border border-gray-300 rounded text-2xl">
                    -
                  </button>
                  <input
                    className="w-14 h-8 leading-8 text-center border-none text-2xl font-semibold"
                    defaultValue={1}
                  />
                  <button className="px-4 py-2 border border-gray-300 rounded text-lg">
                    +
                  </button>
                </div>
                <button className="bg-red-500 text-white px-6 py-3 rounded w-full flex-1 text-lg">
                  Thêm vào giỏ
                </button>
              </div>
              <div className="mt-4">
                <button className=" bg-black text-white px-6 py-3 rounded w-full text-lg">
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
                        Tặng kèm vớ dệt kim và balô chống thấm đựng giày cho mỗi
                        đơn hàng Giày đá bóng.
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
                        COD Toàn quốc | Freeship toàn quốc khi khách hàng thanh
                        toán chuyển khoản trước với đơn hàng Giày đá bóng trên 1
                        triệu.
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
          </div>
        </div>
      </div>
    </div>
  );
};

// const ProductPage = () => {
//   const images = [
//     "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
//     "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
//     "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
//     "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
//     "https://product.hstatic.net/200000278317/product/thanh-hung-futsal-giay-da-bong-adidas-f50-league-tf-if1335-do-cam-5_b1f50c8362474b6a90434df301028fbf_master.jpg",
//   ];

//   const [selectedImage, setSelectedImage] = useState(images[0]);

//   const handleImageClick = (image: React.SetStateAction<string>) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex gap-7">
//           <div className="flex-1 max-w-[50%] px-3">
//             <div className="flex space-x-4">
//               {/* Scrollable Thumbnails Carousel with Arrows */}
//               <div className="flex flex-col items-center space-y-2">
//                 {/* Previous Button */}
//                 <button className="bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out hover:shadow-xl">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-gray-700"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M5 15l7-7 7 7"
//                     />
//                   </svg>
//                 </button>
//                 <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg bg-white">
//                   <div className="flex flex-col space-y-4 overflow-auto h-96 p-2 hide-scrollbar transition-all duration-300 transform">
//                     {images.map((image, index) => (
//                       <img
//                         key={index}
//                         src={image}
//                         alt={`Thumbnail ${index + 1}`}
//                         className={`w-24 h-24 rounded-lg object-cover cursor-pointer transition-all transform hover:scale-110 hover:shadow-lg duration-300 border-4 ${
//                           selectedImage === image
//                             ? "border-red-500"
//                             : "border-transparent"
//                         }`}
//                         onClick={() => handleImageClick(image)}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 {/* Next Button */}
//                 <button className="bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out hover:shadow-xl">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="w-6 h-6 text-gray-700"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               {/* Main Product Image with Advanced Zoom Lens */}
//               <div className="relative group">
//                 <div className="w-[500px] h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={selectedImage}
//                       alt="Main product"
//                       className="w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-[1.08] group-hover:brightness-105"
//                     />
//                     {/* Zoom Lens Effect */}
//                     <div className="absolute inset-0 hidden group-hover:block transition-all duration-500 ease-in-out">
//                       <div
//                         className="absolute w-[150px] h-[150px] rounded-full border-4 border-gray-300 transform scale-[1.5] bg-transparent mix-blend-multiply"
//                         style={{
//                           backgroundImage: `url(${selectedImage})`,
//                           backgroundSize: "800px 800px",
//                           backgroundPosition: "center",
//                           filter: "brightness(110%)",
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <span className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">
//                   -19%
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1">
//             <h1 className="text-2xl font-bold uppercase mb-2">
//               MIZUNO ALPHA PRO AS - P1GD236409
//             </h1>
//             <span className="text-gray-500 uppercase mb-4">XÁM-TRẮNG</span>
//             <ul className="list-none mb-4">
//               <li>
//                 Loại:{" "}
//                 <span className="text-gray-500 text-sm">
//                   Giày Cỏ Nhân Tạo (Turf)
//                 </span>
//               </li>
//               <li>
//                 Mã SP: <span className="text-gray-500 text-sm">P1GD236409</span>
//               </li>
//             </ul>
//             <div className="flex items-center mb-4">
//               <span className="text-red-500 text-3xl font-bold mr-4">
//                 2,750,000₫
//               </span>
//               <span className="text-2xl text-gray-400 line-through mr-4">
//                 3,390,000₫
//               </span>
//               <span className="text-green-500">(Tiết kiệm 640,000₫)</span>
//             </div>
//             <div className="flex items-center mb-4">
//               <p className="text-base mr-2">Trả sau đến 12 tháng với</p>
//               <a href="./ProductPage.tsx">
//                 <img src={logomini} alt="" />
//               </a>
//             </div>
//             <p className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
//               Giảm đến 100K khi thanh toán qua Fundiin.{" "}
//               <a href="./ProductPage.tsx" className="underline italic ml-1">
//                 Xem thêm
//               </a>
//             </p>
//             <div className="mb-6">
//               <h2 className="text-lg font-semibold text-slate-400">
//                 Kích thước:
//               </h2>
//               <div className="flex space-x-2 mt-2">
//                 {[
//                   "38",
//                   "38.5",
//                   "39",
//                   "40",
//                   "40.5",
//                   "41",
//                   "42",
//                   "42.5",
//                   "43",
//                 ].map((size) => (
//                   <button
//                     key={size}
//                     className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//               <div className="mt-3">
//                 <ul className="flex gap-6">
//                   <li>
//                     <a
//                       href="./ProductPage.tsx"
//                       className="underline text-sm tracking-tight"
//                     >
//                       Bảng quy đổi size
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="./ProductPage.tsx"
//                       className="underline text-sm tracking-tight"
//                     >
//                       Hướng dẫn đo size giày
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="flex items-center gap-5 mb-4">
//               <span className="text-lg text-slate-400">Số lượng:</span>
//               <div className="flex items-center">
//                 <button className="px-4 py-2 border border-gray-300 rounded text-lg">
//                   -
//                 </button>
//                 <input
//                   className="w-14 h-8 text-center border border-gray-300 rounded text-2xl mx-2"
//                   defaultValue={1}
//                 />
//                 <button className="px-4 py-2 border border-gray-300 rounded text-lg">
//                   +
//                 </button>
//               </div>
//             </div>
//             <button className="bg-red-500 text-white px-6 py-3 rounded w-full text-lg mb-4">
//               Thêm vào giỏ
//             </button>
//             <button className="bg-black text-white px-6 py-3 rounded w-full text-lg">
//               MUA NGAY
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default ProductPage;
