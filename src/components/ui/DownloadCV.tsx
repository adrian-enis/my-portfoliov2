import DownloadIcon from "@/components/ui/DownloadIcon";

type Props = {
  className?: string;
};

export default function DownloadCV({ className = "" }: Props) {
  return (
    <a
      href="/CV-ADRIAN-v2.pdf"
      download="CV-Adrian-Enis.pdf"
      className={`cv-button ${className}`}
    >
      <DownloadIcon />
      Descargar CV
    </a>
  );
}
