import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Crafting beautiful user experiences",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading" data-number="01.">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="text-[var(--slate)] space-y-4 text-lg">
              <p>
                Hello! I'm Riddhi Dhawan, a software engineer based in New
                Delhi, India. I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
              </p>

              <p>
                My interest in web development started back in 2023 when I
                decided to try editing custom themes — turns out hacking
                together a custom layout taught me a lot about HTML & CSS!
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at{" "}
                <a href="#" className="link-underline">
                  Defence Research and Development Organisation (DRDO)
                </a>
                . My main focus these days is building accessible, inclusive
                products and digital experiences.
              </p>
            </div>

            <div>
              <p className="text-[var(--slate)] mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-2 text-[var(--slate)] font-mono text-sm"
                  >
                    <span className="text-[var(--green)]">▹</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[var(--green)] rounded opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
              <div className="relative w-64 h-64 rounded overflow-hidden border-2 border-[var(--green)]">
                <img
                  src="src/photo2.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-[var(--light-navy)] p-6 rounded border border-[var(--lightest-navy)] hover:border-[var(--green)] transition-all hover:-translate-y-1"
              >
                <Icon
                  className="text-[var(--green)] mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-[var(--lightest-slate)] font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--slate)] text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
