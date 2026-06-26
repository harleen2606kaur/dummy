import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Droplet, Truck, Star } from 'lucide-react';
import { products, reviews } from '../data';
import SEO from '../components/SEO';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Shine Beauty Glow | Skincare Products for  Glowing Skin" 
        description="Discover premium skincare products at Shine Beauty Glow. Shop face serums,moisturizers, cleansers, and beauty essentials for healthy, and glowing skin."
      />
      {/* Hero Section */}
      <section className="relative bg-stone-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=2000&q=80" 
            alt="Natural Skincare" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 flex flex-col items-center text-center">
          <p className="text-emerald-800 font-medium tracking-widest uppercase mb-4 text-sm">
            Reveal Your Natural Glow
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6 max-w-3xl leading-tight">
            Welcome to ShineBeauty Glow
          </h1>
          <p className="text-lg md:text-xl text-stone-700 mb-10 max-w-2xl leading-relaxed">
            Discover premium skincare products designed to nourish, protect, and enhance your natural beauty. Our carefully selected ingredients help you achieve healthy, glowing skin every day.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white rounded-full font-medium hover:bg-emerald-900 transition-colors duration-300 shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Why Choose ShineBeauty?</h2>
            <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard 
              icon={<Leaf className="h-8 w-8 text-emerald-700" />}
              title="Natural Ingredients"
              description="We use skin-friendly ingredients inspired by nature."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-emerald-700" />}
              title="Dermatologist Tested"
              description="Our products are tested to ensure safety and effectiveness."
            />
            <FeatureCard 
              icon={<Droplet className="h-8 w-8 text-emerald-700" />}
              title="Suitable for All"
              description="Whether your skin is dry, oily, or sensitive, we have solutions for you."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-emerald-700" />}
              title="Fast Delivery"
              description="Get your favorite skincare products delivered to your doorstep."
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Featured Products</h2>
            <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
               <Link to="/products" key={product.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-100">
                <div className="aspect-square w-full bg-stone-100 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h3 className="text-lg font-medium text-stone-900 mb-2 font-serif group-hover:text-emerald-700 transition-colors">{product.name}</h3>
                  <p className="text-emerald-700 font-medium mt-auto">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="inline-block text-emerald-700 font-medium hover:text-emerald-800 transition-colors border-b-2 border-emerald-700 hover:border-emerald-800 pb-1">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Customer Reviews</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <div key={review.id} className="bg-emerald-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
                <div className="flex gap-1 mb-6 text-yellow-400">
                   {[...Array(review.rating)].map((_, i) => (
                     <Star key={i} className="h-5 w-5 fill-current" />
                   ))}
                </div>
                <blockquote className="text-lg mb-6 leading-relaxed font-serif italic text-emerald-50">
                  "{review.quote}"
                </blockquote>
                <p className="font-medium text-emerald-200 mt-auto">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-stone-50 transition-colors">
      <div className="p-4 bg-emerald-50 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium font-serif text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-600 leading-relaxed">{description}</p>
    </div>
  );
}
