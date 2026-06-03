type Props = { id?: string };

export default function Contact({ id }: Props) {
  return (
    <section id={id} className="mb-24 scroll-mt-24">
      <p className="text-xs text-(--color-slate) leading-relaxed mb-6 max-w-md">
        Abierto a oportunidades remotas, freelance y colaboraciones. Si tienes un proyecto interesante, escríbeme.
      </p>
      <div className="flex flex-col gap-3">
        {[
          { href: "mailto:adrianenis2000@gmail.com", label: "adrianenis2000@gmail.com" },
          { href: "https://linkedin.com/in/adrianenis", label: "linkedin.com/in/adrianenis" },
          { href: "tel:+5804122146309", label: "+58 0412 214 6309" },
        ].map(({ href, label }) => (
          <a key={href} href={href} className="text-xs text-(--color-slate-light) hover:text-(--color-green) transition-colors duration-300 w-fit border-b border-transparent hover:border-(--color-green) pb-px">
            {label} →
          </a>
        ))}
      </div>
      <p className="text-xs text-(--color-slate) opacity-40 mt-16">
        Inspirado en{" "}
        <a href="https://brittanychiang.com" target="_blank" className="hover:text-(--color-green) transition-colors">brittanychiang.com</a>
        {" "}· Next.js + Tailwind CSS · Vercel
      </p>
    </section>
  );
}