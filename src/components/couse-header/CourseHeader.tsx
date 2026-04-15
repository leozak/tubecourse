export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">
        Curso de API Rest, Node e Typescript
      </h1>
      <p>
        No processo de desenvolvimento, as vezes precisamos criar componentes e
        outros recursos que nos farão performar muito melhor no futuro. A
        criação de bons componentes de interface é o segredo para um
        desenvolvimento rápido de uma aplicação frontend. Nessa vamos criar
        junto o componente de card da
      </p>
      <div className="flex gap-2 items-center">
        <button className="flex py-2 px-4 bg-paper rounded-full hover:cursor-pointer">
          Compartilhar
        </button>
        <span>48 aulas</span>
      </div>
    </div>
  );
};
