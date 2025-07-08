import React from "react";
import projects from "../data/Projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full py-16 bg-gray-50 dark:bg-[#111] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
