import React, { useState } from 'react';
import { FaHome, FaUser, FaTools, FaFolderOpen, FaCertificate, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close the menu after navigation
        }
    };

    return (
        <nav className="fixed top-0 w-full text-white shadow-lg z-50">
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <button
                        onClick={() => handleNavigation('hero')}
                        className="flex items-center gap-4"
                    >
                        <img
                            src={logo}
                            alt="logo"
                            width={32}
                            height={32}
                            className="border rounded"
                        />
                        <span>Somashekar</span>
                    </button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Nav Links */}
                <ul
                    className={`md:flex md:items-center md:gap-6 absolute md:static top-14 left-0 w-full text-white md:w-auto md:bg-transparent md:py-0 py-4 transition-all duration-300 ease-in ${isOpen ? 'block' : 'hidden'
                        }`}
                >
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaHome />
                        <button onClick={() => handleNavigation('hero')}>Home</button>
                    </li>
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaUser />
                        <button onClick={() => handleNavigation('about')}>About</button>
                    </li>
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaTools />
                        <button onClick={() => handleNavigation('skills')}>Skill</button>
                    </li>
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaFolderOpen />
                        <button onClick={() => handleNavigation('projects')}>Project</button>
                    </li>
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaCertificate />
                        <button onClick={() => handleNavigation('courses')}>Certificate</button>
                    </li>
                    <li className="text-lg hover:text-sky-500 text-center md:text-left py-2 md:py-0 flex items-center gap-2">
                        <FaEnvelope />
                        <button onClick={() => handleNavigation('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
