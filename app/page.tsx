'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* LANDING (modeled after reference) */}
      <section className="min-h-screen pt-16 pb-14 px-2 md:px-4 lg:px-6">
        <div className="mx-auto max-w-[1700px]">
          {/* Big wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-jersey tracking-[-0.08em] leading-[0.78] text-[clamp(3.8rem,14vw,13.5rem)]"
          >
            &gt;&gt;&gt; MOVE FAST & FIX THINGS.
          </motion.h1>

          {/* Bottom split */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:pl-4 items-stretch">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="md:col-span-5 lg:col-span-4 flex flex-col justify-end"
            >

              <p className="mt-8 text-white/90 text-lg leading-relaxed font-light text-balance">
                In Fall 2025, <a href="/team"><span className="font-medium">Medhya Goel & Emily Tianshi</span></a> (sponsored by Professor Bruce Cain) came together to teach{" "}
                <span className="font-medium">Move Fast and Fix Things: Innovating for Effective Government</span>, a deep dive into the past, present, and future of civic technology.
              </p>
              <p className="mt-4 text-white/75 text-lg leading-relaxed font-light text-balance">
              Over the course of 10 weeks, we convened 28 preeminent civic technologists to examine 1. Why civic technology matters, 2. Where is it succeeding and failing, and 3. How young people can position themselves to contribute to revitalizing American civic tech. 
               This website contains our materials and learnings from leading this course. We hope that this can serve as a launch pad for aspiring civic technologists across the nation as a non-partisan, student perspective on the case for effective civic technology and pathways to make it a reality. 
              </p>
            </motion.div>

            {/* Right “image” block: solid rectangle w/ definition */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="md:col-span-7 lg:col-span-8"
            >
              <div className="h-full min-h-[320px] md:min-h-[420px] bg-[#1f4cff] border border-white/10 shadow-[0_30px_80px_rgba(31,76,255,0.35)] overflow-hidden relative">
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-white/70 text-xs uppercase tracking-[0.22em] font-medium">
                        Noun
                      </div>
                      <div className="mt-3 text-2xl md:text-3xl font-semibold tracking-[-0.01em]">
                      civ·ic tech·nol·o·gy
                      </div>
                      <div className="mt-2 text-white/70 italic font-light">
                        /tekˈnäləjē/
                      </div>
                    </div>
                    <div className="text-white/70 text-xs uppercase tracking-[0.22em] font-medium">
                      Innovating for Effective Government · Fall 2025
                    </div>
                  </div>

                  <div className="mt-10">
                    <p className="text-white text-2xl md:text-3xl leading-[1.25] font-light tracking-[-0.01em] text-balance">
                      The deliberate design and deployment of technology that helps democratic institutions work better.
                    </p>
                    <div className="mt-10 flex items-center justify-between text-white/70 text-sm">
                      <span className="uppercase tracking-[0.18em]">Student-led · non-partisan</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

