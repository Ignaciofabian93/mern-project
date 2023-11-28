import React from "react";
import Navbar from "../Navigation/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen gradient-1">
      <div>
        <Navbar />
      </div>
      <div className="pl-[100px] pr-[50px] py-8 h-screen">{children}</div>
    </main>
  );
};

export default PageLayout;
