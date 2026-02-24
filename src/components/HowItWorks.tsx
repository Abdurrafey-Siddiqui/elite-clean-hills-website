import { motion } from 'motion/react';
import { PhoneCall, CalendarCheck, Droplets, ArrowRight } from 'lucide-react';

const steps = [
    {
        icon: PhoneCall,
        title: "1. Instant Free Quote",
        description: "Call us or fill out the form. We use satellite imagery or do a quick site visit to give you an exact, upfront price."
    },
    {
        icon: CalendarCheck,
        title: "2. Easy Scheduling",
        description: "Pick a day and time that works for you. We provide confirmation and let you know when we are on our way."
    },
    {
        icon: Droplets,
        title: "3. Professional Clean",
        description: "Our fully insured team arrives, protects your gardens, and safely restores your surfaces. You don't even need to be home."
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="how-it-works">
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ECFEFF 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-300">
                        Getting your property back to pristine condition is easy and completely stress-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-brand-blue/0 via-brand-blue to-brand-blue/0 z-0"></div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative z-10 flex flex-col items-center text-center p-8 bg-slate-800/50 backdrop-blur-md rounded-3xl border border-slate-700/50"
                        >
                            <div className="w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-brand-blue/20 rotate-3 group-hover:rotate-6 transition-transform">
                                <step.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-3 bg-brand-accent hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-lg shadow-green-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer">
                        Start Step 1 Now
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
