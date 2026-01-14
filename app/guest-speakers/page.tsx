'use client';

import { motion } from "framer-motion";

const speakers = [
  {
    name: "USDS Speaker",
    organization: "USDS",
    title: "Shipping inside the federal state",
    description: "What it means to build software where failure is public and irreversible.",
    notes: "Key insights from the talk will be documented here.",
  },
  {
    name: "18F Speaker",
    organization: "18F",
    title: "Design as institutional critique",
    description: "When service design becomes a political act.",
    notes: "Discussion on how design choices reflect and challenge institutional structures.",
  },
  {
    name: "Civic Tech Leader",
    organization: "Various",
    title: "Building for the long term",
    description: "Lessons on stewardship and maintenance in civic technology.",
    notes: "Notes from the session will be added here.",
  },
];

export default function GuestSpeakers() {
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
            GUEST SPEAKERS
          </motion.h1>

          {/* Content section */}
          <div className="mt-8 md:mt-10">

          <div className="space-y-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white/10 rounded-xl border border-white/20 p-8 md:p-12 hover:border-white/30 transition-all group"
              >
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/60 mb-3 font-medium">
                    {speaker.organization}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white group-hover:text-white/90 transition-colors">
                    {speaker.title}
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed font-light">{speaker.description}</p>
                </div>

                <div className="border-t border-white/20 pt-6 mt-6">
                  <h3 className="text-xs uppercase tracking-[0.15em] text-white/60 mb-4 font-medium">
                    Notes from the Talk
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed font-light">{speaker.notes}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/60 font-medium">
                    Speaker: <span className="text-white/90">{speaker.name}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 bg-white/10 rounded-xl border border-white/20 p-10 text-center"
          >
            <p className="text-lg text-white/70 mb-3 font-light">
              More speaker notes and recordings will be added as they become available.
            </p>
            <p className="text-sm text-white/60 font-medium">
              Total: 28 guest speakers across 10 weeks
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
