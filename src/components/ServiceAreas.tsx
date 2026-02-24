import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const regions = [
    { name: 'The Hills Shire', suburbs: ['Beaumont Hills', 'Kellyville', 'Rouse Hill', 'Castle Hill', 'Baulkham Hills'] },
    { name: 'Hawkesbury', suburbs: ['Windsor', 'Richmond', 'Pitt Town', 'Kurrajong', 'North Richmond'] },
    { name: 'Blacktown', suburbs: ['Stanhope Gardens', 'The Ponds', 'Glenwood', 'Quakers Hill', 'Seven Hills'] },
    { name: 'Hornsby Shire', suburbs: ['Cherrybrook', 'Pennant Hills', 'Dural', 'Hornsby', 'Wahroonga'] },
    { name: 'Parramatta', suburbs: ['Northmead', 'Winston Hills', 'North Rocks', 'Oatlands', 'Carlingford'] },
    { name: 'Greater Sydney', suburbs: ['Bondi', 'Manly', 'Mosman', 'Ryde', 'Inner West'] }
];

export default function ServiceAreas() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="service-areas">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Proudly Servicing <span className="text-brand-blue">The Hills & Beyond</span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            Whether you're in the heart of The Hills District, the Hawkesbury, or across Greater Sydney, our fully equipped vans come directly to you. We serve residential, commercial, strata, and schools.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-white/10 pt-16">
                    {regions.map((region, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-6 h-6 text-brand-blue" />
                                <h3 className="text-xl font-bold tracking-wide">{region.name}</h3>
                            </div>
                            <ul className="space-y-3">
                                {region.suburbs.map((suburb, sIdx) => (
                                    <li key={sIdx} className="text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-brand-blue/50 before:rounded-full before:mr-3">
                                        {suburb}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 text-sm text-brand-blue font-semibold hover:text-cyan-400 cursor-pointer transition-colors inline-block">
                                View all in {region.name} →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
