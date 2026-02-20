import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Java Full Stack Developer Intern",
        company: "Software Solutions",
        period: "January 2025 - April 2025",
        description: "Worked with Java, Spring Boot, Spring Security, Hibernate, JSP, Servlets, Microservices, and React.js. Developed RESTful APIs, implemented Microservices using Eureka, and built responsive UIs. Gained exposure to the full software development lifecycle (SDLC), including requirement analysis, coding, testing, and deployment."
    },
    {
        id: 2,
        role: "Open-Source Contributor",
        company: "GitHub Community",
        period: "2024 - Present",
        description: "Actively contributing to various open-source projects. Fixed bugs, improved documentation, and implemented new features in community-driven repositories. Collaborated with developers worldwide to enhance project stability and performance."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-[var(--bg-secondary)]">
            <div className="container mx-auto max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Professional <span className="text-accent-gradient">Journey</span>
                </motion.h2>

                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--text-secondary)] before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--glass-border)] bg-[var(--bg-primary)] group-hover:bg-blue-600 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Briefcase size={18} className="text-[var(--text-secondary)] group-hover:text-white" />
                            </div>

                            {/* Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-[var(--glass-border)] hover:border-blue-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-lg text-[var(--text-primary)]">{exp.role}</h3>
                                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded flex items-center gap-1">
                                        <Calendar size={12} /> {exp.period}
                                    </span>
                                </div>
                                <div className="text-sm font-medium text-[var(--text-secondary)] mb-2">{exp.company}</div>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
