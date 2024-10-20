"use client";
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import React,{ useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/images/LOGO2.jpg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-purple-950 text-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex justify-end items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="mr-2 h-8 w-auto sm:h-10 md:h-12 lg:h-14"
          />
          <h1 className="text-xl ml-2">NextWave Dev</h1>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="block lg:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Button>
        </div>

        {/* Links - hidden on mobile, visible on large screens */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 space-y-2 lg:space-y-0 text-center lg:text-left mt-4 lg:mt-0`}
        >
          {/* <Button variant="outline">Button</Button> */}
          <li className="hover:text-xl hover:text-white">
            <Link href="/">Portfolio</Link>
          </li>
          <li className="hover:text-xl hover:text-white">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-xl hover:text-white">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:text-xl hover:text-white">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-xl hover:text-white">
            <Link href="/contact">Contact Me</Link>
          </li>
          <Switch />
        </ul>
      </div>
    </nav>
  );
}
