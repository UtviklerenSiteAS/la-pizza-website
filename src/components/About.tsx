import { Flame, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Flame,
      title: 'Stekovnsbakt',
      description: 'Hver pizza bakes i vår italienske steinovn ved høy temperatur',
    },
    {
      icon: Award,
      title: 'Håndverk',
      description: 'Vi lager all deig fra bunnen av, hver eneste dag',
    },
    {
      icon: Heart,
      title: 'Lidenskap',
      description: 'Kvalitet over kvantitet er vår filosofi',
    },
  ];

  return (
    <section id="about" className="py-20 bg-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Det lille lokalet med den{' '}
              <span className="text-san-marzano">store smaken</span>
            </h2>
            <div className="w-24 h-1 bg-san-marzano mx-auto mb-8"></div>
          </div>

          <p className="text-xl text-flour-white/90 leading-relaxed mb-12 text-center">
            Vi baker i et intimt lokale i Idunveien, hvor kvalitet alltid trumfer kvantitet.
            Her er det håndverket som står i fokus. Hver pizza er et resultat av italiensk
            tradisjon møter lokal kjærlighet til god mat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-charcoal/50 border border-san-marzano/20 rounded-xl hover:border-san-marzano/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-san-marzano/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-san-marzano" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-flour-white/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
