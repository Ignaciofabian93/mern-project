import React from "react";
import Image from "next/image";
import { homeIcon, logoutIcon, userIcon, logomdIcon } from "@/constants/icons";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import useSession from "@/hooks/useSession";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { handleLogout } = useSession();
  const path = usePathname();

  const menuItems = [
    {
      icon: homeIcon,
      title: "Home",
      href: "/home",
    },
    {
      icon: userIcon,
      title: "Account",
      href: "/account",
    },
  ];

  return (
    <nav className="nav w-[60px] bg-primary fixed left-2 top-10 z-20 nav rounded-md shadow-xl shadow-primary/30 transition-all duration-1000 ease-in-out">
      <div className="h-full flex flex-col items-center justify-around pb-12">
        <div className="flex items-center justify-around w-full cursor-pointer">
          <Image src={logomdIcon} alt="logo" width={35} height={35} priority />
        </div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-primary/60 w-[60%] flex justify-center items-center h-[40px] rounded-md hover:bg-dark/60 transition-all duration-500 ease-in-out"
          >
            <Tooltip
              content={item.title}
              key={item.href}
              placement={"right"}
              className="bg-background"
            >
              <Link
                href={item.href}
                style={{
                  backgroundColor: path.includes(item.href) ? "#7d98a1" : "",
                }}
                className="flex items-center justify-around w-full bg-[#2e3251] p-[4px] rounded-md hover:bg-[#34395c] transition-all duration-300 ease-in-out"
              >
                <Image src={item.icon} alt={item.title} width={30} height={30} />
              </Link>
            </Tooltip>
          </div>
        ))}
        <div className="bg-dark/30 w-[60%] flex justify-center items-center mt-16 h-[40px] rounded-md hover:bg-dark/60 transition-all duration-500 ease-in-out">
          <Tooltip content={"Logout"} placement={"right"} className="bg-background">
            <div
              onClick={handleLogout}
              className="flex items-center justify-around w-full cursor-pointer bg-[#2e3251] p-[4px] rounded-md hover:bg-[#34395c] transition-all duration-300 ease-in-out"
            >
              <Image src={logoutIcon} alt="logout" width={30} height={30} />
            </div>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
