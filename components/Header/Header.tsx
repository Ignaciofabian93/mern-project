import React from "react";
import { useAppSelector } from "@/store/store";
import { usePathname } from "next/navigation";

const Header = ({ children }: { children: React.ReactNode }) => {
  const { userData } = useAppSelector((state) => state.user);
  const path = usePathname();

  const pageTitle = path ? path.split("/")[1] : "";

  return (
    <div>
      <div className="flex items-center justify-between mb-16">
        <h2 className="text-2xl font-serif capitalize">
          {pageTitle === "home" ? "Dashboard" : pageTitle}
        </h2>
        <h2 className="text-xl italic font-serif capitalize">{`${userData.name} ${userData.lastname}`}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
