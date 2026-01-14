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
    <div className="min-h-screen bg-gradient-to-b from-[#fafaf9] to-white text-[#0a0a0a] pt-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-[#0a0a0a]">Fellowships & Opportunities</h1>
          <p className="text-xl text-[#4a4a4a] mb-16 font-light">
            Pathways into GovTech and civic technology careers
          </p>

          <div className="space-y-20">
            {opportunities.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#0a0a0a]">
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
                      className="bg-white rounded-xl border border-[#e5e5e5] p-6 md:p-8 hover:border-[#ccc] hover:shadow-lg transition-all group"
                    >
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-[#0a0a0a] group-hover:text-[#333] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-base text-[#4a4a4a] leading-relaxed mb-4 font-light">
                        {item.description}
                      </p>
                      <p className="text-sm text-[#999] font-medium group-hover:text-[#666] transition-colors flex items-center gap-2">
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
            className="mt-20 bg-gradient-to-br from-white to-[#fafaf9] rounded-xl border border-[#e5e5e5] p-10 shadow-sm"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#0a0a0a]">Additional Resources</h3>
            <p className="text-lg text-[#4a4a4a] mb-6 font-light">
              For more opportunities, check out:
            </p>
            <ul className="space-y-3 text-[#4a4a4a]">
              {['Civic Tech Slack communities', 'Government technology job boards', 'Public interest technology fellowship programs'].map((resource, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#999]"></span>
                  <span className="font-light">{resource}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
