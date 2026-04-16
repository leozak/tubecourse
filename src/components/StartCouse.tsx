"use client";

import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface IStartCourseProps {
  idCourse: string;
  idClass: string;
  image: string;
  title: string;
}

export const StartCourse = ({
  idCourse,
  idClass,
  image,
  title,
}: IStartCourseProps) => {
  const [ref, inView] = useInView({ threshold: 0.2, initialInView: true });
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col gap-4 rounded-md bg-paper p-3 md:sticky md:top-22"
      >
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
          className="bg-primary p-2 px-3 rounded text-center hover:no-underline"
        >
          Começar curso
        </Link>
      </div>
      {!inView && (
        <div className="bg-paper p-3 px-2 flex flex-col gap-3 absolute left-0 right-0 top-11 sm:top-14">
          <h1 className="font-extrabold text-xl">{title}</h1>
          <Link
            href={`/player/${idCourse}/${idClass}`}
            className="bg-primary p-2 px-3 rounded text-center hover:no-underline"
          >
            Começar curso
          </Link>
        </div>
      )}
    </>
  );
};
