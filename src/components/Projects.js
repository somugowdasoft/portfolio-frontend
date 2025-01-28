import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";

const Projects = () => {
    // State for the selected category
    const [selectedCategory, setSelectedCategory] = useState("htmlcss");

    // Projects data
    const projects = {
        htmlcss: [
            { name: "Portfolio Website", description: "Personal portfolio using HTML & CSS" },
            { name: "Landing Page", description: "Modern landing page design" },
        ],
        react: [
            { name: "Movie App", description: "Search and filter movies using React and OMDB API" },
            { name: "E-Commerce App", description: "React app with Redux and cart functionality" },
        ],
        mern: [
            { name: "Chat App", description: "Real-time chat app with MERN stack" },
            { name: "Blog Platform", description: "Full CRUD blog app with authentication" },
        ],
    };

    // Sidebar categories
    const categories = [
        { key: "htmlcss", label: "HTML & CSS", icon: <FaHtml5 className="text-orange-500" /> },
        { key: "react", label: "React", icon: <FaReact className="text-blue-400" /> },
        { key: "mern", label: "MERN", icon: <FaNodeJs className="text-green-600" /> },
    ];

    return (
        <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="w-3/4 lg:w-1/4 md:w-96 m-auto shadow-lg p-6 mb-6 lg:mb-0">
                <h2 className="text-xl mb-6 text-white">Project Categories</h2>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`flex items-center p-4 cursor-pointer border rounded-lg transition ${selectedCategory === category.key
                                ? "border-4 border-sky-600 text-sky-600"
                                : "hover:border-3"
                                }`}
                        >
                            <div className="text-2xl mr-4">{category.icon}</div>
                            <span className="text-lg font-medium">{category.label}</span>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Project Display */}
            <main className="w-full lg:w-3/4 p-8">
                <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {projects[selectedCategory].map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border shadow-lg rounded-lg hover:shadow-xl transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <h2 className="text-xl font-bold text-white mb-2">
                                {project.name}
                            </h2>
                            <p className="text-sky-500">{project.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Projects;
