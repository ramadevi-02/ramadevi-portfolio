import React from "react";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-20 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        Education
      </h2>
      <div className="p-6 rounded-2xl bg-gray-900 shadow-lg glow">
        <h3 className="text-xl font-bold text-gray-200 mb-2">B.Tech</h3>
        <p className="text-gray-400 mb-1">Vell Tech University, Chennai</p>
        <p className="text-gray-400">Graduated: 2023</p>
      </div>
    </section>
  );
};

export default Education;
