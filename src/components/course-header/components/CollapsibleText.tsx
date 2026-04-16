"use client";

import { useState } from "react";

interface ICollapsibleTextProps {
  numberOfLinesWhenClosed: number;
  children: React.ReactNode;
}

export const CollapsibleText = ({
  numberOfLinesWhenClosed,
  children,
}: ICollapsibleTextProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-end">
      <p
        data-open={open}
        style={
          {
            "--number-of-lines-when-closed": numberOfLinesWhenClosed,
          } as React.CSSProperties
        }
        className="data-[open=false]:line-clamp-(--number-of-lines-when-closed)"
      >
        {children}
      </p>
      <button
        onClick={() => setOpen(!open)}
        data-open={open}
        className="rounded-full bg-paper px-2 font-semibold hover:cursor-pointer data-[open=false]:-mt-6"
      >
        {open ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
};
