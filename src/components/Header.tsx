import { Pizza, Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Hjem', id: 'hero' },
    { name: 'Meny', id: 'specials' },
    { name: 'Om Oss', id: 'about' },
    { name: 'Omtaler', id: 'reviews' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-charcoal/95 backdrop-blur-md border-b border-san-marzano/20 py-3 shadow-lg'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-san-marzano/20 rounded-full blur-md group-hover:bg-san-marzano/40 transition-all"></div>
              <Pizza className="w-10 h-10 text-san-marzano relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="text-2xl font-black tracking-wide text-flour-white">
              LA <span className="text-san-marzano">PIZZA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-flour-white/80 hover:text-san-marzano font-medium transition-colors text-lg relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-san-marzano transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+4712345678"
              className="flex items-center gap-2 text-flour-white/70 hover:text-san-marzano transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">123 45 678</span>
            </a>
            <button
              onClick={() => scrollToSection('footer')}
              className="bg-san-marzano hover:bg-san-marzano/90 text-flour-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-san-marzano/20"
            >
              Bestill Nå
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-flour-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-6 w-full px-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-3xl font-bold text-flour-white hover:text-san-marzano transition-colors w-full text-center py-2"
            >
              {link.name}
            </button>
          ))}

          <div className="w-16 h-1 bg-san-marzano/20 rounded-full my-4"></div>

          <a
            href="tel:+4712345678"
            className="flex items-center gap-3 text-xl text-flour-white/70 hover:text-san-marzano transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>123 45 678</span>
          </a>

          <button
            onClick={() => scrollToSection('footer')}
            className="mt-4 bg-san-marzano text-flour-white text-xl px-12 py-4 rounded-full font-bold shadow-xl shadow-san-marzano/20 active:scale-95 transition-all"
          >
            Bestill Nå
          </button>
        </div>
      </div>
    </>
  );
}
