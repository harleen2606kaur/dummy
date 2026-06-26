import { CheckCircle2, Droplet, Star, ShieldCheck } from 'lucide-react';
import { products } from '../data';
import SEO from '../components/SEO';

const services = [
  {
    id: 'consultation',
    title: 'Personalized Skincare Consultation',
    description: 'Get a 1-on-1 session with our skincare experts to find the perfect routine for your unique skin type.',
    icon: <Star className="h-8 w-8 text-emerald-700" />,
  },
  {
    id: 'facial-treatment',
    title: 'Signature Glow Facial',
    description: 'Experience our deeply hydrating and brightening facial treatments at our partner spas.',
    icon: <Droplet className="h-8 w-8 text-emerald-700" />,
  },
  {
    id: 'skin-analysis',
    title: 'Advanced Skin Analysis',
    description: 'We use cutting edge technology to understand your skins deep needs and craft suitable formulas.',
    icon: <ShieldCheck className="h-8 w-8 text-emerald-700" />,
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <SEO 
        title="Our Skincare Products & Services | ShineBeauty Glow" 
        description="Explore our complete line of natural skincare products and professional services. Shop serums, face creams, and book skincare consultations."
      />
      {/* Header */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Products & Services</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Explore our range of premium skincare products and discover our personalized services designed for your skin health.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Skincare Services</h2>
            <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col text-center items-center">
                <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-serif text-stone-900 mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <button className="w-full mt-auto py-3 bg-emerald-800 text-white rounded-xl font-medium hover:bg-emerald-900 transition-colors duration-300 shadow-sm">
                  Book Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Premium Products</h2>
            <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
                 <div className="aspect-[4/3] w-full bg-stone-100 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-stone-900 shadow-sm pointer-events-none">
                    {product.price}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                     <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                       {String(index + 1).padStart(2, '0')}
                     </p>
                    <h2 className="text-2xl font-serif text-stone-900 leading-tight">
                      {product.name}
                    </h2>
                  </div>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="border-t border-stone-100 pt-6">
                    <h3 className="font-medium text-stone-900 mb-4 px-1">Benefits</h3>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-stone-600 text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full mt-8 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-emerald-800 transition-colors duration-300 shadow-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
