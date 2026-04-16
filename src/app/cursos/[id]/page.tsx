import { Metadata } from "next";

import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCouse";
import { Class } from "@/components/course-content/components/Class";

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
        <div className="flex-2">
          <CourseHeader />
          <Class
            title="Curso de API Rest, Node e Typescript #01 - Introdução"
            playerUrl="/player/{courseId}/{classId}"
          />
        </div>
      </div>
    </main>
  );
}
