import { motion } from 'framer-motion';
import { QrCode, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#16A34A] to-[#064E3B] rounded-xl flex items-center justify-center">
                            <QrCode className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-[#0F172A]">QRder</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-[#16A34A] font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <motion.a
                            href="https://wa.me/message/Q7JRYMCCZIB2N1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-[#16A34A] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Get Started
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-[#16A34A] transition-colors"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden pt-4 pb-2 space-y-3"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 text-gray-600 hover:text-[#16A34A] font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            href="https://wa.me/message/Q7JRYMCCZIB2N1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileTap={{ scale: 0.95 }}
                            className="block w-full px-6 py-2.5 bg-[#16A34A] text-white rounded-lg font-semibold text-center shadow-md"
                        >
                            Get Started
                        </motion.a>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
