import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YouTube NextJS Course Plataform",
  description: "Plataforma de cursos baseada em vídeos do YouTube",
};

interface IRootLayout {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR" className={`antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
