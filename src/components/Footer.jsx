export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-medium mb-3">Shop</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#women" className="hover:text-black">Women</a></li>
              <li><a href="#men" className="hover:text-black">Men</a></li>
              <li><a href="#new" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#sale" className="hover:text-black">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Sustainability</a></li>
              <li><a href="#" className="hover:text-black">Careers</a></li>
              <li><a href="#" className="hover:text-black">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Help</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-black">Customer Service</a></li>
              <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black">Size Guide</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Newsletter</h4>
            <p className="text-neutral-600 mb-3">Be the first to know about new drops and exclusive offers.</p>
            <form className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-md border border-neutral-200 bg-white outline-none focus:border-neutral-400"
              />
              <button className="px-4 py-2 rounded-md bg-black text-white hover:opacity-90" type="submit">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} atelier. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
