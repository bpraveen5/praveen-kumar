import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 animate-pulse" />
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[var(--glass-border)] glass shadow-2xl">
                                <img
                                    src="/images/real-profile.png"
                                    alt="Praveen - Senior Frontend Engineer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Bio */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            Future-Focused <span className="text-accent-gradient">Creator</span>
                        </motion.h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                            className="space-y-4 text-[var(--text-secondary)] text-lg"
                        >
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                I don't just write code. I am a passionate and detail-oriented professional with a strong interest in creating meaningful and impactful work. With a background in Full Stack Java Development, 
                                I focus on delivering solutions that are both functional and thoughtfully designed.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                My journey involves constantly pushing the boundaries of what's possible on the web,
                                leveraging the latest tools like React, and Framer Motion to build performant
                                and accessible applications.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                When I'm not coding, I'm exploring new design trends, contributing to open source,
                                or sharing my knowledge with the developer community.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
