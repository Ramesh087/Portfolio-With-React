import React from "react";
import type { Projects } from "../data/Projects";

const ProjectCard: React.FC<Projects> = ({ title, description, image, github, demo }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition p-4 bg-white dark:bg-[#1a1a1a]">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
        loading="lazy"
      />
      <h3 className="text-xl font-semibold mt-4 text-black dark:text-white">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 my-2">{description}</p>
      <div className="flex gap-4 mt-3">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          🔗 Live
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:underline"
        >
          💻 Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
