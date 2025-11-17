const Navbar = () => {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-[--color-primary] flex items-center justify-center text-sm font-semibold">
            N
          </span>
          <span className="font-semibold tracking-tight">
            Next SEO Landing
          </span>
        </div>

        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#faq" className="hover:text-white transition">
            FAQ
          </a>
          <a href="#get-started" className="hover:text-white transition">
            Get started
          </a>
        </div>

        <a
          href="https://github.com/mohamad-ashrafi/next-seo-landing-starter"
          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-[--color-primary] hover:bg-slate-900/70 transition"
        >
          ⭐ Star on GitHub
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
