import React from "react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiAxios, SiBootstrap, SiSass, SiExpress, SiJsonwebtokens,
  SiMongodb, SiAuth0, SiPostman, SiFirebase, SiNextdotjs, SiSocketdotio, SiMysql
} from "react-icons/si";

const Skills = () => {
  const skills = [
    // Frontend
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "SCSS", icon: <SiSass className="text-pink-600" /> },
    { name: "JavaScript", icon: <FaReact className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Framer Motion", icon: <FaReact className="text-red-400" /> },

    // Backend
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" /> },
    { name: "Auth0", icon: <SiAuth0 className="text-red-500" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-gray-500" /> },

    // Tools
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
  ];

  return (
    <section id="skills" className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h2 className="text-lg font-semibold text-sky-500">{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
