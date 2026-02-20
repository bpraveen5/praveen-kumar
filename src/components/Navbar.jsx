import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Praveen<span className="text-blue-500"></span>
          </span>
        </a>

        {/* Desktop Menu - Floating Capsule */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-white/80 dark:bg-black/20 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full px-8 py-3 shadow-sm">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Book a Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--text-primary)] focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                closed: { opacity: 0, y: -20 },
                open: { opacity: 1, y: 0 }
              }}
              className="fixed inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden z-40"
            >
              <ul className="flex flex-col items-center space-y-8">
                {links.map((link, i) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-[var(--text-primary)] hover:text-blue-500 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
