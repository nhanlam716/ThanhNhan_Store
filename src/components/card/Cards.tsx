import React from "react";
import logomini from "../../assets/image/logo_transparent.png";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types/types";
import { formatPrice } from "../../utils/helper";

const Card = ({
  id,
  image,
  name,
  originalPrice,
  discountedPrice,
  discount,
  installment,
  badge,
  codeSP,
  color,
  shoeType,
}: IProduct) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-white shadow-sm rounded-lg overflow-hidden duration-300">
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/productPage/${id}`)}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-60 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />

          <div className="absolute top-2 left-2 bg-[#fff] text-[red] text-lg px-2 py-1 rounded">
            {discount}
          </div>

          <div className="absolute top-2 right-2 bg-red-600 text-white text-lg px-2 py-1 rounded">
            {badge}
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-sm">
            {name} - {codeSP} - {color}
          </h3>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-600 font-bold text-lg">
              {formatPrice(discountedPrice)}
            </span>
            <span className="text-gray-500 text-sm line-through">
              {originalPrice}
            </span>
          </div>

          <div className="flex gap-3 items-center">
            {installment && (
              <p className="text-blue-500 text-sm mt-1">
                Trả sau {installment} x2 kỳ
              </p>
            )}
            <img src={logomini} alt="..." className="w-16 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
