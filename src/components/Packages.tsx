import { motion } from 'motion/react';
import { Plus, Check, ArrowRight } from 'lucide-react';

const packages = [
    {
        name: 'Driveway Revival & Seal',
        price: 'From $299',
        description: 'Complete clean and protection for your driveway.',
        services: ['Deep Pressure Clean', 'Stain Treatment', 'Premium Sealing'],
        popular: false,
    },
    {
        name: 'Ultimate Property Makeover',
        price: 'From $549',
        description: 'Combine & Save! Instant curb appeal transformation.',
        services: ['Exterior House Wash', 'Driveway Clean', 'Walkway & Patio Free'],
        popular: true,
        discount: 'Save 15%',
    },
    {
        name: 'Deck Restoration',
        price: 'From $399',
        description: 'Bring your outdoor timber back to life.',
        services: ['Deep Wood Clean', 'Mold & Algae Removal', 'Premium Oiling/Staining'],
        popular: false,
    }
];

export default function Packages() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100" id="packages">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Bundled Service <span className="text-brand-accent">Packages</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Combine our most popular services to get a complete property transformation and enjoy significant discounts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 border ${pkg.popular ? 'border-brand-accent shadow-xl shadow-brand-accent/10' : 'border-slate-200 shadow-sm'
                                } flex flex-col`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max whitespace-nowrap text-center bg-brand-accent text-white px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest z-10 shadow-md">
                                    Most Popular - {pkg.discount}
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                            <p className="text-slate-500 mb-6">{pkg.description}</p>
                            <div className="text-3xl font-extrabold text-brand-dark mb-8">{pkg.price}</div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {pkg.services.map((service, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">{service}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold text-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${pkg.popular
                                ? 'bg-brand-accent hover:bg-green-600 text-white focus-visible:ring-brand-accent'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-900 focus-visible:ring-slate-900'
                                }`}>
                                Claim This Package
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
