import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrian Enis — Full-stack Developer",
  description:
    "Full-stack Developer especializado en React, Next.js y arquitecturas AI-First.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}