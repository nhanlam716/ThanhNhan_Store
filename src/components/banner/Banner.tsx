import React from "react";
import { Link } from "react-router-dom";
interface IImage {
  id?: string;
  image?: string;
  description?: string;
  href?: string;
}
const Banner = ({ id, image, description, href }: IImage) => {
  return (
    <div className="max-w-6xl my-0 mx-auto">
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <div className="block relative hover-zoom cursor-pointer">
          <Link to={href!}>
            <img src={image} alt="banner" className="mb-1" />
            <span className="text-[#288ad6] text-lg">{description}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
