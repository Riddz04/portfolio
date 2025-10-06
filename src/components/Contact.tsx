const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 lg:px-12 flex items-center"
    >
      <div className="max-w-3xl mx-auto text-center w-full">
        <h2 className="section-heading justify-center" data-number="04.">
          Get In Touch
        </h2>

        <div className="space-y-6 mt-12">
          <p className="text-[var(--slate)] text-lg leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>

          <p className="text-[var(--lightest-slate)] text-xl">
            Feel free to reach out if you want to collaborate on a project, need
            help with web development, or just want to connect.
          </p>

          <div className="pt-8">
            <a
              href="mailto:riddhidhawan.work@gmail.com"
              className="inline-block border-2 border-[var(--green)] text-[var(--green)] px-8 py-4 rounded font-mono text-lg hover:bg-[var(--green-tint)] transition-all hover:-translate-y-1"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
