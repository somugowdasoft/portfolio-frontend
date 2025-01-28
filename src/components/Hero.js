import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="text-white h-screen flex justify-center items-center relative overflow-hidden">
            {/* Content Wrapper */}
            <div className="max-w-screen-lg mx-auto text-center flex flex-col items-center">
                {/* Background Animated Square */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent opacity-20 rounded-lg"
                    initial={{ scale: 0, rotate: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                ></motion.div>

                {/* Hero Heading with Animation */}
                <motion.h1
                    className="text-4xl md:text-4xl font-bold z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Somashekar S.{' '}
                    <motion.span
                        className="text-sky-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        Full Stack Developer
                    </motion.span>
                </motion.h1>

                {/* Animated Button */}
                <motion.button
                    className="mt-12 px-6 py-3 border-2 border-sky-600 text-sky-600 font-bold rounded animate-pulse hover:bg-accent hover:text-white transition z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Read the CV
                </motion.button>

                {/* Social Links */}
                <motion.div
                    className="flex space-x-6 mt-12 text-xl z-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href=" "
                        className="p-4 text-white hover:text-blue-500 transition"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href=" "
                        className="p-4 text-white hover:text-blue-500 transition"
                    >
                        <FaLinkedinIn size={32} />
                    </a>
                    <a
                        href=" "
                        className="p-4 text-white hover:text-blue-500 transition"
                    >
                        <FaTwitter size={32} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
