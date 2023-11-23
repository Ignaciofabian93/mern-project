import React from "react";
import { backgroundImage } from "@/constants/images";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center relative">
      <div>
        <Image
          src={backgroundImage}
          alt="background-image"
          className="w-full h-full absolute top-0 left-0"
        />
      </div>
      <div className="absolute z-20 w-full h-full px-12 py-10">{children}</div>
    </main>
  );
};

export default Layout;
