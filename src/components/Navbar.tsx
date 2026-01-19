import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-gray-900/50 z-50 shadow-lg p-4 flex justify-end items-center">
     

      {/* Right Nav Links + Resume Button */}
      <div className="space-x-4 flex items-center">
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#education" className="hover:text-purple-400 transition">Education</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>

        <a
          href="https://drive.google.com/file/d/1Kjops6Y_HbJF-oD4LsWG0jfOtSoeIq7B/view?usp=drivesdk"
          target="_blank"
          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg glow transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
