import { siteConfig } from "@/lib/siteConfig";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built by{" "}
          <a
            href="https://github.com/mohamad-ashrafi"
            className="text-slate-200 hover:text-[--color-primary] underline-offset-4 hover:underline"
          >
            Mohamad Ashrafi
          </a>
          .
        </p>
        <p className="text-xs">
          Ready-to-use SEO landing starter for your next project.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
