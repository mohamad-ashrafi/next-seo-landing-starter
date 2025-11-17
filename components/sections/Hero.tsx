const Hero = () => {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs text-slate-300">
            ⚡ Minimal • SEO-friendly • Production ready
          </span>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Launch a beautiful, SEO-ready landing page in minutes.
          </h1>

          <p className="max-w-xl text-base text-slate-300 sm:text-lg">
            Use this Next.js starter as the base for your SaaS, portfolio,
            product or open-source project. Clean code, sensible defaults and
            strong SEO out of the box.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/mohamad-ashrafi/next-seo-landing-starter/generate"
              className="rounded-full bg-[--color-primary] px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-[--color-primary-dark] transition"
            >
              Use this template
            </a>
            <a
              href="#features"
              className="text-sm text-slate-300 hover:text-white underline-offset-4 hover:underline"
            >
              See what you get →
            </a>
          </div>

          <ul className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
            <li>✅ Next.js App Router</li>
            <li>✅ Tailwind CSS v4</li>
            <li>✅ JSON-LD structured data</li>
            <li>✅ Ready for Vercel deploy</li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl">
            <div className="mb-3 flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <pre className="overflow-auto text-xs text-slate-200">
{`pnpm create next-app next-seo-landing-starter
cd next-seo-landing-starter
pnpm dev`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
