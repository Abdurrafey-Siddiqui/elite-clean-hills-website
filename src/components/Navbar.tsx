import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <>
            <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-sm py-4">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Eliteclean Logo" className="h-10 md:h-12 w-auto object-contain transition-all duration-300" />
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2 py-1 text-slate-600"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-4">
                                <a href="tel:0408599279" className="hidden lg:flex items-center gap-2 font-bold transition-colors text-slate-800 hover:text-brand-blue">
                                    <PhoneCall className="w-4 h-4" />
                                    0408 599 279
                                </a>
                                <button className="bg-brand-blue hover:opacity-90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-blue/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2">
                                    Get Free Quote
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-slate-800 hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2 py-1 inline-block"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-6 border-t border-slate-100">
                                <a href="tel:0408599279" className="flex items-center justify-center gap-2 w-full mb-4 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-4 rounded-xl text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                                    <PhoneCall className="w-5 h-5" />
                                    Call 0408 599 279
                                </a>
                                <button className="w-full bg-brand-blue hover:opacity-90 text-white px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-brand-blue/20 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                                    Get Free Quote
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
