export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <img
          src="https://images.unsplash.com/photo-1520975922284-7b6836dd5ae9?q=80&w=2070&auto=format&fit=crop"
          alt="Fashion background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-xs tracking-wide">Spring/Summer '25</span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Effortless silhouettes for modern living
          </h1>
          <p className="mt-4 text-neutral-700 text-lg">
            Discover premium essentials crafted with natural fabrics, refined cuts, and timeless palettes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#new" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white hover:opacity-90 transition">
              Shop New Arrivals
            </a>
            <a href="#women" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-black border border-neutral-200 hover:bg-neutral-50 transition">
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
