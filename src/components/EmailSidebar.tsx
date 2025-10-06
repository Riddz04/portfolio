const EmailSidebar = () => {
  return (
    <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center space-y-6 z-40">
      <a
        href="mailto:riddhidhawan.work@gmail.com"
        className="text-[var(--lightest-slate)] hover:text-[var(--green)] transition-colors font-mono text-sm tracking-widest"
        style={{ writingMode: "vertical-rl" }}
      >
        riddhidhawan.work@gmail.com
      </a>
      <div className="w-px h-24 bg-[var(--lightest-slate)]"></div>
    </div>
  );
};

export default EmailSidebar;
