import React from "react";

interface ITitle {
  title: string;
}

const Title = ({ title }: ITitle) => {
  return (
    <div className="relative mb-40 flex justify-center">
      <h1 className="text-3xl uppercase text-center font-medium mt-14 absolute after:block after:bg-black after:h-[2px] after:w-[90%] after:mt-[8px] after:ml-5">
        {title}
      </h1>
    </div>
  );
};

export default Title;
