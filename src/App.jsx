import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import Footer from './components/Footer.jsx';

function PromoBanner() {
  return (
    <div className="bg-neutral-900 text-white text-center text-sm py-2 px-4">
      Free express shipping on orders over $100 • Free returns within 30 days
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <PromoBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="women" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold">Curated for Women</h2>
          <p className="mt-1 text-neutral-600">Soft textures, tailored lines, modern ease.</p>
        </section>
        <ProductShowcase />
        <section id="men" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-semibold">Essentials for Men</h2>
          <p className="mt-1 text-neutral-600">Relaxed staples made to move with you.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
