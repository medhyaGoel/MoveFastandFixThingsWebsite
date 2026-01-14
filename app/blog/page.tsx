'use client';

import { motion } from "framer-motion";

const blogPosts = [
  {
    author: "Medhya Goel",
    title: "The myth of MVPs in government",
    date: "Fall 2025",
    excerpt: "Why speed is often the wrong metric in civic contexts. Building for government requires a different approach than building for startups.",
    category: "Reflection",
  },
  {
    author: "Emily Tianshi",
    title: "Against perpetual pilots",
    date: "Fall 2025",
    excerpt: "What it means to design for custody, not novelty. The importance of building systems that last beyond the initial launch.",
    category: "Reflection",
  },
  {
    author: "Medhya & Emily",
    title: "What we learned from 28 civic technologists",
    date: "Fall 2025",
    excerpt: "Key insights from convening preeminent civic technologists over 10 weeks. Patterns, challenges, and opportunities in the field.",
    category: "Course Reflection",
  },
];

const curatedNews = [
  {
    title: "Latest in GovTech",
    source: "Government Technology",
    date: "Recent",
    excerpt: "Updates on digital transformation in government agencies.",
  },
  {
    title: "Civic Tech Innovation",
    source: "Code for America",
    date: "Recent",
    excerpt: "New initiatives and projects in the civic technology space.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="min-h-screen pt-16 pb-14 px-2 md:px-4 lg:px-6">
        <div className="mx-auto max-w-[1700px]">
          {/* Big wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-jersey tracking-[-0.08em] leading-[0.78] text-[clamp(3.8rem,14vw,13.5rem)]"
          >
            BLOG
          </motion.h1>

          {/* Content section */}
          <div className="mt-8 md:mt-10">

          {/* Course Reflections */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white">Course Reflections</h2>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl border border-white/20 p-8 md:p-10 hover:border-white/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.15em] text-white/60 font-medium border border-white/20">
                      {post.category}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-sm text-white/60 font-light">{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">{post.excerpt}</p>
                  <p className="text-sm text-white/60 font-medium">
                    By <span className="text-white/90">{post.author}</span>
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Curated GovTech News */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white">Curated GovTech News</h2>
            <div className="space-y-6">
              {curatedNews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl border border-white/20 p-6 md:p-8 hover:border-white/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-white/60 font-medium">{item.source}</span>
                    <span className="text-white/30">•</span>
                    <span className="text-xs text-white/60 font-light">{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-base text-white/70 leading-relaxed font-light">{item.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 bg-white/10 rounded-xl border border-white/20 p-10 text-center"
          >
            <p className="text-lg text-white/70 font-light">
              More reflections and curated content coming soon.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
