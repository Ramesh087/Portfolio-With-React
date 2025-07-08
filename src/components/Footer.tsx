import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#111] py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} Ramesh Potaliya. All rights reserved.
    </footer>
  );
};

export default Footer;
