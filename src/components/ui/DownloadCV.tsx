import DownloadIcon from "@/components/ui/DownloadIcon";

type Props = {
  className?: string;
};

export default function DownloadCV({ className = "" }: Props) {
  return (
    <a
      href="/CV-ADRIAN-v2.pdf"
      download="CV-Adrian-Enis.pdf"
      className={`inline-flex items-center gap-2 px-4 py-2 border border-(--color-green) rounded text-sm font-mono text-(--color-green) hover:bg-(--color-green)/10 transition-all duration-300 w-fit ${className}`}
    >
      <DownloadIcon />
      Descargar CV
    </a>
  );
}
