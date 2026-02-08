import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('specials');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    const element = document.getElementById('footer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 transform scale-105"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">

        {/* Main Heading with Staggered Animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
          <span className="block fade-in-up delay-100">
            Sørlandets kanskje
          </span>
          <span className="block text-gradient fade-in-up delay-300">
            beste pizza?
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed text-flour-white/80 fade-in-up delay-500">
          Opplev smaken av Napoli midt i Kristiansand. <br className="hidden md:block" />
          Med råvarer importert direkte fra Italia og en lidenskap for det perfekte.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up delay-700">
          <button
            onClick={scrollToOrder}
            className="group relative px-8 py-4 bg-san-marzano text-flour-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(224,27,36,0.5)] active:scale-95 min-w-[200px]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative flex items-center justify-center gap-2">
              Bestill Takeaway
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={scrollToMenu}
            className="group px-8 py-4 glass text-flour-white rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 min-w-[200px] border-white/20"
          >
            Se Menyen
          </button>
        </div>
      </div>

    </section>
  );
}
