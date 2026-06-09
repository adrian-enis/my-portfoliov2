import DownloadIcon from "@/components/ui/DownloadIcon";

type Props = {
  className?: string;
};

export default function DownloadCV({ className = "" }: Props) {
  return (
    <a
      href="/CV-ADRIAN-v2.pdf"
      download="CV-Adrian-Enis.pdf"
      className={`inline-flex items-center gap-3 px-8 py-4 border border-(--color-green) rounded text-base font-semibold font-mono text-(--color-green) hover:bg-(--color-green)/10 active:scale-95 transition-all duration-300 w-fit ${className}`}
    >
      <DownloadIcon />
      Descargar CV
    </a>
  );
}
