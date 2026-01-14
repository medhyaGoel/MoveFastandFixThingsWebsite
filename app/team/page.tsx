'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import EmilyPhoto from "../pictures/emily.jpg";
import MedhyaPhoto from "../pictures/medhya.jpg";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="min-h-screen pt-16 pb-14 px-2 md:px-4 lg:px-6">
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
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:pl-4 items-stretch">
            {/* Left copy block */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="md:col-span-5 lg:col-span-4 flex flex-col justify-end"
            >
              <p className="mt-6 text-white/80 text-lg leading-relaxed font-light text-balance">
                <span className="font-medium">Medhya Goel</span> & <span className="font-medium">Emily Tianshi</span> created & taught POLISCI 33SI at Stanford University in Fall 2025. Both Medhya and Emily study computer science and government at Stanford University.
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
                <div className="bg-[#111111] border border-white/10">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={EmilyPhoto}
                      alt="Emily Tianshi"
                      className="h-full w-full object-cover"
                      width={800}
                      height={1200}
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-white/10">
                    <p className="text-sm md:text-base font-semibold tracking-[0.08em] uppercase">
                      Emily Tianshi
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-white/60 uppercase tracking-[0.18em]">
                      Instructor · Co-Lead
                    </p>
                  </div>
                </div>

                {/* Medhya - uses Emily photo as placeholder until Medhya's photo is added */}
                <div className="bg-[#111111] border border-white/10">
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={MedhyaPhoto}
                      alt="Medhya Goel"
                      className="h-full w-full object-cover"
                      width={800}
                      height={1200}
                    />
                  </div>
                  <div className="px-5 py-4 border-t border-white/10">
                    <p className="text-sm md:text-base font-semibold tracking-[0.08em] uppercase">
                      Medhya Goel
                    </p>
                    <p className="mt-1 text-xs md:text-sm text-white/60 uppercase tracking-[0.18em]">
                      Instructor · Co-Lead
                    </p>
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

