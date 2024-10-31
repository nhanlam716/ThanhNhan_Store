import React from "react";
import { Link } from "react-router-dom";

interface IInput {
  link: string;
}
const InputLink = ({ link }: IInput) => {
  return (
    <>
      <Link
        className="border-solid border-[1px] border-[#ccc] p-[14px] text-base font-normal tracking-tighter mr-3"
        to="/"
      >
        {link}
      </Link>
    </>
  );
};

export default InputLink;
