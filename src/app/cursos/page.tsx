import { Metadata } from "next";
import { Section } from "../section/Section";

export const metadata: Metadata = {
  title: "TubeCourse - Cursos",
};

export default function PageCursos() {
  return (
    <main>
      <Section title="Todos os cursos" variant="grid" />
    </main>
  );
}
