'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import EmilyPhoto from "../pictures/emily.jpg";
import MedhyaPhoto from "../pictures/medhya.jpg";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="min-h-screen pt-16 pb-0 px-2 md:px-4 lg:px-6">
        <div className="mx-auto max-w-[1700px]">
          {/* Title, mirroring landing-page aesthetic */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-jersey tracking-[-0.08em] leading-[0.78] text-[clamp(3.8rem,14vw,13.5rem)]"
          >
            TEAM
          </motion.h1>

          {/* Two-column layout echoing the home split */}
          <div className="mt-8 md:mt-0 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-5 md:pl-4 items-stretch">
            {/* Left copy block */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="md:col-span-5 lg:col-span-4 flex flex-col justify-end"
            >
              <p className="mb-8 text-white/80 text-lg leading-relaxed font-light text-balance">
              <span className="font-medium"> &gt;&gt;&gt; Emily Tianshi</span> is a Master’s student in Computer Science at Stanford University. She first became interested in public interest technology while interning at the San Diego Mayor's Office and has since worked at the Cybersecurity and Infrastructure Security Agency, NATO’s Cyber Defense Center in Estonia, and the Stanford Cyber Policy Center on projects involving open-source software security, security by design, and election integrity. At Stanford, she leads voter registration efforts to expand civic participation and develops ethics curricula for computer science courses.</p>
              <p className="mb-8 text-white/80 text-lg leading-relaxed font-light text-balance">
              <span className="font-medium">&gt;&gt;&gt; Medhya Goel</span> studies computer science and government at Stanford University. Her interest in public interest technology began while working at her local courthouse, and she has since helped revive Stanford’s Public Interest Technology Lab. Previously, Medhya has engineered systems serving millions of users at Meta and Stripe, contributed to a federal cybersecurity Executive Order at the Cybersecurity & Infrastructure Security Agency, built disinformation-tracking tools at the Stanford Cyber Policy Center, and automated criminal records expungement at Rasa Legal.
              </p>
            </motion.div>

            {/* Right column: two vertical portraits side by side */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="md:col-span-7 lg:col-span-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Emily */}
                <div className="bg-[#111111]">
                  <div className="h-[500px] md:h-[600px] overflow-hidden">
                    <Image
                      src={EmilyPhoto}
                      alt="Emily Tianshi"
                      className="h-full w-full object-cover"
                      width={600}
                      height={800}
                    />
                  </div>
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-sm md:text-base font-semibold tracking-[0.08em] uppercase">
                          Emily Tianshi
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-white/60 uppercase tracking-[0.18em]">
                          Instructor · Co-Lead
                        </p>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/emily-tianshi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors group"
                      >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Medhya */}
                <div className="bg-[#111111]">
                  <div className="h-[500px] md:h-[600px] overflow-hidden">
                    <Image
                      src={MedhyaPhoto}
                      alt="Medhya Goel"
                      className="h-full w-full object-cover"
                      width={600}
                      height={800}
                    />
                  </div>
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <p className="text-sm md:text-base font-semibold tracking-[0.08em] uppercase">
                          Medhya Goel
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-white/60 uppercase tracking-[0.18em]">
                          Instructor · Co-Lead
                        </p>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/medhyagoel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white/80 transition-colors group"
                      >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
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

