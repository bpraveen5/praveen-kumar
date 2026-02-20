import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === 'dark' ? (
                    <Moon size={20} className="text-blue-400" />
                ) : (
                    <Sun size={20} className="text-yellow-500" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
