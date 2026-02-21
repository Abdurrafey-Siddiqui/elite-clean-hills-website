import { motion } from 'motion/react';
import { ArrowRight, Droplets, ShieldCheck, Star, CheckCircle2, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2000&auto=format&fit=crop"
          alt="Pressure cleaning driveway"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>4.9/5 Average Rating in Sydney</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Sydney's Most <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-300">
              Trusted
            </span> Pressure Cleaners
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Watch years of grime vanish in seconds. We restore driveways, patios, and home exteriors to their original glory. 
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 bg-brand-accent hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-500/30 w-full sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col">
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Starting From</span>
              <span className="text-white text-3xl font-bold">$149<span className="text-lg text-slate-400 font-normal">.00</span></span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck className="w-6 h-6 text-brand-blue" />
              <span className="text-sm font-medium">Fully Insured</span>
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
      </div>
    </section>
  );
}
