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
        name: "Eating Policy >",
        description: "",
        link: "https://www.eatingpolicy.com/",
      },
      {
        name: "Institute for Progress >",
        description: "",
        link: "https://ifp.org/",
      },
      {
        name: "Foundation for American Innovation >",
        description: "",
        link: "https://www.thefai.org/",
      },
      {
        name: "Chamber of Progress >",
        description: "",
        link: "https://progresschamber.org/",
      },
      {
        name: "New America >",
        description: "",
        link: "https://www.newamerica.org/",
      },
      {
        name: "Civic Tech Field Guide >",
        description: "",
        link: "https://civictech.guide/",
      },
      {
        name: "Public Interest Technology Undergraduate Network >",
        description: "",
        link: "https://pit-un.org/",
      },
      {
        name: "USDS Origins >",
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
        name: "Chris Kuang Master List >",
        description: "",
        link: "https://www.chriskuang.com/civictech",
      },
      {
        name: "RegLab Research Assistantship/Fellowship",
        description: "",
        link: "",
      },
      {
        name: "Princeton CITP Fellowship >",
        description: "",
        link: "https://citp.princeton.edu/programs/fellows-program",
      },
      {
        name: "Horizon Institute opportunities >",
        description: "",
        link: "https://emergingtechpolicy.org/",
      },
      {
        name: "Presidential Innovation Fellowship >",
        description: "",
        link: "https://presidentialinnovationfellows.gov/",
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
        name: "RegLab >",
        description: "",
        link: "https://reglab.stanford.edu/",
      },
      {
        name: "CS + Social Good",
        description: "",
        link: "",
      },
      {
        name: "Public Interest Tech Lab >",
        description: "",
        link: "https://pit.stanford.edu/",
      },
      {
        name: "Tech, Ethics, and Policy Hub",
        description: "",
        link: "",
      },
    ],
  },
];

export default function Resources() {
  // Max width per box: use '' for no limit, or e.g. 'max-w-[45%]' (of parent), 'max-w-[40vw]' (of viewport), 'max-w-[500px]'
  const boxMaxWidth = '';
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
          <div className="mt-8 md:px-4">
          <div className="space-y-20">
            {resources.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-px flex-1 max-w-[80px] bg-[#1f4cff]" aria-hidden />
                  <h2 className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-white shrink-0">
                    {category.category}
                  </h2>
                  <div className="h-px flex-1 bg-[#1f4cff]" aria-hidden />
                </div>
                <div className="flex flex-wrap gap-6">
                  {category.items.map((item, itemIndex) => {
                    const Component = item.link ? motion.a : motion.div;
                    const linkProps = item.link ? {
                      href: item.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    } : {};
                    const isBlue = (categoryIndex + itemIndex) % 2 === 0;
                    const boxClasses = isBlue
                      ? 'bg-[#1f4cff] border-[#1f4cff]'
                      : 'bg-white border-white';
                    const textClasses = isBlue
                      ? 'text-white'
                      : 'text-black';
                    const mutedClasses = isBlue
                      ? 'text-white/90'
                      : 'text-black/80';

                    return (
                      <Component
                        key={itemIndex}
                        {...linkProps}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className={`rounded-none border p-5 md:p-6 transition-all group flex-[1_1_min(100%,400px)] min-w-0 ${boxMaxWidth} ${boxClasses} ${item.link ? 'hover:opacity-95 cursor-pointer' : ''}`}
                      >
                        <h3 className={`text-xl md:text-2xl font-semibold mb-3 ${textClasses} transition-colors`}>
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className={`text-base leading-relaxed mb-4 font-light break-words ${mutedClasses}`}>
                            {item.description}
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
