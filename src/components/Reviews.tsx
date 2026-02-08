import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const reviews = [
    {
      text: 'Nyyyydelig pizza – nummer 10 er en slager!',
      author: 'Maria H.',
      rating: 5,
    },
    {
      text: 'Fantastisk italiensk, tynn bunn. Helt prima.',
      author: 'Thomas S.',
      rating: 5,
    },
    {
      text: 'Den beste pizzaen i Kristiansand, uten tvil!',
      author: 'Kristine B.',
      rating: 5,
    },
    {
      text: 'Autentisk smak og perfekt skorpe. Kommer tilbake!',
      author: 'Erik L.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-charcoal/95 to-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Hva våre <span className="text-san-marzano">gjester sier</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-charcoal border border-san-marzano/30 rounded-2xl p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-san-marzano/20" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-san-marzano text-san-marzano" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-light text-flour-white text-center mb-6 leading-relaxed">
                "{reviews[currentIndex].text}"
              </p>

              <p className="text-san-marzano font-semibold text-center text-lg">
                — {reviews[currentIndex].author}
              </p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                      ? 'bg-san-marzano w-8'
                      : 'bg-flour-white/30 hover:bg-flour-white/50'
                    }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
