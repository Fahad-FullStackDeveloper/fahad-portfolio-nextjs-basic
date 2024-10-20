import React from "react";
import Image from "next/image";
import Github from "@/app/images/icons/github-512px.png";
import LinkedIn from "@/app/images/icons/linkedIn-circle-512px.png";
import Discord from "@/app/images/icons/discord-240px.png";
import Facebook from "@/app/images/icons/facebook-512px.png";
import Whatsapp from "@/app/images/icons/whatsapp-512px.png";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

const Footer = () => {
  return (
    <div className="flex-row relative w-full bottom-0 bg-purple-950 h-28 ">
      <div className="text-3xl flex justify-center m-0 p-1 text-yellow-400">
        <div className="text-base flex items-center justify-center m-2 pr-3 text-white ">
          Registered in 2024&reg;
        </div>
        <p>NextWave Dev</p>
      </div>
      <div className="flex justify-end items-end pr-5">
        <Switch />
      </div>
      <div className="flex justify-center items-center w-full space-x-10">
        <Link href="https://github.com/Fahad-FullStackDeveloper">
          <Image src={Github} alt="Github" className="h-10 w-10" />
        </Link>
        <Link href="https://www.linkedin.com/in/fahad-khakwani-3aa655265/">
          <Image src={LinkedIn} alt="LinkedIn" className="h-10 w-10" />
        </Link>
        <Link href="https://discord.com/your-profile">
          <Image src={Discord} alt="Discord" className="h-10 w-10" />
        </Link>
        <Link href="https://facebook.com/your-profile">
          <Image src={Facebook} alt="Discord" className="h-10 w-10" />
        </Link>
        <Link href="https://wa.me/your-phone-number">
          <Image src={Whatsapp} alt="Whatsapp" className="h-10 w-10" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
