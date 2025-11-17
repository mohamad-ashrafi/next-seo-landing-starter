const CTA = () => {
  return (
    <section
      id="get-started"
      className="bg-gradient-to-r from-[--color-primary] to-[--color-primary-dark]"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-10 text-slate-50 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Ready to ship your next landing?
          </h2>
          <p className="mt-1 text-sm text-slate-100/90">
            Clone this repo, customize the content and deploy to Vercel in a few
            minutes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/mohamad-ashrafi/next-seo-landing-starter"
            className="rounded-full bg-slate-950/10 px-5 py-2 text-sm font-medium backdrop-blur hover:bg-slate-950/20 transition"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href="https://vercel.com/new"
            className="rounded-full border border-slate-100/50 px-5 py-2 text-sm font-medium hover:bg-white hover:text-[--color-primary] transition"
          >
            Deploy to Vercel
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
