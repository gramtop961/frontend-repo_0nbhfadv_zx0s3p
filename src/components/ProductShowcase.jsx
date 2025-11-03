import { useMemo, useState } from 'react';

const sampleProducts = [
  { id: 1, title: "Linen Blend Blazer", price: 129, tag: "Women", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop" },
  { id: 2, title: "Relaxed Cotton Shirt", price: 59, tag: "Men", img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1964&auto=format&fit=crop" },
  { id: 3, title: "Wide-Leg Trousers", price: 89, tag: "Women", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Everyday Tee", price: 25, tag: "Men", img: "https://images.unsplash.com/photo-1520975682031-e2403fdd9a55?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Ribbed Knit Dress", price: 99, tag: "Women", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2074&auto=format&fit=crop" },
  { id: 6, title: "Tailored Chinos", price: 79, tag: "Men", img: "https://images.unsplash.com/photo-1503342166415-4aa9c223e111?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, title: "Cashmere Crewneck", price: 149, tag: "Men", img: "https://images.unsplash.com/photo-1620799139504-5c9d3dff0076?q=80&w=2069&auto=format&fit=crop" },
  { id: 8, title: "Pleated Midi Skirt", price: 89, tag: "Women", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2067&auto=format&fit=crop" },
];

function ProductCard({ product }) {
  return (
    <a
      href="#"
      className="group block rounded-xl overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm text-neutral-900">{product.title}</h3>
          <span className="text-sm font-semibold">${product.price}</span>
        </div>
        <p className="mt-1 text-xs text-neutral-500">{product.tag}</p>
        <button className="mt-3 w-full text-center text-sm py-2 rounded-md bg-black text-white hover:opacity-90">
          Add to cart
        </button>
      </div>
    </a>
  );
}

export default function ProductShowcase() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return sampleProducts;
    return sampleProducts.filter((p) => p.tag === filter);
  }, [filter]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="new">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">New Arrivals</h2>
          <p className="mt-1 text-neutral-600">Curated pieces designed for versatility.</p>
        </div>
        <div className="hidden sm:flex gap-2">
          {['All', 'Women', 'Men'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                filter === t ? 'bg-black text-white border-black' : 'bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="sm:hidden mt-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border border-neutral-200 rounded-md px-3 py-2 bg-white"
        >
          {['All', 'Women', 'Men'].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
