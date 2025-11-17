type FaqItem = {
  q: string;
  a: string;
};

const items: FaqItem[] = [
  {
    q: "Who is this starter for?",
    a: "Developers who want a clean, SEO-first landing page without a bloated UI kit.",
  },
  {
    q: "Can I use it for commercial projects?",
    a: "Yes. It is MIT-licensed. You can use it for client work, SaaS products and anything else.",
  },
  {
    q: "How can I contribute?",
    a: "Open an issue or a pull request on GitHub. Improvements to accessibility, SEO and DX are very welcome.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-5">
          {items.map((item) => (
            <div key={item.q} className="border-b border-slate-800 pb-4">
              <h3 className="text-sm font-semibold text-slate-100">
                {item.q}
              </h3>
              <p className="mt-1 text-sm text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
