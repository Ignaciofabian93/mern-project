import React from "react";
import { Input } from "@nextui-org/react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const CustomInput: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  label,
}) => {
  return (
    <Input
      isRequired
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      className="border-2 border-primary my-4 w-96"
    />
  );
};

export default CustomInput;
