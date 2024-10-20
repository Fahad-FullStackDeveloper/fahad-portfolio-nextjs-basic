import React from "react";
import Image from "next/image";
import Project1 from "@/app/images/projects/Static Resume.png";
import Project2 from "@/app/images/projects/Dynamic Resume.png";
import Project3 from "@/app/images/projects/IdCard.png";

export default function Projects() {
  return (
    <div>
      <header className="mt-20 h-20 flex items-center justify-start text-yellow-600">
        <h1 className="pl-10 text-6xl">My Projects</h1>
      </header>
      <div className="rounded-2xl flex justify-center mt-5 text-2xl font-bold text-center ">
        <a href="https://hackathons-milestone1.vercel.app/"> Vercel Link: Static Resume <Image src={Project1} alt="Project1: Stactic Resume" className="rounded-3xl w-80 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
        <a href="https://hackathons-milestone3.vercel.app/"> Vercel Link: Dynamic Resume <Image src={Project2} alt="Project1: Dynamic Resume" className="rounded-3xl w-96 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
        <a href="https://class-student-id-card.vercel.app/">Vercel Link: GIAIC ID Card<Image src={Project3} alt="Project1: Student ID Card" className="rounded-3xl w-80 m-10 hover:scale-105 shadow-2xl hover:shadow-purple-800"/></a>
      </div>
    </div>
  );
}
