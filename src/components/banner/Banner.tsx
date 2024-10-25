import React from "react";

interface IImage {
  image: string;
  description?: string;
}
const Banner = ({ image, description }: IImage) => {
  return (
    <div className="max-w-6xl my-0 mx-auto">
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <a href="./Banner.tsx" className="block relative hover-zoom">
          <img src={image} alt="banner" />
        </a>
        <a href="./Banner.tsx" className="text-[#288ad6] text-lg">
          <span>{description}</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
