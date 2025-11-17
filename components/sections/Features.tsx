type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "SEO by default",
    description:
      "Metadata, OpenGraph tags and JSON-LD are ready so search engines understand your site.",
  },
  {
    title: "Minimal & clean",
    description:
      "Small, focused codebase that you can read in one sitting and customize easily.",
  },
  {
    title: "Developer friendly",
    description:
      "Next.js App Router, modern folder structure and sensible naming conventions.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="border-b border-slate-800 bg-slate-950/60"
    >
      <div className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Built for real-world projects.
        </h2>
        <p className="mt-2 max-w-xl text-sm text-slate-300 md:text-base">
          Use it as-is or as a starting point for client projects, personal
          websites and SaaS dashboards.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
