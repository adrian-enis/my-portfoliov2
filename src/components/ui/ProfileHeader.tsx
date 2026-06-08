type Props = {
  showBio?: boolean;
};

export default function ProfileHeader({ showBio = true }: Props) {
  return (
    <div>
      <p className="text-(--color-green) font-mono text-base mb-4 leading-[1.75]">
        Hola, mi nombre es
      </p>
      <h1 className="text-5xl sm:text-6xl font-semibold text-(--color-white) mb-4 leading-tight">
        Adrian Enis
      </h1>
      <h2 className="text-xl sm:text-2xl text-(--color-slate-light) mb-6 leading-[1.75]">
        Full-stack Developer · AI-First
      </h2>
      {showBio && (
        <p className="text-(--color-slate) text-base sm:text-lg leading-[1.75] max-w-md">
          Construyo aplicaciones web escalables con{" "}
          <span className="text-(--color-slate-lighter)">React, Next.js y Node.js</span>,
          con enfoque en arquitecturas{" "}
          <span className="text-(--color-green)">AI-First</span>.
        </p>
      )}
    </div>
  );
}
