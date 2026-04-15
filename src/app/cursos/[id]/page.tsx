import { Metadata } from "next";

import { CourseHeader } from "@/components/couse-header/CourseHeader";

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
      <div className="w-full min-[880px]:max-w-220">
        <CourseHeader />
      </div>
    </main>
  );
}
