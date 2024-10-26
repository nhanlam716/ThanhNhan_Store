import { FloatingLabel } from "flowbite-react";
import React from "react";

interface IInput {
  label: string;
  placeholder?: string;
  types?: string;
}

const Input = ({ label, placeholder, types }: IInput) => {
  return (
    <div className="mt-10">
      <label
        htmlFor=""
        className="uppercase font-semibold text-[#696969] block mt-3"
      >
        {label}
      </label>
      <FloatingLabel
        variant="standard"
        type={types}
        placeholder={placeholder}
        label={""}
        color="success"
        className="text-lg z-10"
      />
    </div>
  );
};

export default Input;
