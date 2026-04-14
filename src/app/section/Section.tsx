import { Card } from "@/components/card/Card";

export const Section = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">Todos os Cursos</h2>
      <ul className="flex flex-col gap-2">
        <li>
          <Card
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
            description={
              "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
            }
            href={"/cursos/asdadsa"}
          />
        </li>
        <li>
          <Card
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
            description={
              "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
            }
            href={"/cursos/asdadsa"}
          />
        </li>
        <li>
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
