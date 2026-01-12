import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center rounded-3xl m-6 md:m-20 shadow-lg glow">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let’s Build Something Amazing Together
      </h2>
      <p className="text-gray-200 mb-6">
        I’m always excited to work on Java Full Stack projects. Got an idea or an opportunity? Let’s connect!
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition transform glow"
      >
        Contact Me
      </a>
    </section>
  );
};

export default CTA;
