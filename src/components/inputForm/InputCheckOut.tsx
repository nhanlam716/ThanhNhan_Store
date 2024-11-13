import { TextInput } from "flowbite-react";
import React from "react";

interface IInput {
  type: string;
  placeholder?: string;
  children?: React.ReactNode;
}

const InputCheckOut = ({ placeholder, type, children }: IInput) => {
  return (
    <div>
      <div>
        <TextInput type={type} placeholder={placeholder} required>
          {children}
        </TextInput>
      </div>
    </div>
  );
};

export default InputCheckOut;
