import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Font set
const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TubeCourse - YouTube Course Plataform 🎓",
  description: "Plataforma de cursos baseada em vídeos do YouTube",
};

interface IRootLayout {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR" className={`antialiased`}>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
