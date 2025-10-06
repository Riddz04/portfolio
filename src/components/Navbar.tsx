import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import resumeUrl from "../../Resume.pdf";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", number: "01" },
    { name: "Experience", href: "#experience", number: "02" },
    { name: "Work", href: "#work", number: "03" },
    { name: "Contact", href: "#contact", number: "04" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--navy)] shadow-lg backdrop-blur-sm bg-opacity-95"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-[var(--green)] text-2xl font-bold hover:scale-105 transition-transform"
          >
            &lt;Riddhi Dhawan /&gt;
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-1 hover:text-[var(--green)] transition-colors"
              >
                <span className="text-[var(--green)] font-mono text-sm">
                  {link.number}.
                </span>
                <span className="text-[var(--lightest-slate)]">
                  {link.name}
                </span>
              </a>
            ))}
            <a
              href={resumeUrl}
              className="border border-[var(--green)] text-[var(--green)] px-4 py-2 rounded hover:bg-[var(--green-tint)] transition-colors font-mono text-sm"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden text-[var(--green)] hover:bg-[var(--green-tint)] p-2 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--light-navy)] border-t border-[var(--lightest-navy)]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-[var(--green)] transition-colors"
              >
                <span className="text-[var(--green)] font-mono text-sm mr-2">
                  {link.number}.
                </span>
                <span className="text-[var(--lightest-slate)]">
                  {link.name}
                </span>
              </a>
            ))}
            <a
              href={resumeUrl}
              className="block border border-[var(--green)] text-[var(--green)] px-4 py-2 rounded hover:bg-[var(--green-tint)] transition-colors font-mono text-sm text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
