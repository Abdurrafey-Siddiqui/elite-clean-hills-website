import { motion } from 'motion/react';

export default function About() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="bg-white rounded-3xl shadow-md shadow-brand-blue/20 border border-slate-100 p-8 sm:p-12 lg:p-16 xl:p-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                        {/* Logo Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                        >
                            <img
                                src="/logo.png"
                                alt="Eliteclean Logo"
                                className="w-[80%] max-w-md h-auto object-contain filter drop-shadow-2xl"
                            />
                        </motion.div>

                        {/* Copy Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 flex flex-col justify-center"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                About <span className="text-brand-blue">Elite Clean</span>
                            </h2>

                            <div className="space-y-6 text-base text-slate-600 leading-relaxed">
                                <p>
                                    Welcome to <strong className="font-bold text-slate-900">Elite Clean</strong>—The Hills District's premier choice for exterior property transformations. We are a <strong className="font-bold text-slate-900">specialized, compliance-focused</strong> pressure cleaning business dedicated to delivering an unmatched level of service.
                                </p>
                                <p>
                                    With years of hands-on experience in the trade, we have mastered the exact science to lift <strong className="font-bold text-slate-900">deeply ingrained dirt, oil, moss, and mold</strong> without ever risking damage to your underlying surfaces. From sealing luxury aggregate driveways to gentle soft-washes for strata apartments, <strong className="font-bold text-slate-900">we treat every single property exactly as if it were our own.</strong>
                                </p>
                                <p>
                                    What sets us apart is our absolute commitment to professionalism. <strong className="font-bold text-slate-900">We answer our phones, we utilize cutting-edge industrial equipment</strong>, and we absolutely guarantee you'll be blown away by the sparkling clean conclusion. You aren't just getting your driveway washed—you are investing in <strong className="font-bold text-slate-900">long-lasting, premium property protection</strong> from The Hills District's best.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
