import { Instagram, Facebook, Twitter, Youtube, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1 space-y-4">
             <Link to="/" className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-emerald-400" />
                <span className="font-serif text-2xl font-semibold text-white tracking-tight">
                  ShineBeauty
                </span>
              </Link>
            <p className="text-sm text-stone-400 max-w-xs">
              Reveal Your Natural Glow. Premium skincare products designed to nourish, protect, and enhance your natural beauty.
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Products</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Beauty Avenue</li>
              <li>New York, NY 10001, USA</li>
              <li>+1 (555) 123-4567</li>
              <li>support@shinebeauty.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-xs text-stone-500 space-y-1">
              <p>Instagram: @ShineBeautyOfficial</p>
              <p>Facebook: ShineBeauty</p>
              <p>X (Twitter): @ShineBeauty</p>
              <p>YouTube: ShineBeauty Skincare</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-sm text-center text-stone-500">
          <p>&copy; {new Date().getFullYear()} ShineBeauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
