import { Metadata } from "next";

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

  console.log(id);
  return (
    <main>
      <h1>Curso {id}</h1>
    </main>
  );
}
