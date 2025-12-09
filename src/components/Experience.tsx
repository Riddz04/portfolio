import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Defence Research and Development Organisation (DRDO)",
      position: "Summer Research Intern",
      duration: "June 2025 - July 2025",
      url: "https://drdo.res.in/drdo/",
      responsibilities: [
        "Explored the electrical-software interface via semiconductor simulations.",
        "Conducted Monte Carlo analysis on MCT photodiodes using statistical models.",
        "Converted C functions to MATLAB and built a simulation dashboard.",
      ],
    },
    {
      company: "Stealth AI Startup",
      position: "Full-Stack Developer",
      duration: "Nov 2025 - Present",
      url: "currently in pre-production phase",
      responsibilities: [
        "Developing a production-grade Next.js application with end-to-end functionality and scalable architecture."
        "Integrating Supabase backend services for authentication, data persistence, and real-time updates."
        "Building and deploying the product MVP, adding payment workflows, and migrating legacy codebases for performance.",
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading" data-number="02.">
          Where I've Worked
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-5 py-3 font-mono text-sm border-l-2 md:border-l-2 md:border-b-0 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === index
                    ? "text-[var(--green)] border-[var(--green)] bg-[var(--green-tint)]"
                    : "text-[var(--slate)] border-[var(--lightest-navy)] hover:bg-[var(--light-navy)] hover:text-[var(--green)]"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="space-y-4">
              <h3 className="text-[var(--lightest-slate)] text-xl md:text-2xl font-semibold">
                {experiences[activeTab].position}{" "}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  @ {experiences[activeTab].company}
                </a>
              </h3>

              <p className="font-mono text-sm text-[var(--slate)]">
                {experiences[activeTab].duration}
              </p>

              <ul className="space-y-4 mt-6">
                {experiences[activeTab].responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 text-[var(--slate)]"
                  >
                    <span className="text-[var(--green)] mt-1 flex-shrink-0">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
