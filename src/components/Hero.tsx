import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Droplets, ShieldCheck, Star, CheckCircle2, Send } from 'lucide-react';

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative h-screen min-h-[600px] lg:min-h-[800px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Pressure cleaning driveway split view"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 sm:from-slate-900/90 via-slate-900/80 lg:via-slate-900/70 to-slate-900/40 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-black/60 sm:bg-black/40 lg:bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between h-full pt-32 lg:pt-0 gap-12 lg:gap-8 xl:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl lg:max-w-xl xl:max-w-2xl w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>5.0/5 Stars On Google Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight sm:leading-[1.1] tracking-tight mb-6">
            The Hills' Most <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-300">
              Trusted
            </span> Pressure Cleaners
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            <span className="hidden sm:inline">Watch years of grime vanish in seconds. We provide expert <span className="text-white font-semibold">pressure cleaning, concrete sealing & painting, and deck maintenance</span> for Residential, Commercial, Strata, and Schools. Protect your property value and stay safe.</span>
            <span className="sm:hidden">Expert cleaning, sealing, and maintenance for <span className="text-white font-semibold">Homes & Businesses</span>. Fast, safe, and effective.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex justify-center items-center gap-2 sm:gap-3 bg-brand-accent hover:bg-green-600 text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-colors duration-300 shadow-lg shadow-green-500/30 w-full sm:w-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span className="hidden sm:inline">Get a Free Quote</span>
              <span className="sm:hidden">Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="flex flex-col justify-center">
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Starting From</span>
              <span className="text-white text-3xl font-bold">$199<span className="text-lg text-slate-400 font-normal">.00</span></span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <span className="text-sm font-medium">Compliance Focused</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <CheckCircle2 className="w-6 h-6 text-brand-blue" />
              <span className="text-sm font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 hidden sm:flex">
              <Droplets className="w-6 h-6 text-brand-blue" />
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Form for Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block w-full max-w-md xl:max-w-[440px] relative z-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20 bg-clip-padding">
            <div className="bg-brand-blue px-8 py-6">
              <h3 className="text-2xl font-extrabold text-white mb-1">Get a Fast, Free Quote</h3>
              <p className="text-blue-100 text-sm font-medium">Enter your details below and we'll be in touch.</p>
            </div>

            <div className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Requested!</h3>
                  <p className="text-slate-600">
                    Thanks for reaching out! We've received your details and will call you back shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="hero-name" className="text-sm font-bold text-slate-700">Full Name</label>
                    <input required id="hero-name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 placeholder-slate-400 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="hero-phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input required id="hero-phone" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 placeholder-slate-400 transition-colors" placeholder="0400 000 000" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="hero-service" className="text-sm font-bold text-slate-700">Main Service Needed</label>
                    <div className="relative">
                      <select id="hero-service" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue text-slate-900 appearance-none transition-colors">
                        <option value="pressure">Pressure Cleaning</option>
                        <option value="sealing">Concrete Sealing & Painting</option>
                        <option value="deck">Deck Maintenance</option>
                        <option value="commercial">Commercial Wash</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center cursor-pointer gap-2 bg-brand-accent hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-colors duration-300 shadow-md shadow-green-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 mt-2">
                    <span>Request Quote Now</span>
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-3 font-medium">Secure form • No obligation quote</p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
