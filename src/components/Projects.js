import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase,  FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import images from '../assets';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("frontend");

    const projects = {
        frontend: [
            {
                name: "Landing Page",
                image: `${images.landingPage}`,
                description: "Trabook Landing Page using HTML and CSS",
                tags: ["HTML", "CSS"],
                links: ["https://github.com/somugowdasoft/trabook", "https://rad-concha-d3f606.netlify.app/"]
            },
            {
                name: "Movie App",
                image: `${images.movieApp}`,
                description: "Search and filter movies using React and OMDB API",
                tags: ["React", "React Router Dom", "Tailwind CSS"],
                links: ["https://github.com/somugowdasoft/movie-search-app", "https://ubiquitous-scone-762853.netlify.app/"]
            },
            {
                name: "E-Commerce Site",
                image: `${images.ecommerce}`,
                description: "Online store with shopping cart",
                tags: ["React", "Context API", "CSS"],
                links: ["https://github.com/somugowdasoft/fake-store-app", "https://preeminent-kitsune-3926f7.netlify.app/"]
            },
            {
                name: "Weather App",
                image: `${images.weather}`,
                description: "Get real-time weather updates based on location",
                tags: ["React", "API", "CSS"],
                links: ["https://github.com/somugowdasoft/weather-app", "https://boisterous-donut-7a2342.netlify.app/"]
            },
        ],
        backend: [
            {
                name: "Recipe App",
                image: `${images.recipes}`,
                description: "Developed the backend for a Recipe App, enabling users to create, view, update, and delete recipes with full CRUD functionality.",
                tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
                links: ["https://github.com/somugowdasoft/recipes-app"]
            },
            {
                name: "Auth System",
                image: `${images.auth}`,
                description: "Developed a secure authentication system using JWT for user registration and login, ensuring authorized access to protected resources with token-based session management.",
                tags: ["Node.js", "Express", "jwt", "MongoDB"],
                links: ["https://github.com/somugowdasoft/user_authentications"]
            },
            {
                name: "Password Reset",
                image: `${images.passwordReset}`,
                description: "Developed a secure password reset system that generates a unique token sent to the user's email, enabling safe password updates in case of forgotten credentials.",
                tags: ["Node.js", "MongoDB", "Mongoose", "Nodemailer"],
                links: ["https://github.com/somugowdasoft/password-reset-backend"]
            },
            {
                name: "File Upload Service",
                image: `${images.cloudinary}`,
                description: "A service to upload files to Cloudinary, store URLs in MongoDB, and retrieve them via an API for secure and efficient file management.",
                tags: ["Node.js", "Cloudinary", "Multer", "MongoDB", "Mongoose"],
                links: ["https://github.com/somugowdasoft/file_upload_service"]
            },
        ],
        mern: [
            {
                name: "Chat App",
                image: `${images.chatapp}`,
                description: "This Chat App is a real-time messaging application built using the MERN stack. It allows users to send and receive messages instantly, offering a seamless chat experience. The application integrates Socket.IO for real-time communication, ensuring messages are delivered without delay.",
                tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
                links: ["https://github.com/somugowdasoft/chat-app-frontend", "https://github.com/somugowdasoft/chat-app-backend", "https://my-awesome-chat-app.netlify.app/login"]
            },
            {
                name: "Online Assessment Platform",
                image: `${images.assessment}`,
                description: "The Online Assessment Platform (MERN) allows students to log in, take scheduled exams, and view results. Admins can schedule exams, while security features like webcam monitoring and tab-switch detection ensure fairness. 🚀",
                tags: ["MongoDB", "Express", "React", "Node.js"],
                links: ["https://github.com/somugowdasoft/online-assessment-platform-frontend", "https://github.com/somugowdasoft/online-assessment-platform-backend ", "https://visionary-queijadas-d28f10.netlify.app/login"]
            },
            {
                name: "Task Manager",
                image: `${images.taskManger}`,
                description: "A Task Manager web app for efficient task management with Google & Facebook authentication, to-do lists, priority tasks, and notes. Features include dark mode and live random quotes.",
                tags: ["MongoDB", "Express", "React", "Node.js", "OAuth", "API Ninja quote"],
                links: ["https://github.com/somugowdasoft/task-manager-frontend", "https://github.com/somugowdasoft/task-manager-backend", "https://good-task-manager-app.netlify.app"]
            },
            {
                name: "MERN Ecommerce App",
                image: `${images.mernEcommerce}`,
                description: "The MERN E-Commerce Fashion World is a full-stack web application for seamless online shopping. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it uses Redux for state management and JWT for secure authentication. Users can browse products, add items to the cart, place orders, and make secure payments via Razorpay.",
                tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Razorpay"],
                links: ["https://github.com/somugowdasoft/mern-ecommerce-frontend", "https://github.com/somugowdasoft/mern-ecommerce-backend", "https://ecommerce-fashion-world.netlify.app/"]
            },
        ],
    };

    const categories = [
        { key: "frontend", label: "Frontend", icon: <FaLaptopCode className="text-blue-500" /> },
        { key: "backend", label: "Backend", icon: <FaServer className="text-green-500" /> },
        { key: "mern", label: "MERN", icon: <FaDatabase className="text-purple-500" /> },
    ];

    return (
        <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-1/3 lg:w-1/4 shadow-lg p-6 mb-6 lg:mb-0 rounded-lg">
                <h2 className="text-xl mb-6 text-white">Project Categories</h2>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`flex items-center p-2 cursor-pointer border rounded-lg transition 
                                ${selectedCategory === category.key
                                    ? "border-4 border-sky-600 bg-gray-800 text-sky-300"
                                    : "hover:border-3 hover:bg-gray-800"
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
                            className="p-6 border border-sky-600 shadow-lg rounded-lg bg-gray-900 hover:shadow-xl transition"
                            whileHover={{ scale: 1.03, rotate: 1 }}
                        >
                            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                            <p className="text-sky-400 mb-2">{project.description}</p>

                            {/* Tags and Links in the same row */}
                            <div className="mt-3 flex flex-col gap-2">
                                {/* First Row: Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-sm bg-gray-700 px-3 py-1 rounded-full text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Second Row: Links */}
                                {project.links && (
                                    <div className="flex flex-wrap gap-4 mt-4">
                                    {project.links.map((link, i) => {
                                        const label =
                                            project.links.length === 3
                                                ? i === 0
                                                    ? "Frontend"
                                                    : i === 1
                                                        ? "Backend"
                                                        : "Demo"
                                                : i === 0
                                                    ? "GitHub"
                                                    : "Demo";
                                
                                        const Icon =
                                            label === "Frontend" ? FaCode :
                                            label === "Backend" ? FaServer :
                                            label === "GitHub" ? FaGithub :
                                            FaExternalLinkAlt;
                                
                                        return (
                                            <a
                                                key={i}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium bg-gray-800 px-4 py-2 rounded-lg text-white shadow-md transition duration-300 hover:bg-gray-600 hover:scale-105"
                                            >
                                                <Icon className="text-lg" /> {label}
                                            </a>
                                        );
                                    })}
                                </div>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Projects;
