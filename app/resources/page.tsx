'use client';

import { motion } from "framer-motion";

const resources = [
  {
    category: "Reading Material",
    items: [
      {
        name: "Recoding America",
        description: "Jennifer Pahlka. Why Government Is Failing in the Digital Age and How We Can Do Better.",
        link: "",
      },
      {
        name: "Reinventing Government",
        description: "David Osborne. How the Entrepreneurial Spirit Is Transforming the Public Sector.",
        link: "",
      },
      {
        name: "Abundance",
        description: "Ezra Klein and Derek Thompson.",
        link: "",
      },
    ],
  },
  {
    category: "Publications / Communities",
    items: [
      {
        name: "Eating Policy",
        description: "",
        link: "",
      },
      {
        name: "Institute for Progress",
        description: "",
        link: "",
      },
      {
        name: "Foundation for American Innovation",
        description: "",
        link: "",
      },
      {
        name: "Chamber of Progress",
        description: "",
        link: "",
      },
      {
        name: "New America",
        description: "",
        link: "",
      },
      {
        name: "Civic Tech Field Guide",
        description: "",
        link: "",
      },
      {
        name: "Public Interest Technology Undergraduate Network",
        description: "",
        link: "",
      },
      {
        name: "USDS Origins",
        description: "",
        link: "https://usdigitalserviceorigins.org/",
      },
    ],
  },
  {
    category: "Professional Opportunities (Public Service)",
    items: [
      {
        name: "TechCongress",
        description: "",
        link: "",
      },
      {
        name: "Code for America",
        description: "",
        link: "",
      },
      {
        name: "Chris Kuang Master List",
        description: "",
        link: "",
      },
      {
        name: "RegLab Research Assistantship/Fellowship",
        description: "",
        link: "",
      },
      {
        name: "Princeton CITP Fellowship",
        description: "",
        link: "",
      },
      {
        name: "Horizon Institute opportunities",
        description: "",
        link: "",
      },
      {
        name: "Presidential Innovation Fellowship",
        description: "",
        link: "",
      },
      {
        name: "U.S. Digital Response",
        description: "",
        link: "",
      },
    ],
  },
  {
    category: "Professional Opportunities (Private Sector)",
    items: [
      {
        name: "Blue Ridge Labs",
        description: "Accelerator for public interest technology startups/non-profits.",
        link: "",
      },
      {
        name: "Public Benefit Innovation Fund",
        description: "",
        link: "",
      },
    ],
  },
  {
    category: "Stanford Specific",
    items: [
      {
        name: "RegLab",
        description: "",
        link: "",
      },
      {
        name: "CS + Social Good",
        description: "",
        link: "",
      },
      {
        name: "Public Interest Tech Lab",
        description: "",
        link: "",
      },
      {
        name: "Tech, Ethics, and Policy Hub",
        description: "",
        link: "",
      },
      {
        name: "PIT Lab",
        description: "",
        link: "",
      },
    ],
  },
];

export default function Resources() {
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
            RESOURCES
          </motion.h1>

          {/* Content section */}
          <div className="mt-8 md:mt-10">
          <div className="space-y-20">
            {resources.map((category, categoryIndex) => (
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
                  {category.items.map((item, itemIndex) => {
                    const Component = item.link ? motion.a : motion.div;
                    const linkProps = item.link ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    } : {};
                    
                    return (
                      <Component
                        key={itemIndex}
                        {...linkProps}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className={`bg-white/10 rounded-xl border border-white/20 p-6 md:p-8 transition-all group ${item.link ? 'hover:border-white/30 cursor-pointer' : ''}`}
                      >
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-base text-white/70 leading-relaxed mb-4 font-light">
                            {item.description}
                          </p>
                        )}
                        {item.link && (
                          <p className="text-sm text-white/60 font-medium group-hover:text-white/80 transition-colors flex items-center gap-2">
                            Learn more
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </p>
                        )}
                      </Component>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          </div>
        </div>
      </section>
    </div>
  );
}
