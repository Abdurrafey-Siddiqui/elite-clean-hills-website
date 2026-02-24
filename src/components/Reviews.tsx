import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Marina Papps",
    location: "Google Review",
    text: "Jeremy was incredibly helpful throughout the whole process! He made it a quick and cost effective job without compromising the quality of the work! I don’t typically leave reviews but if I could give him more stars I would because he simply did an outstanding job.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex Dennis",
    location: "Google Review",
    text: "Jeremy did a great job high pressure hosing my retaining wall, driveways and footpaths. It has make a huge difference! Would highly recommend",
    rating: 5,
  },
  {
    id: 3,
    name: "Vanessa Griffin",
    location: "Google Review",
    text: "Jeremy from Elite clean did a fantastic job on our driveway. It totally transformed our house. We absolutely love it. He was great with communication & the colour looks fantastic.",
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Loved by <span className="text-brand-blue">The Hills</span> Homeowners
            </h2>
            <p className="text-lg text-slate-600">
              We take pride in our work, and it shows in what our customers say about us.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-slate-900">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-slate-900">Google Reviews</span>
              <span className="text-sm text-slate-500">Based on 80+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-blue/10" />
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-4 pl-2 border-l border-slate-200" referrerPolicy="no-referrer" />
              </div>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
