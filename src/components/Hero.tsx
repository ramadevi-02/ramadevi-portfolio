import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left p-6 md:p-20"
    >
      {/* Left */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
          Hi, I'm Unnam Ramadevi
        </h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer", 2000,
            "Full Stack Developer", 2000,
            "Developer", 2000,
          ]} 
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-semibold text-gray-300"
        />

        <p className="text-gray-400 max-w-md">
          Full stack developer focused on clean code. Currently Open to New Opportunities!
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start mt-4 text-gray-300">
          <a href="mailto:unnamramadevi12@gmail.com" className="hover:text-purple-400 transition">
            <FaEnvelope size={28} />
          </a>
          <a href="https://linkedin.com/in/ramadevi2002" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
          <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/ramadevi-02" target="_blank" rel="noreferrer" className="hover:text-gray-100 transition">
          <FaGithub size={28} />
          </a>
        </div>
      </div>

      {/* Right */}
      <div className="flex-1">
        <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500 p-1 animate-pulse">
          <img
            src="https://drive.google.com/uc?export=view&id=1-Jcvp0whkae90bbLrvu0rXj1G6kAGkgJ"
            alt="Profile"
            className="rounded-full w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
