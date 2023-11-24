import React, { useState } from "react";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import {
  menuIcon,
  homeIcon,
  logoutIcon,
  settingsIcon,
  userIcon,
  logomdIcon,
} from "@/constants/icons";
import Link from "next/link";
import useSession from "@/hooks/useSession";

const Navbar = () => {
  const { userData } = useAppSelector((state) => state.user);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { handleLogout } = useSession();

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const menuItems = [
    {
      icon: homeIcon,
      title: "Home",
      href: "/home",
    },
    {
      icon: settingsIcon,
      title: "Settings",
      href: "/settings",
    },
    {
      icon: userIcon,
      title: "Account",
      href: "/account",
    },
  ];

  return (
    <nav
      className="nav w-[60px] fixed left-2 top-10 z-20 nav-filter rounded-md shadow-xl shadow-primary/30 transition-all duration-1000 ease-in-out"
      style={{ width: openSidebar ? "160px" : "60px" }}
    >
      <div className="w-full h-[50px] flex items-center justify-center">
        <Image
          src={menuIcon}
          alt="menu-icon"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="h-full flex flex-col items-center justify-evenly pb-12">
        <div className="flex items-center justify-around w-full cursor-pointer">
          <Image src={logomdIcon} alt="logo" width={45} height={45} />
        </div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-secondary w-[80%] flex justify-center items-center h-[50px] rounded-md hover:bg-primary transition-all duration-500 ease-in-out"
          >
            <Link
              href={item.href}
              className="flex items-center justify-around w-full"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={30}
                height={30}
                className="icon hover:invert-0"
              />
              {openSidebar && (
                <span
                  className="hover:text-white transition-all duration-500 ease-in-out"
                  style={{
                    opacity: openSidebar ? 1 : 0,
                  }}
                >
                  {item.title}
                </span>
              )}
            </Link>
          </div>
        ))}
        <div className="bg-secondary w-[80%] flex justify-center items-center h-[50px] rounded-md hover:bg-primary transition-all duration-500 ease-in-out">
          <div
            onClick={handleLogout}
            className="flex items-center justify-around w-full cursor-pointer"
          >
            <Image
              src={logoutIcon}
              alt="logout"
              width={30}
              height={30}
              className="icon hover:invert-0"
            />
            {openSidebar && (
              <span
                className="hover:text-white transition-all duration-1000 ease-in-out"
                style={{
                  opacity: openSidebar ? 1 : 0,
                }}
              >
                Logout
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
