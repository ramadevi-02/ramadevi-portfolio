import React from "react"
  const  Skills: React.FC = () => {
  const frontend = ["React.js", "JavaScript", "HTML5", "CSS3", "Sass", "Bootstrap", "Redux", "Responsive Design", "UI/UX", "React Router"];
  const backend = ["Core Java", "OOPs", "Collections", "JDBC", "SQL (MySQL)", "Database Design", "CRUD Operations", "Error Handling"];
  const database = ["MySQL", "MongoDb", "Databas Desgign", "CRUD Operations"];
  const tools = ["Git", "GitHub", "VS Code", "Eclipse", "ChatGPT"];

  const renderList = (list: string[]) => list.map((item) => (
    <span key={item} className="inline-block bg-gray-800 px-3 py-1 rounded-full m-1 hover:bg-purple-500 transition">
      {item}
    </span>
  ));

  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">Skills</h2>

      <h3 className="text-xl font-semibold text-gray-300 mt-4">Frontend</h3>
      <div className="flex flex-wrap mt-2">{renderList(frontend)}</div>

      <h3 className="text-xl font-semibold text-gray-300 mt-4">Backend</h3>
      <div className="flex flex-wrap mt-2">{renderList(backend)}</div>

      <h3 className="text-xl font-semibold text-gray-300 mt-4">Database</h3>
      <div className="flex flex-wrap mt-2">{renderList(database)}</div>

      <h3 className="text-xl font-semibold text-gray-300 mt-4">Tools & AI</h3>
      <div className="flex flex-wrap mt-2">{renderList(tools)}</div>
    </section>
  );
};

export default Skills;
