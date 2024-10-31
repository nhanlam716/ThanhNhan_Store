import React from "react";

interface ICardNews {
  image: string;
  description: string;
  param: string;
}
const CardNews = ({ description, image, param }: ICardNews) => {
  return (
    <div>
      <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
        <div className="flex h-full flex-col justify-center">
          <a href="">
            <img src={image} alt="ảnh news" />
          </a>
          <div className="px-6 py-3">
            <h4 className="h4 text-xl font-bold">
              <a href="">{description}</a>
            </h4>
            <p className="text-sm">
              <a href="">{param}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
