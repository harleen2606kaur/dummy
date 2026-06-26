import { Calendar, BookOpen } from 'lucide-react';
import { blogs } from '../data';
import SEO from '../components/SEO';

export default function BlogPage() {
  return (
    <div className="bg-stone-50 min-h-screen">
       <SEO 
         title="Latest Skincare Blog | ShineBeauty Glow Tips" 
         description="Read our latest blog posts for expert skincare tips, morning routines, and advice on achieving clear, naturally glowing skin with our premium skincare products."
       />
       {/* Header */}
       <section className="bg-emerald-900 py-24 text-center text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookOpen className="h-12 w-12 mx-auto mb-6 text-emerald-300 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Latest Skincare Blog & Tips</h1>
          <p className="text-lg text-emerald-50 max-w-2xl mx-auto font-light leading-relaxed">
            Discover articles, routines, and insights to help you achieve your healthiest skin yet.
          </p>
        </div>
      </section>

      {/* Blogs Layout */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {blogs.map((blog) => (
             <article key={blog.id} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="mb-6 flex items-center gap-2 text-sm text-emerald-700 font-medium">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={blog.publishedAt}>{blog.publishedAt}</time>
                </div>
                
                <h2 className="text-3xl font-serif text-stone-900 mb-8 leading-tight">
                  {blog.title}
                </h2>
                
                <div className="prose prose-stone prose-emerald prose-lg max-w-none text-stone-600 whitespace-pre-line leading-relaxed">
                  {blog.content}
                </div>
             </article>
          ))}
        </div>
      </section>
    </div>
  );
}
