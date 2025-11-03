import { useState } from 'react';
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-semibold tracking-tight">atelier.</a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
              <a href="#women" className="hover:text-black transition-colors">Women</a>
              <a href="#men" className="hover:text-black transition-colors">Men</a>
              <a href="#new" className="hover:text-black transition-colors">New Arrivals</a>
              <a href="#sale" className="hover:text-black transition-colors">Sale</a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-3 py-2 w-64 rounded-full bg-neutral-100 focus:bg-white border border-transparent focus:border-neutral-300 outline-none transition"
              />
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
            <button className="p-2 hover:bg-neutral-100 rounded-full" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-neutral-100 rounded-full relative" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
            </button>
          </div>

          <button
            className="md:hidden p-2 hover:bg-neutral-100 rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <nav className="grid gap-3 text-neutral-800">
              <a href="#women" className="px-2 py-2 rounded hover:bg-neutral-100">Women</a>
              <a href="#men" className="px-2 py-2 rounded hover:bg-neutral-100">Men</a>
              <a href="#new" className="px-2 py-2 rounded hover:bg-neutral-100">New Arrivals</a>
              <a href="#sale" className="px-2 py-2 rounded hover:bg-neutral-100">Sale</a>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-3 py-2 w-full rounded-md bg-neutral-100 border border-transparent focus:border-neutral-300 outline-none"
                />
                <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
