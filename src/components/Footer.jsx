import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0a0c12] text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Praveen<span className="text-blue-500"></span>
                            </span>
                        </a>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            Full Stack Java Developer specializing in building exceptional digital experiences
                            with modern technologies and human-centered design.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/bpraveen5" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all duration-300">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-blue-600 transition-all duration-300">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Navigation</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#hero" className="hover:text-blue-500 transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-blue-500 transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a></li>
                            <li><a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500" />
                                <a href="mailto:bpraveen8040@gmail.com" className="hover:text-blue-500 transition-colors">bpraveen8040@gmail.com</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>Available for freelance</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2024 B Praveen Kumar. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                    >
                        Back to Top
                        <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-colors">
                            <ArrowUp size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
