import { useState } from "react";
import dev from "../assets/output-onlinepngtools.png";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <section
            id="about"
            className="container max-w-screen-lg mx-auto py-10 px-10 flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section: Description */}
                <div className="text-center md:text-left">
                    <p className="text-lg text-sky-500 leading-7 p-4 transition-all duration-300">
                        I’m a passionate Full-Stack Developer specializing in the MERN stack
                        (MongoDB, Express.js, React, and Node.js). I build highly scalable web
                        applications and enjoy solving complex problems with efficient solutions.
                        <span
                            className={`block transition-opacity duration-300 ${
                                showMore ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
                            }`}
                        >
                            <br />
                            <br />
                            With expertise in both frontend and backend development, I deliver
                            seamless user experiences. From dynamic web apps to RESTful APIs, I
                            bring ideas to life with clean and scalable code. Let’s build
                            something impactful together!
                        </span>
                    </p>
                    <button
                        onClick={handleToggle}
                        className="mt-4 text-sky-700 font-bold underline hover:text-sky-400 transition"
                    >
                        {showMore ? "Hide" : "Read More"}
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={dev}
                        alt="Developer"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
