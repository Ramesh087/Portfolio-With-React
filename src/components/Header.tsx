import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; 

import logoImg from '/Rpsvg.jpg'; // Adjust path if needed


const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });//typescript

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
      <div className="flex items-center gap-2">
         <img
         src={logoImg}
         alt="Logo"
         className="w-7 h-7 rounded-full shadow-md object-cover"
        />
          <h1 className="text-xl font-bold">RameshP</h1>
        </div>
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





