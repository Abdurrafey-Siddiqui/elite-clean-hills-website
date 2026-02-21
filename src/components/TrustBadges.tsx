import { motion } from 'motion/react';

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Houzz", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Houzz_logo.svg" },
  { name: "Yelp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by homeowners & reviewed on
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              src={brand.logo}
              alt={`${brand.name} reviews`}
              className="h-8 md:h-10 object-contain"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
