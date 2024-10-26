import React from "react";

interface IInputTitle {
  title: string;
}

const InputTitle = ({ title }: IInputTitle) => {
  return (
    <div className="border-b-2 border-[#f0eeee] pb-3">
      <h2 className="text-3xl font-semibold">{title}</h2>
    </div>
  );
};

export default InputTitle;
