import React from "react";

const About: React.FC = () => {
  return (
   <section
  id="about"
  className="min-h-screen w-full py-16 bg-white dark:bg-[#111] text-black dark:text-white"
>
  <div className="w-full max-w-7xl px-4 mx-auto">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a passionate frontend developer from India, focused on building clean and responsive web interfaces using modern technologies like React,
        TypeScript, and Tailwind CSS. I enjoy solving problems, learning new tools, and turning ideas into user-friendly experiences.
      </p>
    </div>
  </div>
</section>

  );
};

export default About;
