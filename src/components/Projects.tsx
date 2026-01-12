import React, { useState } from "react";

interface Project {
  title: string;
  status: string;
  category: string;
  description: string;
  techStack: string;
}

const projectList: Project[] = [
  {
    title: "Lilypad",
    status: "Completed",
    category: "Web App",
    description:
      "Developed a responsive e-commerce web application for electric vehicle products using React.js, Java, MySQL. Features include product listing, search, authentication, and order management.",
    techStack: "React.js, Java, REST APIs, MySQL, MongoDB, HTML, CSS, JS, Git",
  },
  {
    title: "Cardinal Life Sciences",
    status: "Completed",
    category: "Web App",
    description:
      "Developed a Product Catalog System to manage lab equipment, chemicals, and consumables. Implemented CRUD, search, REST APIs using React.js, Redux, Java, MySQL, MongoDB.",
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
              {proj.title} <span className="text-sm text-green-400">({proj.status})</span>
            </h3>
            <p className="text-gray-300 mb-2">{proj.description}</p>
            <p className="text-gray-400 text-sm">
              <strong>Tech Stack:</strong> {proj.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
