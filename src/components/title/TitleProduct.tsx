import React from "react";

interface ITitle {
  title: string;
}
const TitleProduct = ({ title }: ITitle) => {
  return (
    <>
      <div>
        <h3 className="bg-black p-3 m-0 text-[#fff] uppercase font-semibold rounded flex items-center justify-between cursor-pointer">
          {title}
        </h3>
      </div>
    </>
  );
};

export default TitleProduct;
