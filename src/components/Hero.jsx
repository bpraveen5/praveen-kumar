import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 bg-white dark:bg-[#0a0a0a]"
        >
            {/* Dotted Background Pattern */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-50"
                style={{
                    backgroundImage: `radial-gradient(#cbd5e1 2px, transparent 2px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <motion.div
                style={{ y, opacity }}
                className="container text-center z-10 relative pt-10"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center mb-6 md:mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                            Future-Focused Creator
                        </span>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-gray-400">
                            <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Heading - Responsive & Compact on Mobile */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[28px] md:text-7xl font-extrabold mb-4 md:mb-8 min-h-[1.2em] tracking-tight text-gray-900 dark:text-white leading-[1.2]"
                >
                    Hi!, I am <span className="text-blue-600">Praveen</span> <br />
                    <span className="relative inline-block text-gray-900 dark:text-white mt-1 md:mt-2 whitespace-nowrap">
                        Open-Source Contributor
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500/10 rounded-full" />
                    </span>
                </motion.h1>

                {/* Subheading - Compact on Mobile */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed font-medium"
                >
                    Full Stack Java Developer specializing in building exceptional digital experiences
                    with modern technologies and human-centered design.
                </motion.p>

                {/* Button - Reduced Size */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex justify-center"
                >
                    <a href="#projects" className="bg-[#121212] dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 hover:transform hover:scale-[1.02] transition-all shadow-lg shadow-black/5">
                        Start Your Project
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <path d="M2.5 17.5L17.5 2.5M17.5 2.5H2.5M17.5 2.5V17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer group"
            >
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase group-hover:text-blue-500 transition-colors">Scroll to Explore</span>
                <div className="w-6 h-10 rounded-full border-2 border-gray-200 dark:border-white/20 flex justify-center p-1.5 shadow-sm bg-white/50 dark:bg-transparent backdrop-blur-sm group-hover:border-blue-500/50 transition-colors">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1 h-2 bg-blue-500 rounded-full"
                    />
                </div>
            </motion.a>
        </section>
    );
};

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
};

export default Hero;
