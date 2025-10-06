import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Captionize",
      description:
        "A web app that simplifies adding accurate, timestamped captions to media files using AI-powered transcription and editing tools",
      video:
        "https://res.cloudinary.com/dfyuhslyv/video/upload/v1747576801/xyngwlagmolycr5x3osv.mp4",
      tags: [
        "Next.js",
        "Node.js",
        "AWS-S3",
        "WhisperX",
        "FFMPEG",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "https://github.com/Riddz04/CaptionizeIt",
      external: "https://captionizeit.vercel.app/",
    },
    {
      title: "Career Compass",
      description:
        "An AI-powered platform built for the Amdocs Gen AI Hackathon 2024-2025, offering personalized, unbiased career guidance by combining advanced AI with emotional intelligence.",
      video:
        "https://res.cloudinary.com/dfyuhslyv/video/upload/v1747576713/mtoefe7k4xiztuske20o.mp4",
      tags: ["Streamlit", "AWS", "Crew.ai", "Langchain", "Flask", "Grok API"],
      github: "https://github.com/Riddz04/CAREER-COMPASS-AI",
      external: "https://www.youtube.com/watch?v=ouY-o1L28Ko",
    },
  ];

  const otherProjects = [
    {
      title: "AI-Podcast Generator",
      description:
        "A web app that generates podcast episodes using AI-powered transcription and editing tools",
      tags: [
        "Next.js",
        "React",
        "Express",
        "OpenAI API",
        "Elevenlabs API",
        "Tailwind CSS",
        "Vercel",
      ],
      github: "https://github.com/Riddz04/ai-podcast",
      external: "https://pod-ai-52ct.vercel.app/",
    },
    {
      title: "AI Calendar Booking Assistant",
      description:
        "A conversational AI agent that helps users book appointments on Google Calendar through natural language chat.",
      tags: [
        "FastAPI",
        "Streamlit",
        "Langchain + LangGraph",
        "Grok API",
        "Google Calendar API",
        "Python",
        "Railway",
      ],
      github: "https://github.com/Riddz04/ai-please-book-it-im-tired",
      external: null,
    },
    {
      title: "Pig-Fiesta",
      description:
        "Welcome to Pig Fiesta, a fun and fast-paced dice game where pigs, luck, and strategy collide! Built with ❤️ using Node.js, Express, and Socket.io, this game is a modern web-based version of the classic Pig dice game — now with fiesta flair!",
      tags: [
        "HTML",
        "Tailwind",
        "Node.js",
        "Socket.io",
        "Vercel",
        "JavaScript",
      ],
      github: "https://github.com/Riddz04/Pig-Fiesta",
      external: "https://pig-fiesta.vercel.app/",
    },
    {
      title: "AI-Summarise-it-for-me",
      description:
        "A web app that summarizes text using AI-powered summarization tools",
      tags: [
        "Next.js",
        "OpenAI API",
        "Tailwind CSS",
        "Vercel",
        "Elevenlabs API",
        "Typescript",
      ],
      github: "https://github.com/Riddz04/AI-Summarise-it-for-me",
      external: "https://summarise-it-six.vercel.app/",
    },
    {
      title: "TaskIt — A Task Board Application",
      description:
        "TaskIt is a modern Kanban-style task management app that allows users to create, organize, and track tasks across multiple boards and columns. Built with React, TypeScript, Zustand, Firebase Auth, and dnd-kit, TaskIt provides a sleek drag-and-drop experience, user authentication, and persistent state.",
      tags: [
        "React",
        "Typescript",
        "Zustand",
        "Firebase Auth",
        "dnd-kit",
        "Firebase",
        "Vercel",
        "vite",
        "Tailwind CSS",
      ],
      github: "https://github.com/Riddz04/task_it",
      external: "https://taskit-kappa.vercel.app/",
    },
  ];

  return (
    <section id="work" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading" data-number="03.">
          Some Things I've Built
        </h2>

        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 relative group ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <a
                  href={project.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[var(--green)] mix-blend-multiply opacity-30 group-hover:opacity-0 transition-opacity z-10"></div>
                  <video
                    src={project.video}
                    aria-label={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    playsInline
                    autoPlay
                    muted
                    loop
                  />
                </a>
              </div>

              <div
                className={`md:col-span-6 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:row-start-1"
                    : "md:col-start-7"
                } z-10`}
              >
                <div className="space-y-4">
                  <p className="text-[var(--green)] font-mono text-sm">
                    Featured Project
                  </p>
                  <h3 className="text-[var(--lightest-slate)] text-2xl font-semibold">
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--green)] transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <div className="bg-[var(--light-navy)] p-6 rounded shadow-lg">
                    <p className="text-[var(--slate)]">{project.description}</p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-3 font-mono text-sm text-[var(--slate)] ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <div
                    className={`flex space-x-4 ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                      >
                        <Github size={22} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-[var(--lightest-slate)] text-2xl font-semibold mb-12 text-center">
          Other Noteworthy Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--light-navy)] p-8 rounded border border-[var(--lightest-navy)] hover:border-[var(--green)] hover:-translate-y-2 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder
                  className="text-[var(--green)] group-hover:scale-110 transition-transform"
                  size={40}
                />
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-[var(--lightest-slate)] text-xl font-semibold mb-3 group-hover:text-[var(--green)] transition-colors">
                {project.title}
              </h4>

              <p className="text-[var(--slate)] text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-3 font-mono text-xs text-[var(--slate)]">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
