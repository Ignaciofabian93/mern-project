import React, { useState } from "react";
import { useAppSelector } from "@/store/store";
import Image from "next/image";
import {
  menuIcon,
  homeIcon,
  logoutIcon,
  settingsIcon,
  userIcon,
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
    <header className="w-full h-[60px] fixed top-0 z-10 nav-filter">
      <nav className="w-full h-full flex justify-between items-center px-4 backdrop-blur-md">
        <div className="flex items-center">
          <Image
            src={menuIcon}
            alt="menu-icon"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <Link href={"/home"}>
            <h1 className="ml-12 text-2xl">Logo</h1>
          </Link>
        </div>
        <div>
          <p>Welcome {userData.name}</p>
        </div>
      </nav>
      <div
        className="h-[2px] bg-primary transition-all duration-1000 ease-in-out "
        style={{ width: openSidebar ? "160px" : "60px" }}
      ></div>
      <aside
        className="w-[60px] sidebar nav-filter transition-all duration-1000 ease-in-out"
        style={{ width: openSidebar ? "160px" : "60px" }}
      >
        <div className="h-full flex flex-col items-center justify-evenly">
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
      </aside>
    </header>
  );
};

export default Navbar;
