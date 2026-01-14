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
    <div className="min-h-screen bg-gradient-to-b from-[#fafaf9] to-white text-[#0a0a0a] pt-24">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-[#0a0a0a]">Guest Speakers</h1>
          <p className="text-xl text-[#4a4a4a] mb-16 font-light">
            Insights from 28 preeminent civic technologists who joined us throughout the course
          </p>

          <div className="space-y-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                className="bg-white rounded-xl border border-[#e5e5e5] p-8 md:p-12 hover:border-[#ccc] hover:shadow-lg transition-all group"
              >
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#999] mb-3 font-medium">
                    {speaker.organization}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#0a0a0a] group-hover:text-[#333] transition-colors">
                    {speaker.title}
                  </h2>
                  <p className="text-lg text-[#4a4a4a] leading-relaxed font-light">{speaker.description}</p>
                </div>

                <div className="border-t border-[#e5e5e5] pt-6 mt-6">
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#999] mb-4 font-medium">
                    Notes from the Talk
                  </h3>
                  <p className="text-lg text-[#4a4a4a] leading-relaxed font-light">{speaker.notes}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#f0f0f0]">
                  <p className="text-sm text-[#666] font-medium">
                    Speaker: <span className="text-[#0a0a0a]">{speaker.name}</span>
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
            className="mt-20 bg-gradient-to-br from-white to-[#fafaf9] rounded-xl border border-[#e5e5e5] p-10 text-center shadow-sm"
          >
            <p className="text-lg text-[#4a4a4a] mb-3 font-light">
              More speaker notes and recordings will be added as they become available.
            </p>
            <p className="text-sm text-[#999] font-medium">
              Total: 28 guest speakers across 10 weeks
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
