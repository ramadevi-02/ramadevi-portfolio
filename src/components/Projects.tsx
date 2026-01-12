import React, { useState } from "react";

interface Project {
  title: string;
  status: string;
  category: string;
  description?: string;
  features?: string[];
  techStack: string;
}

const projectList: Project[] = [
  {
    title: "Lilypad",
    status: "Completed",
    category: "Web App",
    description:
      "A web application for selling electric vehicle products online. Users can browse products, search and filter items, add them to cart, and place orders.",
    features: [
      "Developed responsive UI using React.js and managed state with Redux",
      "Implemented backend logic and REST APIs using Java to handle products, users, and orders",
      "Integrated MySQL/MongoDB databases for efficient data storage and retrieval",
    ],
    techStack: "React.js, Redux, Java, REST APIs, MySQL, MongoDB, HTML, CSS, JS, Git",
  },
  {
    title: "Cardinal Life Sciences",
    status: "Completed",
    category: "Web App",
    description:
      "A product management system for a life sciences company to organize and manage laboratory equipment, chemicals, and consumables.",
    features: [
      "Built frontend components using React.js and Redux",
      "Implemented backend logic and REST APIs using Java",
      "Integrated MySQL/MongoDB databases for efficient data storage",
    ],
    techStack: "React.js, Redux, Java, REST APIs, MySQL, MongoDB, HTML, CSS, JS, Git",
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Web App"];

  const filteredProjects =
    filter === "All"
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        Projects
      </h2>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full transition ${
              filter === cat
                ? "bg-purple-500 text-white glow"
                : "bg-gray-800 text-gray-300 hover:bg-purple-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.title}
            className="p-6 rounded-2xl bg-gray-800 backdrop-blur-sm shadow-lg hover:scale-105 transition transform glow"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              {proj.title}{" "}
              <span className="text-sm text-green-400">({proj.status})</span>
            </h3>
            <p className="text-gray-300 mb-2">{proj.description}</p>
            <ul className="list-disc list-inside text-gray-300 mb-2">
              {proj.features?.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm">
              Tech Stack: {proj.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; // <- This fixes your import error
