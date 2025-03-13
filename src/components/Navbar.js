import React, { useState } from "react";
import {
    FaHome,
    FaUser,
    FaTools,
    FaFolderOpen,
    FaCertificate,
    FaEnvelope,
    FaBriefcase,
    FaBars,
    FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu after clicking a link (on mobile)
        }
    };

    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <button
                    onClick={() => handleNavigation("hero")}
                    className="flex items-center gap-2 text-xl font-bold whitespace-nowrap"
                >
                    <img
                        src={logo}
                        alt="logo"
                        width={30}
                        height={30}
                        className="border rounded"
                    />
                    <span className="hidden lg:block">Somashekar</span>
                </button>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Menu */}
                <ul
                    className={`absolute top-16 left-0 w-full bg-gray-900 md:static md:w-auto md:bg-transparent md:flex md:gap-6 md:items-center transition-all duration-300 ease-in ${isOpen ? "block" : "hidden md:flex"
                        }`}
                >
                    {[
                        { id: "hero", icon: <FaHome />, text: "Home" },
                        { id: "about", icon: <FaUser />, text: "About" },
                        { id: "skills", icon: <FaTools />, text: "Skills" },
                        { id: "experience", icon: <FaBriefcase />, text: "Experience" },
                        { id: "projects", icon: <FaFolderOpen />, text: "Projects" },
                        { id: "courses", icon: <FaCertificate />, text: "Certificate" },
                        { id: "contact", icon: <FaEnvelope />, text: "Contact" },
                    ].map((item) => (
                        <li
                            key={item.id}
                            className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex flex-col items-center gap-1 px-4 md:px-0"
                        >
                            {item.icon}
                            <button onClick={() => handleNavigation(item.id)}>
                                {item.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
