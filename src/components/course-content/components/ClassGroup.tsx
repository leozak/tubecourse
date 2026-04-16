"use client";

import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

import { Class } from "./Class";
import { useState } from "react";

interface IClassGroupProps {
  title: string;
  courseId: string;
  classes: {
    id: string;
    title: string;
  }[];
}

export const ClassGroup = ({ title, classes, courseId }: IClassGroupProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-6 p-4 bg-paper"
      >
        {open ? (
          <MdKeyboardArrowDown size={24} />
        ) : (
          <MdKeyboardArrowRight size={24} />
        )}
        {title}
      </button>

      <ol
        data-open={open}
        className="flex flex-col -mt-2 data-[open=false]:hidden"
      >
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <Class
              title={classItem.title}
              playerUrl={`/player/${courseId}/${classItem.id}`}
            />
          </li>
        ))}
      </ol>
    </>
  );
};
