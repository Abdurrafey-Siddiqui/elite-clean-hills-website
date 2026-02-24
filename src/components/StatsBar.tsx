import { motion } from 'motion/react';
import { Star, Home, ShieldCheck, Clock } from 'lucide-react';

const stats = [
    { icon: Home, value: "500+", label: "Homes Restored" },
    { icon: Star, value: "5.0/5", label: "Google Rating" },
    { icon: ShieldCheck, value: "100%", label: "Satisfaction" },
    { icon: Clock, value: "24hrs", label: "Quote Turnaround" }
];

export default function StatsBar() {
    return (
        <section className="bg-brand-dark-blue py-8 relative z-20 -mt-8 mx-6 sm:mx-8 lg:mx-12 rounded-2xl shadow-xl shadow-brand-blue/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col items-center justify-center text-center ${idx % 2 === 0 ? 'border-none lg:border-solid' : 'border-none sm:border-solid'} ${idx === 0 ? 'border-none' : ''}`}
                        >
                            <stat.icon className="w-8 h-8 text-white/90 mb-3" />
                            <div className="text-3xl font-extrabold text-white tracking-tight mb-1">{stat.value}</div>
                            <div className="text-sm font-medium text-cyan-100 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
