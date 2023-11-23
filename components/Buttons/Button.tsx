import React from "react";
import { Button } from "@nextui-org/react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      color="default"
      onClick={onClick}
      className="mt-4 bg-dark text-white hover:bg-dark transition-all duration-300 ease-in-out"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
