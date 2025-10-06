import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-7xl w-full">
        <div className="space-y-6 animate-fadeIn">
          <p className="text-[var(--green)] font-mono text-base md:text-lg">
            Hi, my name is
          </p>

          <h1 className="text-[var(--lightest-slate)] text-5xl md:text-7xl lg:text-8xl font-bold">
            Riddhi Dhawan.
          </h1>

          <h2 className="text-[var(--slate)] text-4xl md:text-6xl lg:text-7xl font-bold">
            I build things for the web.
          </h2>

          <p className="text-[var(--slate)] text-lg md:text-xl max-w-2xl leading-relaxed">
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products for myself.
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="#work"
              className="group flex items-center space-x-2 border border-[var(--green)] text-[var(--green)] px-8 py-4 rounded hover:bg-[var(--green-tint)] transition-all font-mono"
            >
              <span>Check out my work</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center space-x-2 bg-[var(--green)] text-[var(--navy)] px-8 py-4 rounded hover:bg-opacity-90 transition-all font-mono font-semibold"
            >
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
