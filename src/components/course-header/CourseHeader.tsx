import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContent } from "./components/CopyContent";

export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">
        Curso de API Rest, Node e Typescript
      </h1>
      <CollapsibleText numberOfLinesWhenClosed={3}>
        No CollapsibleTextrocesso de desenvolvimento, as vezes precisamos criar
        componentes e outros recursos que nos farão performar muito melhor no
        futuro. A criação de bons componentes de interface é o segredo para um
        desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar
        junto o componente de card da
      </CollapsibleText>
      <div className="flex gap-2 items-center">
        <CopyContent
          title="Compartilhe esse curso"
          content="http://localhost:3000/cursos/123"
        >
          <button className="flex items-center gap-2 rounded-full bg-paper px-4 py-2 hover:cursor-pointer">
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>
        <span>48 aulas</span>
      </div>
    </div>
  );
};
