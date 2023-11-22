import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;
