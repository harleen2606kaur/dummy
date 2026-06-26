import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="About Us | ShineBeauty Glow" 
        description="Learn more about ShineBeauty Glow, our mission to provide high-quality skincare solutions, and our commitment to helping you achieve healthy, radiant skin."
      />
      {/* Header */}
      <section className="bg-stone-50 py-20 border-b border-stone-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">About ShineBeauty Glow</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Dedicated to helping people achieve healthy and radiant skin through high-quality skincare solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80" 
                  alt="Our Founder" 
                  className="rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
                />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif text-stone-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-700"></span>
                  Our Story
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  Founded in 2024, ShineBeauty is dedicated to helping people achieve healthy and radiant skin through high-quality skincare solutions. We believe in the power of natural ingredients to transform and protect your skin everyday.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-stone-100">
            <div className="bg-emerald-50 rounded-3xl p-10 transform sm:-rotate-1 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-2xl font-serif text-emerald-900 mb-4">Our Mission</h2>
              <p className="text-emerald-800 leading-relaxed">
                Our mission is to provide effective skincare products made with carefully selected ingredients that support skin health and confidence.
              </p>
            </div>
            <div className="bg-stone-50 rounded-3xl p-10 transform sm:rotate-1 hover:rotate-0 transition-transform duration-300">
              <h2 className="text-2xl font-serif text-stone-900 mb-4">Our Vision</h2>
              <p className="text-stone-700 leading-relaxed">
                To become a trusted skincare brand known for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="pt-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Values</h2>
              <div className="w-16 h-1 bg-emerald-200 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <ValueCard 
                title="Quality" 
                text="We never compromise on product quality." 
              />
              <ValueCard 
                title="Transparency" 
                text="We clearly list ingredients and product benefits." 
              />
              <ValueCard 
                title="Sustainability" 
                text="We strive to use eco-friendly packaging whenever possible." 
              />
              <ValueCard 
                title="Customer Care" 
                text="Your skincare journey is our priority." 
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

function ValueCard({ title, text }: { title: string, text: string }) {
  return (
    <div className="flex gap-4 p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600">{text}</p>
      </div>
    </div>
  );
}
