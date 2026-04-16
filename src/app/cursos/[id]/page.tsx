import { Metadata } from "next";

import { CourseHeader } from "@/components/couse-header/CourseHeader";
import { StartCourse } from "@/components/StartCouse";

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
      <div className="flex w-full flex-col gap-4 px-2 min-[880px]:max-w-220">
        <StartCourse
          idCourse={"123"}
          idClass={"1"}
          image={"https://i.ytimg.com/vi/bP47qRVRqQs/hqdefault.jpg"}
          title={"Curso de API Rest, Node e Typescript"}
        />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
        <CourseHeader />
      </div>
    </main>
  );
}
