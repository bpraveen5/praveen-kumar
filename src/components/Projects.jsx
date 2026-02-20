import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';
import ecommerceImg from '../assets/ecommerce.png';
import evotingImg from '../assets/evoting.png';
import studentImg from '../assets/student.png';
import financeImg from '../assets/finance.png';
import chatbotImg from '../assets/chatbot.jpg';
import udaqAgentImg from '../assets/udaq_agent.png';

const projects = [
    {
        id: 1,
        title: "UDA-Q-Agent",
        category: "AI / DATA QUALITY",
        description: "Developed a multi-agent AI system that automatically detects, fixes, validates, and improves data quality using ADK and Google Gemini.",
        image: udaqAgentImg,
        link: "https://github.com/bpraveen5/Capstone-Project",
        github: "https://github.com/bpraveen5/Capstone-Project"
    },
    {
        id: 2,
        title: "SpringAI-Chatbot",
        category: "AI / SPRING BOOT",
        description: "Built a secure AI chatbot using Spring Boot, Spring AI, React, and Ollama for real-time conversations.",
        image: chatbotImg,
        link: "https://github.com/bpraveen5/e-commerce-App",
        github: "https://github.com/bpraveen5/e-commerce-App"
    },
    {
        id: 3,
        title: "E-Commerce Website",
        category: "ECOMMERCE / FULLSTACK",
        description: "Developed a full-stack e-commerce platform with user roles, product management, cart functionality, and secure checkout.",
        image: ecommerceImg,
        link: "https://github.com/bpraveen5/e-commerce-App",
        github: "https://github.com/bpraveen5/e-commerce-App"
    },
    {
        id: 4,
        title: "Personal Finance System",
        category: "FINANCE / JAVA",
        description: "Created a Java-based application to track expenses, manage budgets, and analyze personal financial data.",
        image: financeImg,
        link: "https://github.com/bpraveen5/InfosysBankApp",
        github: "https://github.com/bpraveen5/InfosysBankApp"
    },
    {
        id: 5,
        title: "Student Marks Management",
        category: "EDUCATION / JAVA",
        description: "Implemented a system to manage student records, automate grading, and analyze academic performance efficiently.",
        image: studentImg,
        link: "https://github.com/bpraveen5",
        github: "https://github.com/bpraveen5"
    },
    {
        id: 6,
        title: "E-Voting System",
        category: "SECURITY / BLOCKCHAIN",
        description: "Designed a blockchain-based voting system ensuring secure, transparent, and tamper-proof election processes.",
        image: evotingImg,
        link: "https://github.com/bpraveen5/E-Voting-System-Blockchain",
        github: "https://github.com/bpraveen5/E-Voting-System-Blockchain"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-[#f8f9fa] dark:bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 text-center md:text-left">Our Portfolio</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center md:text-left">Innovation Delivered</h3>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-gray-400 text-center md:text-left leading-relaxed">
                            A selection of our recent projects across various industries. Each solution is built with scalability and security at its core.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <a href="https://github.com/bpraveen5" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-500 transition-colors text-sm sm:text-base">
                            View All Case Studies <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-white dark:bg-[#121212] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative h-56 sm:h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg hover:scale-110 transition-transform">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-lg hover:scale-110 transition-transform">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6 sm:p-8">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block border-l-2 border-blue-600 pl-3">
                                    {project.category}
                                </span>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mb-6 line-clamp-2 leading-relaxed h-12">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="text-xs sm:text-sm text-gray-900 dark:text-white font-bold border-b-2 border-slate-100 dark:border-white/10 hover:border-blue-600 transition-all pb-1 inline-flex items-center"
                                >
                                    Read Case Study
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
