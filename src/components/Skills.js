import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiAxios, SiExpress, SiJsonwebtokens, SiMongodb, SiAuth0 } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "Axios", icon: <SiAxios className="text-blue-600" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800" /> },
    { name: "JWT", icon: <SiJsonwebtokens className="text-yellow-500" /> },
    { name: "Auth0", icon: <SiAuth0 className="text-red-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];

  return (
    <section id="skills" className="flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">My Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 border rounded-lg shadow-lg hover:shadow-xl transition-shadow"
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
