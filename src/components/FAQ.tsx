import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "How much do your services cost around The Hills?",
        answer: "Our pressure cleaning, sealing, and deck maintenance services start from $199 for smaller jobs like single driveways or small patios. The final cost depends on the square meterage, type of surface, and level of grime. We always provide a transparent, upfront quote before starting any work."
    },
    {
        question: "How often should I clean, seal, or maintain my exterior surfaces?",
        answer: "For most homes in The Hills District, an annual professional pressure clean and inspection is recommended to prevent mold, algae, and grime buildup. Concrete sealing and deck oiling should typically be done every 1-3 years depending on foot traffic and weather exposure."
    },
    {
        question: "Do you use harsh chemicals?",
        answer: "We prioritize eco-friendly solutions. For stubborn stains (like oil or severe mold), we use specialized, biodegradable treatments that are safe for your family, pets, and surrounding landscaping."
    },
    {
        question: "Are you compliance focused and qualified?",
        answer: "Yes! We are compliance focused with White Cards, and all necessary safety certifications. We take the safety of your property incredibly seriously."
    },
    {
        question: "Do you service commercial and strata properties?",
        answer: "Absolutely. We have a dedicated team for commercial, industrial, schools, and strata properties, offering customized maintenance plans and flexible after-hours scheduling to minimize disruption."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-brand-blue">Questions</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Got questions? We've got answers. If you need more info, just give us a call!
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border border-slate-200 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                            >
                                <span className="font-bold text-lg text-slate-900">{faq.question}</span>
                                <ChevronDown
                                    className={`w-6 h-6 text-brand-blue transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
