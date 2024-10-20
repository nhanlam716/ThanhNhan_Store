import React from "react";
import logomini from "../../assets/image/logo_transparent.png";
interface IProduct {
  image: string;
  name: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  installment?: string;
  badge: string;
}
const Card = ({
  image,
  name,
  originalPrice,
  discountedPrice,
  discount,
  installment,
  badge,
}: IProduct) => {
  return (
    <div className=" bg-white shadow-sm rounded-lg overflow-hidden duration-300">
      {/* Image Section */}
      <a href="./Card.tsx">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />

          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-[#fff] text-[red] text-lg px-2 py-1 rounded">
            {discount}
          </div>

          {/* New Badge */}
          <div className="absolute top-2 right-2 bg-red-600 text-white text-lg px-2 py-1 rounded">
            {badge}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-sm">{name}</h3>

          <div className="flex items-center space-x-2 mt-2">
            <span className="text-red-600 font-bold text-lg">
              {discountedPrice}
            </span>
            <span className="text-gray-500 text-sm line-through">
              {originalPrice}
            </span>
          </div>

          <div className="flex gap-3 items-center">
            {installment && (
              <p className="text-blue-500 text-sm mt-1">{installment}</p>
            )}
            <img src={logomini} alt="..." className="w-16 h-4" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
