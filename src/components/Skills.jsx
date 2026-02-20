import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Code, Server, Database, Layout, Terminal,
    GitBranch, Layers, Box, Globe, Cpu,
    Command, Hash, FileCode, Settings
} from 'lucide-react';

const techStack = [
    // Backend & Core
    { name: "Java", icon: <Code />, category: "Core", color: "text-red-500" },
    { name: "Spring Boot", icon: <Server />, category: "Backend", color: "text-green-500" },
    { name: "MySQL", icon: <Database />, category: "Database", color: "text-blue-500" },
    { name: "Hibernate", icon: <Layers />, category: "Backend", color: "text-orange-500" },
    { name: "Microservices", icon: <Cpu />, category: "Architecture", color: "text-purple-500" },

    // Frontend
    { name: "React.js", icon: <Code />, category: "Frontend", color: "text-blue-400" },
    { name: "JavaScript", icon: <Terminal />, category: "Language", color: "text-yellow-400" },
    { name: "HTML5", icon: <Globe />, category: "Frontend", color: "text-orange-600" },
    { name: "CSS3", icon: <Layout />, category: "Frontend", color: "text-blue-600" },

    // Tools
    { name: "Maven/Gradle", icon: <Settings />, category: "Build Tools", color: "text-gray-400" },
    { name: "GitHub", icon: <Command />, category: "Platform", color: "text-white" },
    { name: "Git", icon: <GitBranch />, category: "Version Control", color: "text-orange-500" },
];

const SkillPill = ({ skill }) => (
    <div className="flex items-center gap-4 px-6 h-[72px] mx-2 bg-[var(--bg-secondary)]/50 backdrop-blur-md border border-[var(--glass-border)] rounded-xl hover:border-[var(--accent-blue)] hover:bg-[var(--bg-secondary)] hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-default group">
        <div className={`p-2 rounded-lg bg-white/5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
            {skill.icon}
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap group-hover:text-[var(--accent-blue)] transition-colors">
                {skill.name}
            </span>
            <span className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
                {skill.category}
            </span>
        </div>
    </div>
);

const MarqueeRow = ({ skills, speed = 20, direction = "left" }) => {
    return (
        <div className="flex overflow-hidden relative w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
                className="flex flex-nowrap"
                initial={{ x: direction === "left" ? "0%" : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : "0%" }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Replicate skills multiple times to ensure no gaps */}
                {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                    <SkillPill key={`${skill.name}-${index}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    // Split skills into two rows for visual balance
    const row1 = techStack.slice(0, Math.ceil(techStack.length / 2));
    const row2 = techStack.slice(Math.ceil(techStack.length / 2));

    return (
        <section id="skills" className="py-16 relative overflow-hidden">
            {/* Background Elements - Subtle Orbital Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[700px] h-[600px] border border-blue-500/30 rounded-full absolute animate-[spin_60s_linear_infinite]" />
                <div className="w-[500px] h-[500px] border border-blue-400/20 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-[300px] h-[300px] border border-blue-300/10 rounded-full absolute animate-[spin_30s_linear_infinite]" />
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Technical <span className="text-accent-gradient">Stack</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {/* Row 1 - Right to Left */}
                    <MarqueeRow skills={row1} speed={55} direction="left" />

                    {/* Row 2 - Left to Right (Opposite Direction) */}
                    <MarqueeRow skills={row2} speed={60} direction="right" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
