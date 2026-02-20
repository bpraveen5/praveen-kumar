import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
    {
        id: 1,
        title: "Programming in Java & Full Stack Java Development",
        issuer: "NPTEL",
        date: "Jan - Apr 2024",
        link: "#"
    },
    {
        id: 2,
        title: "Python",
        issuer: "Kaggle",
        date: "June 14, 2023",
        link: "#"
    },
    {
        id: 3,
        title: "OCI 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        date: "October 17, 2025",
        link: "#"
    },
    {
        id: 4,
        title: "OCI 2025 Certified Generative AI Professional",
        issuer: "Oracle University",
        date: "October 30, 2025",
        link: "#"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-16 bg-white dark:bg-[#0a0a0a]">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                        Certifications & <span className="text-blue-600">Achievements</span>
                    </motion.h2>
                    <p className="text-gray-500 dark:text-gray-400">Professional recognitions and validation of skills.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-blue-500/50 hover:bg-white dark:hover:bg-blue-600/5 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600">
                                    <Award size={20} />
                                </div>
                                <ExternalLink size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                                {cert.title}
                            </h3>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">{cert.issuer}</span>
                                <span className="text-[11px] text-gray-400">{cert.date}</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
