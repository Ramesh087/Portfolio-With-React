import React from "react";

const About: React.FC = () => {
  
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ];//manual levels, adjust as needed

  return (
    <section
      id="about"
      className="min-h-screen w-full py-16 bg-gray-100 dark:bg-[#111] text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio + Education */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Ramesh Potaliya</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm Ramesh, a developer from India skilled in JavaScript, React, TypeScript, Next.js, and Tailwind CSS. I enjoy crafting clean, performant, and responsive web applications with a strong focus on usability and quality code.
            </p>

            <h4 className="text-lg font-semibold mb-2">🎓 Education</h4>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>UG:</strong> B.tech in Electronics and Communication – <strong>NIT Patna, [2025]</strong>
            </p>

            <p className="text-gray-700 dark:text-gray-300">
              I love solving real-world problems with intuitive design and scalable code. Always learning, always improving.
            </p>
          </div>

          {/* Right: Skills */}
          <div>
            <h4 className="text-lg font-semibold mb-6">🛠 Skills</h4>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
