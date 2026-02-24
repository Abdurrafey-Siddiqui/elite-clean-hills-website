import { motion } from 'motion/react';
import { Home, Building2, Droplets, Shield, Paintbrush, Hammer, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Droplets,
        title: "High-Pressure Cleaning",
        description: "Transform your driveways, patios, and pathways. We remove deep-seated oil stains, moss, and dirt to restore your surfaces.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Home,
        title: "House Washing",
        description: "Gentle yet effective soft-washing for your home's exterior to remove lichen, mold, and dirt without damaging your paintwork.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Shield,
        title: "Concrete Sealing",
        description: "Protect your driveways and paths from the elements, heavy stains, and wear with our premium, long-lasting concrete sealants.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Paintbrush,
        title: "Concrete Painting",
        description: "Revitalize tired, stained concrete with professional painting services. Available in a range of durable colors to suit your home.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Hammer,
        title: "Deck Maintenance",
        description: "Complete timber care. We strip away old grime, clean deeply, and apply premium oils or stains to restore your deck's natural beauty.",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop"
    },
    {
        icon: Building2,
        title: "Commercial & Strata",
        description: "Keep your business or complex looking professional. Tailored pressure cleaning solutions with minimal disruption.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Specialist Pressure Cleaning for <span className="text-brand-blue">Every Surface</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        From suburban driveways to massive commercial warehouses, our commercial-grade equipment and trained technicians handle it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl hover:-translate-y-1 transition-[transform,box-shadow] duration-300"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center mb-6 text-brand-blue">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-brand-blue font-semibold group-hover:text-cyan-600 transition-colors">
                                    Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
