import { FloatingLabel } from "flowbite-react";
import React from "react";

export interface IInput {
  label?: string;
  placeholder?: string;
  types?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
}

const Input = ({
  label,
  placeholder,
  types,
  onBlur,
  onChange,
  value,
  name,
}: IInput) => {
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
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
      />
    </div>
  );
};

export default Input;
