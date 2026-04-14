import { Metadata } from "next";

import { Section } from "./section/Section";

export const metadata: Metadata = {
  title: "TubeCourse - Página Inicial",
};

export default function PageHome() {
  return (
    <main>
      <Section title="Veja mais cursos" variant="h-list" />
    </main>
  );
}
