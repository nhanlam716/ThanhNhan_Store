import { TextInput } from "flowbite-react";
import { IInput } from "./Input";

const InputCheckOut = ({
  placeholder,
  types,
  onBlur,
  onChange,
  value,
  name,
}: IInput) => {
  return (
    <div>
      <div>
        <TextInput
          type={types}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          required
        />
      </div>
    </div>
  );
};

export default InputCheckOut;
