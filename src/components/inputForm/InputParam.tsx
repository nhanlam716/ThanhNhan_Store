import React from "react";

interface IParam {
  description?: string;
  link?: string;
  href?: string;
}
const InputParam = ({ description, link, href }: IParam) => {
  return (
    <div className="flex gap-1 mt-5">
      <p className="text-base">{description}</p>
      <a href={href} className="font-bold">
        {link}
      </a>
    </div>
  );
};

export default InputParam;
