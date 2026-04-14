import { Metadata } from "next";

import { Card } from "@/components/card/Card";
import { Section } from "./section/Section";

export const metadata: Metadata = {
  title: "TubeCourse - Página Inicial",
};

export default function PageHome() {
  return (
    <main>
      <Section />
    </main>
  );
}
