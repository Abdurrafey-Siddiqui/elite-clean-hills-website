import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, HardHat, FileText } from 'lucide-react';

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Houzz", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Houzz_logo.svg" },
  { name: "Yelp", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" },
];

const credentials = [
  { icon: ShieldCheck, text: "Compliance Focused" },
  { icon: UserCheck, text: "Police Checked" },
  { icon: HardHat, text: "White Card & EWP" },
  { icon: FileText, text: "WWCC Certified" }
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-b">

      {/* Credentials Banner */}
      <div className="bg-slate-900 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 text-white/90">
            <div className="text-sm font-bold tracking-widest uppercase text-brand-blue hidden md:block">
              Fully Qualified & Compliant
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                  <cred.icon className="w-5 h-5 text-brand-accent" />
                  <span>{cred.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
