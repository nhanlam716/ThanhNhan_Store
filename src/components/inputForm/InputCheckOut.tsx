import { TextInput } from "flowbite-react";
import React from "react";

interface IInput {
  type: string;
  placeholder?: string;
  value?: string;
}

const InputCheckOut = ({ placeholder, type, value }: IInput) => {
  return (
    <div>
      <div>
        <TextInput
          type={type}
          placeholder={placeholder}
          value={value}
          required
        />
      </div>
    </div>
  );
};

export default InputCheckOut;
