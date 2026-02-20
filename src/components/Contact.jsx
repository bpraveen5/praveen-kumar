import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-[var(--glass-border)]"
                    >
                        <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">Let's <span className="text-accent-gradient">Connect</span></h2>
                        <p className="text-[var(--text-secondary)] mb-8">
                            Have a project in mind or just want to say hi? Fill out the form below or send me an email.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right: Social Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-[var(--text-primary)]">Find me on</h3>
                            <p className="text-[var(--text-secondary)]">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <SocialLink
                                href="mailto:bpraveen8040@gmail.com"
                                icon={<Mail size={24} className="text-[var(--text-primary)]" />}
                                label="Email Me"
                                subLabel="bpraveen8040@gmail.com"
                                color="hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400"
                            />
                            <SocialLink
                                href="https://linkedin.com/in/b-praveen-kumar/"
                                icon={<Linkedin size={24} className="text-[var(--text-primary)]" />}
                                label="LinkedIn"
                                subLabel="Connect professionally"
                                color="hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400"
                            />
                            <SocialLink
                                href="https://github.com/bpraveen5"
                                icon={<Github size={24} className="text-[var(--text-primary)]" />}
                                label="GitHub"
                                subLabel="Check my code"
                                color="hover:bg-gray-500/20 hover:border-gray-500/50 hover:text-gray-300"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, label, subLabel, color }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-4 glass rounded-xl border border-[var(--glass-border)] transition-all duration-300 group ${color}`}
        >
            <div className="p-3 bg-[var(--glass-bg)] rounded-full group-hover:bg-[var(--glass-border)] transition-colors">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-[var(--text-primary)]">{label}</h4>
                <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]">{subLabel}</p>
            </div>
        </a>
    );
};

export default Contact;
