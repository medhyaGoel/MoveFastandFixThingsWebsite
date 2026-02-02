'use client';

import { motion } from "framer-motion";

const opportunities = [
  {
    category: "Federal Service & Digital Corps",
    items: [
      {
        name: "U.S. Digital Service (USDS)",
        description: "Technology service that brings the best of the private sector to government.",
        link: "https://www.usds.gov/",
      },
      {
        name: "18F",
        description: "A digital services agency within the General Services Administration.",
        link: "https://18f.gsa.gov/",
      },
      {
        name: "Presidential Innovation Fellows",
        description: "A competitive program that pairs technologists with federal agencies.",
        link: "https://presidentialinnovationfellows.gov/",
      },
      {
        name: "U.S. Digital Corps",
        description: "Early-career technology program for recent graduates and early-career technologists.",
        link: "https://digitalcorps.gsa.gov/",
      },
    ],
  },
  {
    category: "State and Municipal Innovation",
    items: [
      {
        name: "Code for America",
        description: "Network of people making government work for the people, by the people, in the digital age.",
        link: "https://www.codeforamerica.org/",
      },
      {
        name: "Civic Tech Jobs",
        description: "Job board for civic technology positions across all levels of government.",
        link: "https://civictechjobs.org/",
      },
    ],
  },
  {
    category: "Public-Interest Startups & Labs",
    items: [
      {
        name: "Civic Tech Organizations",
        description: "Various startups and labs working on public-interest technology.",
        link: "#",
      },
      {
        name: "Public Interest Technology",
        description: "Organizations focused on technology in service of the public good.",
        link: "#",
      },
    ],
  },
];

export default function Opportunities() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="min-h-screen pt-24 md:pt-16 pb-14 px-2 md:px-4 lg:px-6">
        <div className="mx-auto max-w-[1700px]">
          {/* Big wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-jersey tracking-[-0.08em] leading-[0.78] text-[clamp(3.8rem,14vw,13.5rem)]"
          >
            OPPORTUNITIES
          </motion.h1>

          {/* Content section */}
          <div className="mt-8 md:mt-10">

          <div className="space-y-20">
            {opportunities.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-white">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                      className="bg-white/10 rounded-xl border border-white/20 p-6 md:p-8 hover:border-white/30 transition-all group"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-base text-white/70 leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>
                      <p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors flex items-center gap-2">
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </p>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 bg-white/10 rounded-xl border border-white/20 p-10"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Additional Resources</h3>
            <p className="text-lg text-white/70 mb-6 font-light">
              For more opportunities, check out:
            </p>
            <ul className="space-y-3 text-white/70">
              {['Civic Tech Slack communities', 'Government technology job boards', 'Public interest technology fellowship programs'].map((resource, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
                  <span className="font-light">{resource}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
