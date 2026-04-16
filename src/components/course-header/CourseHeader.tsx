"use client";

import { MdShare } from "react-icons/md";
import { CollapsibleText } from "./components/CollapsibleText";
import { CopyContent } from "./components/CopyContent";

interface ICourseHeaderProps {
  title: string;
  description: string;
  totalClasses: number;
}

export const CourseHeader = ({
  title,
  description,
  totalClasses,
}: ICourseHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">{title}</h1>
      <CollapsibleText numberOfLinesWhenClosed={3}>
        {description}
      </CollapsibleText>
      <div className="flex gap-2 items-center">
        <CopyContent
          title="Compartilhe esse curso"
          content={window.location.href}
        >
          <button className="flex items-center gap-2 rounded-full bg-paper px-4 py-2 hover:cursor-pointer">
            <MdShare />
            Compartilhar
          </button>
        </CopyContent>
        <span>{totalClasses} aulas</span>
      </div>
    </div>
  );
};
