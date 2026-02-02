'use client';

import { motion } from "framer-motion";

// Placeholder data for final projects - can be updated with actual projects
const projects = [
  { id: 1, title: "Improving the Public Comment Process", description: "Georgia Walker-Keleher and Julia Zeitlin", embedUrl: "https://docs.google.com/presentation/d/1E_FrZspVquVYQqj0CPVs5Fw2xxOAemZU0S_OxGfuLsY/preview" },
  { id: 2, title: "Single Point of Failure Staffing", description: "Jack Norman and Reese Harrison", embedUrl: "https://docs.google.com/presentation/d/1CKcXJD0AoQyxlrqFfgS7dWEfSu8m69lbMVNeM0c4oxg/preview" },
  { 
    id: 3, 
    title: "Transparency Portal for Public Algorithms: Building Trust in Government", 
    description: "Thijs Simonian and Jacob Rubenstein",
    embedUrl: "https://docs.google.com/presentation/d/1oVqV9rGOuAkWehci3nF6Cgs_TSREZrSzxG81ZbYSa3A/preview"
  },
  
  { id: 4, title: "GovTech Startup Challenges", description: "Sidney Suh and Alexia Papageorgiou", embedUrl: "https://docs.google.com/presentation/d/1qLe8JaeKWx4Nf2h-6cbv2ZMMtVV5k6AR1MDsr09FTmQ/preview" },
  { id: 5, title: "Federal Website Accessibility", description: "Martin Blue", embedUrl: "https://docs.google.com/presentation/d/13HSvvXRrP-sjgEP-l1d3oNW7mYyr1L6UR2KBuHE4VJo/preview" },
  {id: 6, title: "CalFresh Design Critique", description: "Javokhir Arifov and Elizabeth Doherty", embedUrl: "https://docs.google.com/presentation/d/1H2p0XWVsueWTLYf-mqdqPa_aiksh2qTEif-dwI8L31k/preview" },
  {id: 7, title: "Protecting America's Most Vulnerable: Stopping SNAP Fraud through Modern Payment Technology", description: "Rushank Goyal and Krit Phaisamran", embedUrl: "https://docs.google.com/presentation/d/1xgtPoSMrqx6dw5ofrq8QCEE9sjH6OePEOgoVIeKnx0A/preview" },
  {id: 8, title: "Streamlining Government Processes to Solve the Housing Crisis", description: "Devin Gupta & Krishna Madhav", embedUrl: "https://docs.google.com/presentation/d/1ZHWffH2jNSF66FRd9hKYK9bRMReTgmNDklSuTzavZx4/preview" },
];
export default function FinalProjects() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <section className="pt-24 md:pt-16 pb-0 px-2 md:px-4 lg:px-6">
        <div className="mx-auto max-w-[1700px]">
          {/* Big wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-jersey tracking-[-0.08em] leading-[0.78] text-[clamp(3.8rem,14vw,13.5rem)]"
          >
            FINAL PROJECTS
          </motion.h1>

          {/* Horizontal scrolling slides section */}
          <div className="mt-8 md:mt-10">
            <div className="overflow-x-auto scrollbar-hide -mx-2 md:-mx-4 lg:-mx-6 px-2 md:px-4 lg:px-6">
              <div className="flex gap-5 md:gap-8 pb-0" style={{ width: 'max-content' }}>
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex-shrink-0 w-[85vw] md:w-[500px] lg:w-[600px]"
                  >
                    <div className="bg-[#111111] overflow-hidden">
                      {/* Google Slides embed or placeholder */}
                      {project.embedUrl ? (
                        <div className="aspect-[4/3] bg-[#0a0a0a] relative">
                          <iframe
                            src={project.embedUrl}
                            className="w-full h-full"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                            allow="autoplay; encrypted-media"
                            title={project.title}
                          />
                          {/* Fallback message for SharePoint/auth-required embeds */}
                          {project.embedUrl.includes('sharepoint.com') && (
                            <div className="absolute inset-0 bg-[#0a0a0a]/95 flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-white/60 text-sm mb-4">This presentation requires authentication to view.</p>
                            <a
                              href={project.embedUrl.replace('/embed.aspx', '/view.aspx')}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/80 hover:text-white underline text-sm transition-colors"
                            >
                              View in SharePoint →
                            </a>
                          </div>
                          )}
                        </div>
                      ) : (
                        <div className="aspect-[4/3] bg-[#0a0a0a] flex items-center justify-center">
                          <div className="text-center p-8">
                            <svg className="w-16 h-16 mx-auto mb-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-white/40 text-sm mb-2">{project.title}</p>
                            <p className="text-white/30 text-xs">Add Google Slides embed URL</p>
                          </div>
                        </div>
                      )}
                      {/* Title and subtitle */}
                      <div className="px-6 py-5">
                        <h3 className="text-2xl md:text-3xl uppercase font-semibold tracking-[0.1em] text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/70 uppercase tracking-[0.1em]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
