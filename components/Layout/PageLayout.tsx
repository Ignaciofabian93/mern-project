import React from "react";
import Navbar from "../Navigation/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="pl-[100px] pt-[120px]">{children}</div>
    </main>
  );
};

export default PageLayout;
