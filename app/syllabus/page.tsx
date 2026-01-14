'use client';

import { motion } from "framer-motion";

export default function Syllabus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fafaf9] to-white text-[#0a0a0a] pt-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-[#0a0a0a]">Syllabus</h1>
          <p className="text-xl text-[#4a4a4a] mb-16 font-light">
            Course materials and slide presentations from POLISCI 33SI
          </p>

          {/* Placeholder for Google Doc integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-xl border border-[#e5e5e5] p-16 mb-16 shadow-sm"
          >
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#f0f0f0] to-[#e5e5e5] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-lg text-[#666] mb-2 font-medium">Syllabus content will be embedded here</p>
              <p className="text-sm text-[#999]">
                Connect your Google Doc or upload PDF slides
              </p>
            </div>
          </motion.div>

          {/* Week-by-week structure */}
          <div className="space-y-6">
            {[
              {
                week: "Week 1",
                title: "Foundations",
                description: "Introduction to civic technology and its institutional context.",
                items: ["Reading materials", "Slide deck", "Discussion questions"],
              },
              {
                week: "Week 2-4",
                title: "Failure Modes",
                description: "Exploring where civic technology succeeds and fails.",
                items: ["Scale challenges", "Procurement issues", "Trust and legitimacy"],
              },
              {
                week: "Week 5-10",
                title: "Building What Lasts",
                description: "Stewardship, maintenance, and institutional alignment.",
                items: ["Long-term sustainability", "Maintenance strategies", "Institutional alignment"],
              },
            ].map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white rounded-xl border border-[#e5e5e5] p-8 md:p-10 hover:border-[#ccc] hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#f5f5f5] to-[#eaeaea] flex items-center justify-center group-hover:from-[#ececec] group-hover:to-[#e0e0e0] transition-all">
                    <span className="text-lg font-semibold text-[#666]">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-sm uppercase tracking-[0.15em] text-[#999] font-medium">{week.week}</span>
                      <span className="text-[#e5e5e5]">•</span>
                      <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a0a]">{week.title}</h2>
                    </div>
                    <p className="text-lg text-[#4a4a4a] mb-6 leading-relaxed font-light">
                      {week.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {week.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-4 py-2 rounded-full bg-[#fafaf9] text-sm text-[#666] border border-[#e5e5e5]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
