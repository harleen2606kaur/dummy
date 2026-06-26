import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      // Reset form visually or ideally clear fields
    }, 1500);
  };

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <SEO 
        title="Contact ShineBeauty Glow | Customer Support" 
        description="Get in touch with ShineBeauty Glow. Whether you have questions about our premium skincare products or need advice, we are here to help."
      />
      {/* Header */}
      <section className="bg-white py-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Contact ShineBeauty Glow</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            We would love to hear from you! Whether you have a question about our products or need routine advice.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-serif text-stone-900 mb-8">Get In Touch</h2>
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-700 shrink-0 mt-1">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-lg">Address</h3>
                  <p className="text-stone-600 mt-1">123 Beauty Avenue<br />New York, NY 10001, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-700 shrink-0 mt-1">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-lg">Phone</h3>
                  <p className="text-stone-600 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-700 shrink-0 mt-1">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-lg">Email</h3>
                  <p className="text-stone-600 mt-1">support@shinebeauty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-full text-emerald-700 shrink-0 mt-1">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 text-lg">Business Hours</h3>
                  <p className="text-stone-600 mt-1">
                    Monday – Friday: 9:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Social Follow */}
            <div className="mt-12 pt-12 border-t border-stone-200">
               <h3 className="font-serif text-xl text-stone-900 mb-6">Follow Us</h3>
               <div className="flex gap-4">
                 <a href="#" className="bg-white p-3 rounded-full shadow-sm text-stone-600 hover:text-emerald-700 hover:shadow-md transition-all">
                   <Instagram className="h-5 w-5" />
                 </a>
                 <a href="#" className="bg-white p-3 rounded-full shadow-sm text-stone-600 hover:text-emerald-700 hover:shadow-md transition-all">
                   <Facebook className="h-5 w-5" />
                 </a>
                 <a href="#" className="bg-white p-3 rounded-full shadow-sm text-stone-600 hover:text-emerald-700 hover:shadow-md transition-all">
                   <Twitter className="h-5 w-5" />
                 </a>
                 <a href="#" className="bg-white p-3 rounded-full shadow-sm text-stone-600 hover:text-emerald-700 hover:shadow-md transition-all">
                   <Youtube className="h-5 w-5" />
                 </a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12">
            <h2 className="text-2xl font-serif text-stone-900 mb-8">Send a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-3">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 text-emerald-700 font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Name</label>
                  <input type="text" id="name" required
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                    <input type="email" id="email" required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">Phone</label>
                    <input type="tel" id="phone" required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                  <input type="text" id="subject" required
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                  <textarea id="message" rows={5} required
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-emerald-800 text-white rounded-xl font-medium hover:bg-emerald-900 transition-colors shadow-sm disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
