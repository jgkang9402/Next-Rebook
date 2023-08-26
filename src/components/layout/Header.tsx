"use client";

import Image from "next/image";
import React from "react";
import MainLogo from "../../../public/mainlogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const menus = [
    { name: "책방", path: "/bookstore" },
    { name: "나의책방", path: "/mybook" },
    { name: "모두의책방", path: "/bookcommunity" },
  ];

  return (
    <header>
      <nav className="h-[10vh] bg-primary border-gray-200 px-4 py-2.5">
        <div className="h-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Link href={"/"} className="flex items-center">
              <Image
                src={MainLogo}
                width={50}
                height={50}
                priority
                alt="Rebook Logo"
              />
              <h1 className="ml-2 self-center text-xl font-semibold whitespace-nowrap text-white">
                REBOOK
              </h1>
            </Link>
            <ul className="ml-10 flex items-center font-medium ">
              {menus.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block py-2 pr-4 pl-3 rounded hover:ring-2 hover:ring-gray-300 ${
                        pathName.includes(item.path)
                          ? "text-lemon"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center">
            <Link
              href="#"
              className="text-white hover:text-lemon hover:ring-2 hover:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 hover:outline-none"
            >
              로그인
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
