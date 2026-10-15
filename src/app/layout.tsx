import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrian Enis — Full-stack Developer",
  description:
    "Full-stack Developer con React, Next.js, Node.js y TypeScript. Aplicaciones web y móviles para pymes y e-commerce.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}