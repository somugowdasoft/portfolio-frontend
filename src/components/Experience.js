import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Dummy images (Replace with actual company logos)
import abluvaLogo from "../assets/abluva_logo.jpg";  
import thidiffLogo from "../assets/thidiff_technologies_logo.jpg";  

const experiences = [
    {
        id: 1,
        company: "Abluva Pvt. Ltd.",
        role: "Software Developer",
        type: "Full-time",
        duration: "Jan 2023 - Sep 2023 · 9 mos",
        location: "Pune, Maharashtra, · Remote",
        logo: abluvaLogo,
    },
    {
        id: 2,
        company: "ThiDiff Technologies",
        role: "Software Developer",
        type: "Full-time",
        duration: "Sep 2021 - Sep 2022 · 1 yr 1 mo",
        location: "Bangalore · On-site",
        logo: thidiffLogo,
    },
];

const Experience = () => {
    return (
        <section className="max-w-4xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
                Experience
            </h2>

            <div className="grid gap-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className=" shadow-lg rounded-lg p-6 flex items-center gap-6 border border-gray-200">
                        {/* Company Logo */}
                        <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-cover rounded-md" />

                        {/* Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-sky-500">{exp.role}</h3>
                            <p className="text-gray-600 font-medium">{exp.company} · {exp.type}</p>

                            <div className="mt-2 flex items-center gap-4 text-gray-500">
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    {exp.duration}
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    {exp.location}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
