import { Metadata } from "next";

import { Section } from "./section/Section";

export const metadata: Metadata = {
  title: "TubeCourse - Página Inicial",
};

const items = [
  {
    href: "/cursos/asdadsa",
    title: "Curso de API Rest, Node e Typescript",
    image: "https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg",
    description:
      "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto",
  },
  {
    href: "/cursos/asdadsa",
    title: "Curso de API Rest, Node e Typescript",
    image: "https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg",
    description:
      "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto",
  },
  {
    href: "/cursos/asdadsa",
    title: "Curso de API Rest, Node e Typescript",
    image: "https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg",
    description:
      "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto",
  },
  {
    href: "/cursos/asdadsa",
    title: "Curso de API Rest, Node e Typescript",
    image: "https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg",
    description:
      "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto",
  },
  {
    href: "/cursos/asdadsa",
    title: "Curso de API Rest, Node e Typescript",
    image: "https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg",
    description:
      "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto",
  },
];

export default function PageHome() {
  return (
    <main className="flex justify-center mt-8">
      <div className="max-w-full min-[880px]:max-w-220">
        <Section title="Veja mais cursos" variant="h-list" items={items} />
      </div>
    </main>
  );
}
