'use client';

import { motion } from "framer-motion";

const weeks = [
  {
    week: 1,
    date: "9/23/25",
    title: "Course Kickoff With Stanford RegLab",
    questions: [
      "Why does the government struggle to adapt and innovate?",
      "Overview of public sector systems and failure points.",
      "What does effective partnership between academia and government look like?"
    ],
    guestSpeakers: ["Derek Ouyang (Stanford RegLab, Senior Research Manager)"],
    readings: [
      { text: "Pahlka, Jennifer. Introduction. Recoding America: Why Government Is Failing in the Digital Age and How We Can Do Better, Metropolitan Books, 2023.", link: "" },
      { text: "RegLab, \"Cleaning Up Policy Sludge: An AI Statutory Research System\"", link: "" },
      { text: "Surani, F., Suzgun, M., Raman, V., Manning, C. D., Henderson, P., & Ho, D. E. (2024). AI for scaling legal reform: Mapping and redacting racial covenants in Santa Clara County. Stanford RegLab Working Paper.", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 2,
    date: "9/30/25",
    title: "History of Modernization; Lessons from Propel",
    questions: [
      "What is the history of efforts to modernize government as digital technology emerged?",
      "What lessons can we take from past successes and failures to inform current modernization strategies?"
    ],
    guestSpeakers: ["Jimmy Chen (CEO of Propel)"],
    readings: [
      { text: "Bradley Rice, Progressive Cities: Introduction", link: "" },
      { text: "Al Gore, \"Creating a Government that Works Better and Costs Less\": Preface and Introduction", link: "" },
      { text: "David Osborne, Reinventing Government: pp. 12-24", link: "" },
      { text: "\"Goodbye 1-800. Hello Propel.\"", link: "" },
      { text: "Propel, \"'...At the mercy of thieves': the growing crisis of EBT theft and its impact on families.\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 3,
    date: "10/7/25",
    title: "Comparative Government Innovation",
    questions: [
      "What is digital public infrastructure (DPI)?",
      "How are governments around the world using technology to deliver public services more effectively?",
      "What lessons can the U.S. learn, and what should it avoid?",
      "What unique responsibilities does the U.S. government have to its citizens with respect to digitizing services?"
    ],
    guestSpeakers: ["Srikanth Nadhamuni (CTO of Aadhar)"],
    readings: [
      { text: "New America, \"Key Differences Between the U.S. Social Security System and India's Aadhaar System\"", link: "" },
      { text: "\"e-Estonia\"", link: "" },
      { text: "World Bank Group, \"National Digital Identity and Government Data Sharing in Singapore: A Case Study of Singpass and APEX.\"", link: "" },
      { text: "World Economic Forum, \"The Global Public Impact of GovTech: A $9.8 Trillion Opportunity,\" pp. 16-23.", link: "" },
      { text: "\"History of Surveillance\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 4,
    date: "10/14/25",
    title: "American Taxonomy of Problems",
    questions: [
      "What technical, cultural, and procedural barriers within the government contribute to poor service delivery?",
      "How do governments respond to crises that demand rapid technical capacity?"
    ],
    guestSpeakers: ["Ryan Panchadsaram (Kleiner Perkins Advisor, Former Deputy US CTO)"],
    bonusEvent: "Jennifer Pahlka (Author of Recoding America, Founder of Code for America), Ben Bain (Director of State Capacity, Niskanen Center) (10:30-11:30 AM, Encina Fourth Floor)",
    readings: [
      { text: "Jennifer Pahlka. Recoding America: Why Government Is Failing in the Digital Age and How We Can Do Better: Chapters 1-5.", link: "" },
      { text: "Ann Lewis and Jennifer Pahlka. \"The product operating model: How government should deliver digital services.\"", link: "" },
      { text: "US Digital Services Playbook", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 5,
    date: "10/21/25",
    title: "Federal Government and Procurement",
    questions: [
      "Who are the major modernization players in the federal government?",
      "What is the present state of federal modernization?",
      "What is DOGE, and is it here to stay?"
    ],
    guestSpeakers: ["Lindsay Young (Former Executive Director of 18F)"],
    readings: [
      { text: "\"Learning From the Legacy of 18F\"", link: "" },
      { text: "Congress, \"Overview of the Federal Procurement Process and Resources\"", link: "" },
      { text: "\"Timeline - U.S. Digital Service\"", link: "" },
      { text: "\"DOGE Timeline: Government Layoffs, Efficiency and Technology Goals, Target Milestones, Lawsuits and Reality Checks\"", link: "" },
      { text: "Brookings, \"How will we know if DOGE is Succeeding?\"", link: "" },
      { text: "White House, \"Modernizing Payments To and From America's Bank Account\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 6,
    date: "10/28/25",
    title: "The Private Sector",
    questions: [
      "What are the main models of private-sector GovTech?",
      "What are standout examples of startups tackling particularly complex or high-impact government challenges, and what made them successful?",
      "How do private sector incentives differ from public sector incentives?"
    ],
    guestSpeakers: [
      "Cherie Chung and Brendan Hellweg (Co-Founders of Holly)",
      "Charlotte Weiner (Co-Founder of Frontdoor Benefits)"
    ],
    readings: [
      { text: "GovTech, \"GovTech 100: 2025.\"", link: "" },
      { text: "GovTech, \"A Decade's Worth of Knowledge About the Gov Tech Market.\"", link: "" },
      { text: "\"Transforming Public Service, One Job at a Time: Announcing Holly's $2.2M Preseed.\"", link: "" },
      { text: "Frontdoor Benefits.", link: "" },
      { text: "Tanner Jones and Patrick McLaughlin, \"The AI bull case for the republic.\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 7,
    date: "11/4/25",
    title: "Democracy Day - No Class",
    questions: [],
    guestSpeakers: [
      "Skylar Coleman (Elections and Societal Resilience at Microsoft)",
      "Braden Crimmins (Co-Founder of Ballot IQ, JD-PhD Candidate)"
    ],
    readings: [],
    note: "In place of class, POLISCI 33SI is collaborating with Democracy Day to host an event on civic tech supporting election officials. Attendance is optional but highly recommended. Details TBA.",
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 8,
    date: "11/11/25",
    title: "Local Government",
    questions: [
      "What can a \"tech-forward\" city look like?",
      "How does state and local modernization differ from federal modernization?",
      "When are local governments best positioned to lead reform?",
      "How can federal and state/local governments work together to modernize?"
    ],
    guestSpeakers: [
      "Harrison MacRae (Pennsylvania Director of Emerging Technologies)",
      "Lauren Post (Chair of the San Francisco Public Works Commission)"
    ],
    readings: [
      { text: "Commonwealth of Pennsylvania, \"Speeding Up Government: Governor Shapiro and L&I Secretary Walker Highlight Major Improvements to Pennsylvania's Unemployment Compensation System, Lowest Call Wait Times in Over Six Years\"", link: "" },
      { text: "Commonwealth of Pennsylvania, \"Shapiro Administration Leads the Way in Responsible, Ethical Use of AI; First-Ever Generative AI Pilot for State Workers Leads to Significant Time Savings and Increased Productivity\"", link: "" },
      { text: "Commonwealth of Pennsylvania, \"Lessons from Pennsylvania's Generative AI Pilot with ChatGPT\"", link: "" },
      { text: "City of Boston, \"DoIT Strategic Plan\"", link: "" },
      { text: "Forbes, \"San José's Bold Plan To Lead The AI Revolution In City Government\"", link: "" },
      { text: "\"State of Connecticut Responsible AI Framework\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 9,
    date: "11/18/25",
    title: "Civic Tech Career Paths",
    questions: [
      "Where should students interested in government and technology go to have the biggest impact right now?"
    ],
    guestSpeakers: [
      "Mina Hsiang (Former US Digital Service Administrator)",
      "Chris Kuang (US Digital Corps Co-Founder)",
      "Ariana Soto (Coding it Forward Co-Founder and CEO)"
    ],
    note: "Students will join a conversation with Chris Kuang on career pathways in civic technology and strategies for making a meaningful impact at the intersection of government and technology as students and new graduates.",
    readings: [
      { text: "Chris Kuang, \"Breaking into civic tech\"", link: "" },
      { text: "Cyd Harrell, A Civic Technologist's Practice Guide, Chapter 3: \"Ways to Contribute\"", link: "" }
    ],
    slidesUrl: "",
    recordingUrl: ""
  },
  {
    week: 10,
    date: "12/2/25",
    title: "Final Presentations",
    questions: [],
    guestSpeakers: [],
    readings: [],
    note: "Students will present their final projects.",
    slidesUrl: "",
    recordingUrl: ""
  }
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

          {/* Course description blurb */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-6 md:px-4"
          >
            <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-3xl">
              This course was initially designed for the quarter system, and was taught over 10 weeks in Fall 2025 at Stanford University as <span className="font-medium">POLISCI 33SI - Move Fast & Fix Things: Innovating for Effective Government</span>.
              We held 12 panels with 28 total speakers over the course of 11 weeks.
            </p>
          </motion.div>

          {/* Google Doc link */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-6 md:px-4"
          >
            <a
              href="https://docs.google.com/document/d/1sFR6zqRHalrnzocE0kClihHgpKikVDrm0LG-RWjoaPk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
            >
              <span className="text-sm md:text-base uppercase tracking-[0.1em]">View Live Syllabus</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Week-by-week detailed breakdown */}
          <div className="mt-12 md:px-4 space-y-12">
            {weeks.map((week, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="p-8 md:p-10 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#1f4cff] flex items-center justify-center group-hover:bg-[#1f4cff]/90 transition-all">
                    <span className="text-sm font-semibold text-white">Week {week.week}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      {week.title}
                    </h2>

                    {/* Guiding Questions */}
                    {week.questions && week.questions.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm uppercase tracking-[0.1em] text-[#1f4cff] font-medium mb-3">Guiding Questions</h3>
                        <ul className="space-y-2">
                          {week.questions.map((question, qIndex) => (
                            <li key={qIndex} className="text-base text-white/80 leading-relaxed font-light flex items-start">
                              <span className="text-white/40 mr-2">•</span>
                              <span>{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Bonus Event */}
                    {week.bonusEvent && (
                      <div className="mb-6">
                        <h3 className="text-sm uppercase tracking-[0.1em] text-[#1f4cff] font-medium mb-2">Bonus Event</h3>
                        <p className="text-base text-white/80 leading-relaxed font-light">{week.bonusEvent}</p>
                      </div>
                    )}

                    {/* Note */}
                    {week.note && (
                      <div className="mb-6">
                        <p className="text-base text-white/80 leading-relaxed font-light">{week.note}</p>
                      </div>
                    )}

                    {/* Guest Speakers */}
                    {week.guestSpeakers && week.guestSpeakers.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm uppercase tracking-[0.1em] text-[#1f4cff] font-medium mb-3">Guest Speaker{week.guestSpeakers.length > 1 ? 's' : ''}</h3>
                        <ul className="space-y-2">
                          {week.guestSpeakers.map((speaker, sIndex) => (
                            <li key={sIndex} className="text-base text-white/80 leading-relaxed font-light">
                              {speaker}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Readings */}
                    {week.readings && week.readings.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-sm uppercase tracking-[0.1em] text-[#1f4cff] font-medium mb-3">Readings</h3>
                        <ul className="space-y-2">
                          {week.readings.map((reading, rIndex) => (
                            <li key={rIndex} className="text-sm text-white/70 leading-relaxed font-light">
                              {reading.link ? (
                                <a
                                  href={reading.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#1f4cff] hover:text-[#1f4cff]/80 underline transition-colors"
                                >
                                  {reading.text}
                                </a>
                              ) : (
                                <span>{reading.text}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Slides and Recordings */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                      {/* Slides */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="text-xs uppercase tracking-[0.1em] text-white/60 font-medium">Slides</span>
                        </div>
                        {week.slidesUrl ? (
                          <a
                            href={week.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#1f4cff] hover:text-[#1f4cff]/80 underline transition-colors"
                          >
                            View Slides →
                          </a>
                        ) : (
                          <p className="text-sm text-white/50">Add slide deck link</p>
                        )}
                      </div>
                      
                      {/* Recording */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="text-xs uppercase tracking-[0.1em] text-white/60 font-medium">Recording</span>
                        </div>
                        {week.recordingUrl ? (
                          <a
                            href={week.recordingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#1f4cff] hover:text-[#1f4cff]/80 underline transition-colors"
                          >
                            Watch Recording →
                          </a>
                        ) : (
                          <p className="text-sm text-white/50">Add recording link</p>
                        )}
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
