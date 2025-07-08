import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // Ensure you have react-scroll installed
const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
   <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#111] shadow-md z-50  backdrop-blur-md bg-transparent bg-white/150">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">RameshP</h1>
    <nav className="flex gap-4 text-sm items-center">
      <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-blue-500">Home</Link>
      <Link to="about" smooth duration={500} className="cursor-pointer hover:text-blue-500">About</Link>
      <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-blue-500">Projects</Link>
      <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 px-3 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  </div>
</header>

  );
};

export default Header;





