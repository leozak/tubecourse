import { Card } from "@/components/card/Card";

interface ISectionProps {
  title: string;
  variant?: "grid" | "h-list";
}

export const Section = ({ title, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">{title}</h2>
      <ul
        data-variant={variant}
        className="grid grid-cols-1 gap-2 sm:grid-cols-none
                   data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3
                   data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
            description={
              "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
            }
            href={"/cursos/asdadsa"}
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
            description={
              "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
            }
            href={"/cursos/asdadsa"}
          />
        </li>
        <li
          data-variant={variant}
          className="w-full data-[variant=h-list]:sm:w-72"
        >
          <Card
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
            description={
              "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
            }
            href={"/cursos/asdadsa"}
          />
        </li>
      </ul>
    </section>
  );
};
