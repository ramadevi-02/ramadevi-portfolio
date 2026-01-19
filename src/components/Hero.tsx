import React from "react";
import javaBg from "../java1.jpeg"; // your background image
import { FaEnvelope, FaLinkedin, FaGithub, FaFolderOpen } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${javaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
      <h1 className="t*+3ext-4xl md:text-6xl font-bold mb-4 text-purple-400 animate-pulse">
          Hi, I'm Unnam Ramadevi
        </h1>
        <h2 className="text-2xl md:text-4xl mb-4 font-semibold">
          JAVA FullStack Developer
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Full stack developer focused on clean code. Currently Open to New Opportunities!
        </p>

        {/* Resume Download */}
        <a
          href="https://drive.google.com/file/d/1Kjops6Y_HbJF-oD4LsWG0jfOtSoeIq7B/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transition transform hover:scale-105"
        >
          Download Resume
        </a>

        {/* Social & Portfolio Links */}
        <div className="flex gap-4 justify-center mt-6 text-gray-300 text-2xl">
          <a
            href="mailto:unnamramadevi12@gmail.com"
            className="hover:text-purple-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/ramadevi2002"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ramadevi-02"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-100 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://ramadevi-02.github.io/ramadevi-portfolio/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaFolderOpen />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
