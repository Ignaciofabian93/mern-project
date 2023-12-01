import React from "react";
import { Input } from "@nextui-org/react";

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
}

const SmallInput: React.FC<InputProps> = ({
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
      className="w-[250px] h-[50px] rounded-lg shadow-sm shadow-primary/60 capitalize"
    />
  );
};

export default SmallInput;
