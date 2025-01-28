import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-clrPrimaryLight text-white py-4 border-t border-gray-300">
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4">
                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com"
                        className="hover:text-sky-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="hover:text-sky-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        className="hover:text-sky-600"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={24} />
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sm mt-4 md:mt-0">
                    © 2025 Somashekar s. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
