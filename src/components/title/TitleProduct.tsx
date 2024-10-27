import React from "react";

interface ITitle {
  title: string;
  fontSize?: string;
}
const TitleProduct = ({ title, fontSize }: ITitle) => {
  return (
    <>
      <div style={{ fontSize }}>
        <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded flex items-center justify-between cursor-pointer">
          {title}
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
        </h3>
      </div>
    </>
  );
};

export default TitleProduct;
