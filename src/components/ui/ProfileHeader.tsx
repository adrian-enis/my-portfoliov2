export default function ProfileHeader() {
  return (
    <div>
      <p className="text-(--color-green) font-mono text-sm mb-3">
        Hola, mi nombre es
      </p>
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-(--color-white) mb-3 leading-[1.05]">
        Adrian Enis
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-(--color-slate-lighter) mb-4">
        Full-stack Developer
      </h2>
      <p className="text-base sm:text-lg leading-[1.7] max-w-md">
        Construyo aplicaciones web y móviles con{" "}
        <span className="text-(--color-slate-lighter)">React, Next.js, Node.js y TypeScript</span>,
        desde la especificación hasta producción.
      </p>
      <div className="flex flex-wrap gap-2 mt-6">
        <span className="pill pill-live">
          <span className="pill-dot" aria-hidden="true" />
          Disponible para nuevos proyectos
        </span>
        <span className="pill">Buenos Aires, Argentina</span>
      </div>
    </div>
  );
}
