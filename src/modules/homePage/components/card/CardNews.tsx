import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="#">
            <img src={image} alt="ảnh news" />
          </Link>
          <div className="px-6 py-3">
            <h4 className="h4 text-xl font-bold">
              <Link to="#">{description}</Link>
            </h4>
            <p className="text-sm">
              <Link to="#">{param}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
