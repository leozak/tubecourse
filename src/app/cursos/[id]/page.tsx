import { Metadata } from "next";

import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCouse";
import { ClassGroup } from "@/components/course-content/components/ClassGroup";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: id,
    description: `Detalhes do curso ${id}`,
  };
}

interface Props {
  params: {
    id: string;
  };
}

export default async function PageCourseDetail({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mt-8 flex justify-center">
      <div className="flex w-full flex-col gap-4 px-2 min-[880px]:max-w-220 md:flex-row-reverse lg:px-0">
        <div className="flex-1">
          <StartCourse
            idCourse={"123"}
            idClass={"1"}
            image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
            title={"Curso de API Rest, Node e Typescript"}
          />
        </div>
        <div className="flex-2 flex flex-col gap-4">
          <CourseHeader />
          <ClassGroup
            title="Introdução e apresentação do projeto"
            courseId="123"
            classes={[
              { id: "1", title: "Aula 1 - Apresentação do curso" },
              { id: "2", title: "Aula 2 - Apresentação do projeto" },
              { id: "3", title: "Aula 3 - Apresentação do projeto" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
