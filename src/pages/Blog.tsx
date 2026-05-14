import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search, Tag } from 'lucide-react';
import { formatDate } from '../lib/utils';

export const blogPosts = [
  {
    id: 'publish-guide',
    title: 'The Modern Author’s Guide to Publishing in 2024',
    excerpt: 'Deep dive into the transition from traditional publishing to hybrid and self-publishing models.',
    date: '2024-05-10',
    category: 'Publishing',
    image: 'https://picsum.photos/seed/book1/600/400',
    author: 'Elena Vance'
  },
  {
    id: 'ghostwriting-cost',
    title: 'Understanding the Real Cost of Professional Ghostwriting',
    excerpt: 'Why $20,000 is often the starting point for quality, and what value you actually get for your investment.',
    date: '2024-04-28',
    category: 'Agency',
    image: 'https://picsum.photos/seed/money/600/400',
    author: 'Marcus Gold'
  },
  {
    id: 'hiring-tips',
    title: '7 Questions to Ask Before Hiring a Ghostwriter',
    excerpt: 'Ensuring your voice is preserved and your vision is understood is paramount. Ask these questions first.',
    date: '2024-04-15',
    category: 'Advice',
    image: 'https://picsum.photos/seed/interview/600/400',
    author: 'Elena Vance'
  },
  {
    id: 'memoir-tips',
    title: 'Memoir Writing: How to Tell Your Story Without Over-Sharing',
    excerpt: 'The art of emotional resonance is often in what you leave out. Learn the balance of vulnerability.',
    date: '2024-03-20',
    category: 'Writing',
    image: 'https://picsum.photos/seed/journal/600/400',
    author: 'Julius Reed'
  },
  {
    id: 'kdp-guide',
    title: 'Navigating Amazon KDP: A Roadmap for Elite Distribution',
    excerpt: 'A technical guide to mastering metadata, categories, and keywords for maximum Amazon visibility.',
    date: '2024-03-05',
    category: 'Distribution',
    image: 'https://picsum.photos/seed/tech/600/400',
    author: 'Sarah Chen'
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-sans text-accent font-bold mb-4 block">The Goldleaf Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-ink">
              Insights on <br /> <span className="italic font-normal italic">Literature</span>
            </h1>
          </div>
          <div className="w-full lg:w-96 flex items-center bg-white border border-black/5 rounded-full px-6 py-3 shadow-sm">
            <Search className="w-4 h-4 text-ink/40 mr-3" />
            <input 
              placeholder="Search articles..." 
              className="bg-transparent focus:outline-none font-serif text-sm w-full"
            />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative mb-20 aspect-[16/7] rounded-[40px] overflow-hidden shadow-2xl"
        >
          <img 
            src={blogPosts[0].image} 
            alt="Featured Post" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-accent text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
                <span className="text-white/60 text-xs uppercase tracking-widest font-sans">
                  {formatDate(blogPosts[0].date)}
                </span>
              </div>
              <Link to={`/blog/${blogPosts[0].id}`}>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 group-hover:text-gold transition-colors">
                  {blogPosts[0].title}
                </h2>
              </Link>
              <p className="text-white/70 text-lg font-serif italic mb-8">
                {blogPosts[0].excerpt}
              </p>
              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="inline-flex items-center text-accent text-sm font-bold uppercase tracking-widest"
              >
                Read Masterclass
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.slice(1).map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-black/5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                   <span className="bg-white/90 backdrop-blur-md text-ink text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-black/5">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                  {formatDate(post.date)}
                </span>
                <div className="w-1 h-1 bg-accent rounded-full" />
                <span className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">
                  {post.author}
                </span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-ink/60 text-sm font-serif italic leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-ink hover:text-accent transition-colors"
              >
                Continue Reading
                <ArrowUpRight className="ml-1 w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Subscribe / Newsletter */}
        <div className="mt-24 bg-white rounded-[40px] p-12 md:p-20 border border-black/5 shadow-xl text-center">
          <div className="max-w-2xl mx-auto">
             <Tag className="w-8 h-8 text-accent mx-auto mb-6" />
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The Curator's List</h2>
             <p className="text-lg text-ink/60 font-serif italic italic mb-10">
               Direct insights on publishing, author branding, and high-end storytelling. No spam, only excellence.
             </p>
             <form className="flex flex-col sm:flex-row gap-4">
               <input 
                placeholder="Enter your email address"
                className="flex-grow bg-paper border border-black/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 font-serif"
               />
               <button className="bg-ink text-white px-10 py-4 rounded-2xl text-[10px] uppercase font-bold tracking-widest hover:bg-accent transition-colors">
                 Join the Elite
               </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
}
