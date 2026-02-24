import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    // Note: For a real app, you'd wire this up to an API
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden" id="quote">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="flex-1 text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Get Your Free, No-Obligation <span className="text-brand-blue">Quote</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg">
                            Fill out the form below with as much detail as possible. The more info we have, the faster we can give you an accurate price.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 mb-10 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm max-w-lg hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-brand-blue/10 rounded-full flex items-center justify-center shrink-0">
                                <PhoneCall className="w-6 h-6 text-brand-blue" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Or call / text us at</p>
                                <a href="tel:0408599279" className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-brand-blue transition-colors block mb-1">
                                    0408 599 279
                                </a>
                                <p className="text-xs text-slate-500 font-medium">Mon-Sat: 7am - 7pm  |  Emergency Line: 24/7</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8 max-w-lg">
                            <h3 className="font-bold text-slate-900 mb-4">Why Book With Us?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> Fast, accurate pricing based on your needs
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> Zero hidden fees or surprise costs
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> Professional Property Protection Guaranteed
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full max-w-lg bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Quote Requested!</h3>
                                <p className="text-slate-600">
                                    Thanks for reaching out. We've received your details and will call you back within 1 hour during business hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name *</label>
                                        <input required id="name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone *</label>
                                        <input required id="phone" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 transition-colors" placeholder="0400 000 000" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="property" className="text-sm font-semibold text-slate-700">Property Type *</label>
                                    <select required id="property" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 appearance-none transition-colors">
                                        <option value="">Select Property Type</option>
                                        <option value="residential">Residential Home</option>
                                        <option value="commercial">Commercial / Industrial</option>
                                        <option value="strata">Strata / Multi-Unit</option>
                                        <option value="school">School / Govt</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-semibold text-slate-700">Primary Service Needed</label>
                                    <select id="service" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 appearance-none transition-colors">
                                        <option value="pressure">Pressure Cleaning</option>
                                        <option value="sealing">Concrete Sealing & Painting</option>
                                        <option value="deck">Deck Maintenance</option>
                                        <option value="commercial">Commercial Wash</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Upload Photos (Optional - for faster quotes)</label>
                                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                                        <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-brand-blue transition-colors" />
                                        <span className="text-sm text-slate-500 font-medium group-hover:text-brand-blue transition-colors">Click to upload or drag and drop</span>
                                    </div>
                                </div>

                                <button type="submit" className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-brand-accent hover:bg-green-600 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg shadow-green-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 cursor-pointer mt-4">
                                    <span className="hidden sm:inline">Request Free Quote</span>
                                    <span className="sm:hidden">Get Free Quote</span>
                                    <Send className="w-5 h-5" />
                                </button>
                                <div className="text-center">
                                    <p className="text-xs text-slate-500 mt-4 text-center">Your data is secure and will never be shared.</p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
