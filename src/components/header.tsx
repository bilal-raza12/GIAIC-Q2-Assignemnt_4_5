"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="fixed top-0 bg-[#24272A] text-white w-full z-50 h-[80px] backdrop-blur-3xl border-b-2 border-[#838954]">
        <div className="flex justify-between text-whitw items-center py-5">
          <div className="text-3xl hover:cursor-pointer transform transition-transform duration-300 hover:scale-105 ml-2 border-t-2 border-white border-b-2 border-white ">
            Blog<span className="text-[#dff83c]">Insights</span>
          </div>
          <div className="hidden md:block ">
            <ul className="flex justify-between gap-4  ">
              <Link href={"/"}>
              <li className="px-4 hover:cursor-pointer hover:text-yellow-200">
                Home
              </li>
              </Link>
              <Link href={"/about"}>
              <li className="px-4 hover:cursor-pointer  hover:text-yellow-200">
                About
              </li>
              </Link>
              <Link href={"/contact"}>
              <li className="px-4 hover:cursor-pointer   hover:text-yellow-200">
                Contact
              </li>
              </Link>
            </ul>
          </div>

          <div className="md:hidden text-black" onClick={() => toggle()}>
            {isOpen ? (
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                    fill="#ffffff"
                  />{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#fffafa"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
            )}
          </div>
          {isOpen && (
            <ul className="flex flex-col md:flex-row absolute md:static top-[100%] items-center md:justify-end text-white w-full bg-[#24272A]">
              <li className="m-4 hover:cursor-pointer active:underline  hover:text-yellow-200">
                <Link href="/">Home</Link>
              </li>
              <li className="m-4 hover:cursor-pointer active:underline  hover:text-yellow-200">
                <Link href="/about">About</Link>
              </li>
              <Link href="/contact">
                <li className="m-4 hover:cursor-pointer active:underline  hover:text-yellow-200">
                  Contact
                </li>
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
