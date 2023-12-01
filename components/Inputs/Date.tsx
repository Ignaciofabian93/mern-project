import React from "react";

interface DateInputProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Date: React.FC<DateInputProps> = ({ name, value, onChange }) => {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      className="w-[250px] h-[50px] rounded-[4px] px-3"
    />
  );
};

export default Date;
