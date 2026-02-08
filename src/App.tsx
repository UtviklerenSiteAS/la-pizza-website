import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Specials from './components/Specials';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <SocialProof />
      <Specials />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
