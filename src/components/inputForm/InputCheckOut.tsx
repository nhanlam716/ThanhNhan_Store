import { TextInput } from "flowbite-react";
import React from "react";

interface IInput {
  type: string;
  placeholder: string;
}

const InputCheckOut = ({ placeholder, type }: IInput) => {
  return (
    <div>
      <div>
        <TextInput type={type} placeholder={placeholder} required />
      </div>
    </div>
  );
};

export default InputCheckOut;
