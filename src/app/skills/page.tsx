import React from 'react';
import { Progress } from '@/components/ui/progress'; // Progress is from ShadCN UI

const Skills = () => {
  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <header className="mt-20 max-h-max flex items-center justify-start text-yellow-600">
        <h1 className="pl-10 text-6xl">Skills</h1>
      </header>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto py-8 px-4 text-zinc-500">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Proficiency in Various Languages</h2>
        
        <div className="space-y-6 text-lime-600">
          {/* HTML5*/}
          <div>
            <p className="text-lg md:text-xl mb-2 ">HTML</p>
            <Progress value={70} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* CSS3 basic*/}
          <div>
            <p className="text-lg md:text-xl mb-2">CSS</p>
            <Progress value={75} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* JavaScript*/}
          <div>
            <p className="text-lg md:text-xl mb-2">JavaScript</p>
            <Progress value={70} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* TypeScript*/}
          <div>
            <p className="text-lg md:text-xl mb-2">TypeScript</p>
            <Progress value={65} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* Tailwind CSS*/}
          <div>
            <p className="text-lg md:text-xl mb-2">Tailwind CSS</p>
            <Progress value={75} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* React*/}
          <div>
            <p className="text-lg md:text-xl mb-2">React</p>
            <Progress value={75} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* Next.js*/}
          <div>
            <p className="text-lg md:text-xl mb-2">Next.js</p>
            <Progress value={80} className="w-full md:w-2/3 mx-auto" />
          </div>

          {/* Next.js using Figma */}
          <div>
            <p className="text-lg md:text-xl mb-2">Figma Next.js</p>
            <Progress value={30} className="w-full md:w-2/3 mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

