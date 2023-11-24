import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  desc1: string;
  desc2: string;
  onClick: () => void;
}

const CustomCard: React.FC<CardProps> = ({ image, desc1, desc2, onClick }) => {
  return (
    <Card
      isFooterBlurred
      className="w-[400px] h-[250px] col-span-12 sm:col-span-5 hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={image}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-sm font-semibold">{desc1}</p>
          <p className="text-black text-tiny">{desc2}</p>
        </div>
        <Button
          className="text-tiny bg-dark text-white"
          radius="full"
          size="sm"
          onClick={onClick}
        >
          See
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
