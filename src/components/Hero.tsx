import React from "react";
import { Link } from "react-scroll";
import profileImg from "/src/assets/potaliya-removebg-preview.jpg"; // Replace with your image path

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full bg-gray-100 dark:bg-[#111] flex items-center justify-center px-6"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
           Building fast <br />
          interfaces, clean code  <span className="text-blue-600">& creativity.</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
            I’m Ramesh, a developer working with JavaScript, React, TypeScript, and Next.js to create high-performance, user-friendly web applications with clean, scalable code.
          </p>
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
          >
            Connect With Me
          </Link>
        </div>

        {/* Profile image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profileImg}
            alt="Ramesh Potaliya"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
