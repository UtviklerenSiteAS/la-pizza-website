import { Star, Users, Award } from 'lucide-react';

export default function SocialProof() {
  const stats = [
    { icon: Star, value: '4.7 stjerner', label: 'på Google' },
    { icon: Users, value: '385+', label: 'anmeldelser' },
    { icon: Award, value: 'Anbefalt', label: 'av lokalbefolkningen' },
  ];

  return (
    <section className="bg-charcoal border-y border-san-marzano/30 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 text-center md:border-r last:border-r-0 border-san-marzano/20"
              >
                <Icon className="w-8 h-8 text-san-marzano flex-shrink-0" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-flour-white">{stat.value}</div>
                  <div className="text-sm text-flour-white/70">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
