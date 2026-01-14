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
    <div className="min-h-screen bg-gradient-to-b from-[#fafaf9] to-white text-[#0a0a0a] pt-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-[#0a0a0a]">Blog</h1>
          <p className="text-xl text-[#4a4a4a] mb-16 font-light">
            Reflections from the course and curated feed of what's happening in GovTech
          </p>

          {/* Course Reflections */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-[#0a0a0a]">Course Reflections</h2>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-[#e5e5e5] p-8 md:p-10 hover:border-[#ccc] hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#fafaf9] text-xs uppercase tracking-[0.15em] text-[#999] font-medium border border-[#e5e5e5]">
                      {post.category}
                    </span>
                    <span className="text-[#e5e5e5]">•</span>
                    <span className="text-sm text-[#999] font-light">{post.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0a0a0a] group-hover:text-[#333] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-lg text-[#4a4a4a] mb-6 leading-relaxed font-light">{post.excerpt}</p>
                  <p className="text-sm text-[#666] font-medium">
                    By <span className="text-[#0a0a0a]">{post.author}</span>
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          {/* Curated GovTech News */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-[#0a0a0a]">Curated GovTech News</h2>
            <div className="space-y-6">
              {curatedNews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-[#e5e5e5] p-6 md:p-8 hover:border-[#ccc] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[#999] font-medium">{item.source}</span>
                    <span className="text-[#e5e5e5]">•</span>
                    <span className="text-xs text-[#999] font-light">{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#0a0a0a]">{item.title}</h3>
                  <p className="text-base text-[#4a4a4a] leading-relaxed font-light">{item.excerpt}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 bg-gradient-to-br from-white to-[#fafaf9] rounded-xl border border-[#e5e5e5] p-10 text-center shadow-sm"
          >
            <p className="text-lg text-[#4a4a4a] font-light">
              More reflections and curated content coming soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
