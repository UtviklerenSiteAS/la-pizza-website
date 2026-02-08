import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  const orderingOptions = [
    {
      name: 'Wolt',
      url: '#',
      color: 'bg-[#00c2e8]',
    },
    {
      name: 'Foodora',
      url: '#',
      color: 'bg-[#e21b70]',
    },
  ];

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 15 && currentHour < 22;

  return (
    <footer id="footer" className="bg-charcoal border-t border-san-marzano/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-san-marzano" />
              Finn oss
            </h3>
            <p className="text-flour-white/80 mb-4">
              Idunveien 13
              <br />
              4631 Kristiansand
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Idunveien+13+Kristiansand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-san-marzano hover:text-san-marzano/80 transition-colors font-semibold"
            >
              Åpne i Google Maps <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-san-marzano" />
              Åpningstider
            </h3>
            <div className="space-y-2 text-flour-white/80">
              <p className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {isOpen ? 'Åpent nå' : 'Stengt nå'}
              </p>
              <p>Man–Tor: 15:00–22:00</p>
              <p>Fre–Lør: 15:00–23:00</p>
              <p>Søndag: 15:00–22:00</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6 text-san-marzano" />
              Bestill
            </h3>
            <a
              href="tel:41416500"
              className="inline-block bg-san-marzano hover:bg-san-marzano/90 text-flour-white px-6 py-3 rounded-lg font-bold text-xl mb-6 transition-all hover:scale-105 active:scale-95"
            >
              41 41 65 00
            </a>

            <div className="space-y-3">
              <p className="text-sm text-flour-white/60 font-semibold">Eller bestill via:</p>
              {orderingOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${option.color} hover:opacity-90 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-between transition-all hover:scale-105 active:scale-95`}
                >
                  <span>{option.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-san-marzano/20 pt-8 text-center">
          <p className="text-flour-white/60">
            © {new Date().getFullYear()} LA PIZZA Kristiansand. Ekte italiensk håndverk.
          </p>
        </div>
      </div>
    </footer>
  );
}
