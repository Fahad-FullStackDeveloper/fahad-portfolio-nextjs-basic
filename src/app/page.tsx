"use client";
import React from "react";
import Image from "next/image";
import Profile from "./images/profile pic.png";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col md:flex-row justify-between items-center flex-grow px-4 md:px-32 py-10">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-center text-lime-600">
            M Fahad Khakwani
            <h3 className="text-3xl md:text-2xl font-thin text-lime-600 mt-4 text-center md:text-center">
              Web & App Developer <br />
              UI / UX Developer <br />I focus on: Building scalable and
              fast-loading web applications. Ensuring mobile-first, fully
              responsive designs across devices. Seamless integration of
              advanced UI frameworks for a smooth user experience. Leveraging
              Next.js for server-side rendering and SEO optimization to drive
              business results.
            </h3>
          </h1>
        </div>

        <div className="md:w-2/2 flex justify-center md:justify-end mt-5 md:mt-10">
          <Image
            className="rounded-xl"
            src={Profile}
            alt="Portfolio Image"
            width={400}
            height={400}
          />
        </div>
        <br />
      </main>
      <About /> <br />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
      <Contact />
      <footer className="w-full bg-gray-800 text-white p-4 mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
