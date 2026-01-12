import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">
        About Me
      </h2>
      <p className="text-gray-300 max-w-3xl mb-4">
        I am a motivated Java Full Stack Developer (Fresher) with hands-on experience in developing web applications using Java, React.js, and SQL. I have a strong understanding of core Java concepts, object-oriented programming, and database-driven application development.
      </p>
      <p className="text-gray-300 max-w-3xl">
        I have worked on real-time projects where I designed responsive and user-friendly interfaces using React, implemented application logic using Java, and managed data using SQL databases. I am comfortable writing optimized SQL queries, working with relational database schemas, and integrating front-end components with backend services. I follow best practices in coding and continuously improve my technical skills.
      </p>
    </section>
  );
};

export default About;
