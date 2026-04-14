import { Metadata } from "next";

import { Card } from "@/components/card/Card";

export const metadata: Metadata = {
  title: "TubeCourse - Página Inicial",
};

export default function PageHome() {
  return (
    <main>
      <Card
        image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
        title={"Curso de API Rest, Node e Typescript"}
        description={
          "No processo de desenvolvimento, as vezes precisamos criar componentes e outros recursos que nos farão performar muito melhor no futuro. A criação de bons componentes de interface é o segredo para um desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar junto o componente de card da nossa aplicação, esse componente será usado em toda a nossa plataforma de cursos, e tem as melhores práticas de desenvolvimento aplicadas. Links mencionados no vídeo: 📖 Repositório do projeto"
        }
        href={"/cursos/asdadsa"}
      />
    </main>
  );
}
