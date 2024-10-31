import React from "react";

interface IImage {
  image: string;
  description?: string;
}
const BannerRounded = ({ image, description }: IImage) => {
  return (
    <div className="max-w-4xl my-0 mx-auto">
      <div className="flex flex-col items-center justify-center gap-[6px]">
        <a
          href="./Banner.tsx"
          className="block relative hover-zoom rounded-full"
        >
          <img src={image} alt="banner" />
        </a>
        <a
          href="./Banner.tsx"
          className="mt-5 text-center font-medium opacity-85"
        >
          <span>{description}</span>
        </a>
      </div>
    </div>
  );
};

export default BannerRounded;
