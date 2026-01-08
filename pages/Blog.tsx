
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Why Ads Fail Without a Proper Growth System',
    excerpt: 'Many businesses burn cash on Meta ads without a solid conversion-focused landing page. Discover why systems matter.',
    author: 'Vijay K.',
    date: 'Oct 12, 2024',
    category: 'Strategy',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Website vs Landing Page: Which One Do You Need?',
    excerpt: 'The age-old debate. We break down when to use a standard business website and when a dedicated funnel is required.',
    author: 'Kunal S.',
    date: 'Oct 08, 2024',
    category: 'Web Design',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'How to Reduce Your Cost Per Lead by 40%',
    excerpt: 'Optimization is the key to scaling. Learn the top 3 techniques we use to trim the fat from client campaigns.',
    author: 'Anjali S.',
    date: 'Sep 25, 2024',
    category: 'Ads',
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-24 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brandBlue mb-6">Blog & <span className="text-brandOrange">Insights</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Expert guides on scaling your business through performance marketing and systems.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-brandBlue/5 text-brandBlue px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-brandBlue mb-6 group-hover:text-brandOrange transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                      <span className="text-slate-600 font-bold text-sm">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-brandBlue font-black flex items-center gap-2 hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
