import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    alert("Form submitted! (This is a demo, no backend connected.)");
    setFormData({ name: "", email: "", message: "" });
  };
 
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-6">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-500 rounded-lg text-white hover:scale-105 transition transform glow"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
