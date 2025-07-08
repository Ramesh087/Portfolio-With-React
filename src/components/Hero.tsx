import React from "react";
import { Link } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section 
    id="hero"
    className="min-h-screen w-full bg-gray-100 dark:bg-[#111] flex items-center justify-center">
  <div className="w-full max-w-7xl px-4 mx-auto">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Ramesh Potaliya
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Frontend Developer • React & TypeScript Enthusiast
      </p>
      <Link
        to="projects"
        smooth
        duration={500}
        className="cursor-pointer inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        View My Work
      </Link>
    </div>
  </div>
</section>


  );
};

export default Hero;
