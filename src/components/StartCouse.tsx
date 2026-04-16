import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IStartCourseProps {
  idCourse: string;
  idClass: string;
  image: string;
}

export const StartCourse = ({
  idCourse,
  idClass,
  image,
}: IStartCourseProps) => {
  return (
    <div className="p-3 bg-paper rounded-md flex flex-col gap-4">
      <Link
        href={`/player/${idCourse}/${idClass}`}
        className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded-2xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="w-full h-full flex justify-center items-center rounded-2xl bg-background/70 opacity-0 hover:opacity-100 transition-opacity">
          <MdPlayCircleOutline size={58} />
        </div>
      </Link>
      <Link
        href={`/player/${idCourse}/${idClass}`}
        className="bg-primary p-2 px-3 rounded text-center"
      >
        Começar curso
      </Link>
    </div>
  );
};
