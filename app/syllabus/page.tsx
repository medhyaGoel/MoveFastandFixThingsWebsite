'use client';

import { motion } from "framer-motion";

const weeks = [
  { week: 1, title: "Foundations", theme: "Introduction to civic technology and its institutional context." },
  { week: 2, title: "Failure Modes", theme: "Exploring where civic technology succeeds and fails." },
  { week: 3, title: "Failure Modes", theme: "Scale, procurement, and incentives." },
  { week: 4, title: "Failure Modes", theme: "Trust, legitimacy, and public perception." },
  { week: 5, title: "Building What Lasts", theme: "Stewardship and maintenance." },
  { week: 6, title: "Building What Lasts", theme: "Institutional alignment." },
  { week: 7, title: "Building What Lasts", theme: "Long-term sustainability." },
  { week: 8, title: "Building What Lasts", theme: "Case studies in lasting civic tech." },
  { week: 9, title: "Building What Lasts", theme: "Pathways forward." },
  { week: 10, title: "Building What Lasts", theme: "Final reflections and presentations." },
];

export default function Syllabus() {
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
            SYLLABUS
          </motion.h1>

          {/* Google Doc link */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 md:mt-8"
          >
            <a
              href="https://docs.google.com/document/d/1sFR6zqRHalrnzocE0kClihHgpKikVDrm0LG-RWjoaPk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm md:text-base uppercase tracking-[0.1em]">View Live Syllabus</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Horizontal scrolling slides section */}
          <div className="mt-8 md:mt-10">
            <div className="overflow-x-auto scrollbar-hide -mx-2 md:-mx-4 lg:-mx-6 px-2 md:px-4 lg:px-6">
              <div className="flex gap-6 md:gap-8 pb-4" style={{ width: 'max-content' }}>
                {weeks.map((week, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px]"
                  >
                    <div className="bg-[#111111] border border-white/10 overflow-hidden">
                      {/* Google Slides embed or placeholder */}
                      <div className="aspect-[4/3] bg-[#0a0a0a] flex items-center justify-center">
                        <div className="text-center p-8">
                          <svg className="w-16 h-16 mx-auto mb-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <p className="text-white/40 text-sm mb-2">Week {week.week} Slides</p>
                          <p className="text-white/30 text-xs">Add Google Slides embed URL</p>
                        </div>
                      </div>
                      {/* Title and subtitle */}
                      <div className="px-6 py-5 border-t border-white/10">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-1">
                          Week {week.week}
                        </h3>
                        <p className="text-sm md:text-base text-white/70 uppercase tracking-[0.1em]">
                          {week.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Week-by-week detailed breakdown */}
          <div className="mt-12 md:mt-16 space-y-6">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="bg-white/10 rounded-xl border border-white/20 p-8 md:p-10 hover:border-white/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <span className="text-lg font-semibold text-white/80">{week.week}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-sm uppercase tracking-[0.15em] text-white/60 font-medium">Week {week.week}</span>
                      <span className="text-white/30">•</span>
                      <h2 className="text-2xl md:text-3xl font-semibold text-white">{week.title}</h2>
                    </div>
                    <p className="text-lg text-white/70 mb-6 leading-relaxed font-light">
                      {week.theme}
                    </p>
                    
                    {/* Slides and Recordings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Slides */}
                      <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-xs uppercase tracking-[0.1em] text-white/60 font-medium">Slides</span>
                        </div>
                        <p className="text-sm text-white/50">Add slide deck link</p>
                      </div>
                      
                      {/* Recording */}
                      <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs uppercase tracking-[0.1em] text-white/60 font-medium">Recording</span>
                        </div>
                        <p className="text-sm text-white/50">Add recording link</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
