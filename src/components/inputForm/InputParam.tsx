import React from "react";

interface IParam {
  description?: string;
  link?: string;
}
const InputParam = ({ description, link }: IParam) => {
  return (
    <div className="flex gap-1 mt-5">
      <p className="text-base">{description}</p>
      <span>
        <a href="./Input.tsx" className="font-bold">
          {link}
        </a>
      </span>
    </div>
  );
};

export default InputParam;
