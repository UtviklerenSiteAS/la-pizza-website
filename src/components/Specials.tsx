import { Sparkles, Calendar, Heart } from 'lucide-react';

export default function Specials() {
  const pizzas = [
    {
      icon: Heart,
      name: 'Pizza Salame med Parmesan',
      description: 'Vår signatur',
      details: 'Håndplukket salame, fersk parmesan, og italienske krydder på sprø bunn.',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Signatur',
    },
    {
      icon: Calendar,
      name: 'Månedens Pizza',
      description: 'Alltid en ny overraskelse',
      details: 'Hver måned presenterer vi en helt unik smaksopplevelse. Spør oss hva som gjelder nå!',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Limited Edition',
    },
    {
      icon: Sparkles,
      name: 'Klassisk Margherita',
      description: 'Enkelhet perfeksjonert',
      details: 'San Marzano tomater, fersk mozzarella, basilikum, og ekstra jomfruolje.',
      image: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=800',
      badge: 'Klassiker',
    },
  ];

  return (
    <section id="specials" className="py-20 bg-gradient-to-b from-charcoal to-charcoal/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Våre <span className="text-san-marzano">Signaturer</span>
          </h2>
          <p className="text-xl text-flour-white/70 max-w-2xl mx-auto">
            Hver pizza er laget med passion og italiensk håndverkstradisjon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pizzas.map((pizza, index) => {
            const Icon = pizza.icon;
            return (
              <div
                key={index}
                className="group bg-charcoal border border-san-marzano/20 rounded-2xl overflow-hidden hover-lift cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-san-marzano text-flour-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      {pizza.badge}
                    </span>
                  </div>
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-san-marzano" />
                    <h3 className="text-2xl font-bold">{pizza.name}</h3>
                  </div>
                  <p className="text-san-marzano font-semibold mb-3">{pizza.description}</p>
                  <p className="text-flour-white/70 leading-relaxed">{pizza.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
