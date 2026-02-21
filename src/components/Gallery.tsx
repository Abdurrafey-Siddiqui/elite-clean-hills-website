import { motion } from 'motion/react';
import { ArrowLeftRight } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Driveway Restoration",
    before: "https://images.unsplash.com/photo-1518225852033-04983617150c?q=80&w=1000&auto=format&fit=crop", // Placeholder dirty
    after: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop", // Placeholder clean
  },
  {
    id: 2,
    title: "Patio Deep Clean",
    before: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Exterior House Wash",
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            See the <span className="text-brand-blue">Transformation</span>
          </h2>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Slide to see the dramatic difference our professional pressure cleaning makes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 bg-white"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* We'll simulate a before/after by showing half/half on hover, or just a static split for simplicity in this demo */}
                <div className="absolute inset-0 w-full h-full">
                  <img src={item.after} alt={`${item.title} After`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 w-1/2 h-full border-r-4 border-white shadow-[5px_0_15px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 group-hover:w-[10%]">
                  <img src={item.before} alt={`${item.title} Before`} className="w-[200%] max-w-none h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Before
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  After
                </div>
                
                {/* Slider Handle Indicator */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-800 opacity-100 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  <ArrowLeftRight className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
