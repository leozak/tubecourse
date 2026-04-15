"use client";

import { Card } from "@/components/card/Card";

import { ICardProps } from "@/components/card/Card";
import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ISectionProps {
  title: string;
  items: ICardProps[];
  variant: "grid" | "h-list";
}

export const Section = ({ title, variant = "grid", items }: ISectionProps) => {
  const [scrollAt, setScrollAt] = useState<"start" | "middle" | "end">("start");
  const scrollRef = useRef<HTMLUListElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    if (e.currentTarget.scrollLeft === 0) {
      setScrollAt("start");
    } else if (
      e.currentTarget.scrollLeft + e.currentTarget.clientWidth >=
      e.currentTarget.scrollWidth
    ) {
      setScrollAt("end");
    } else {
      setScrollAt("middle");
    }
  };

  const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({
      left: currentScrollLeft + scroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul
        ref={scrollRef}
        onScroll={(e) => handleScroll(e)}
        data-variant={variant}
        className="grid grid-cols-1 gap-2 sm:grid-cols-none
                   data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3
                   data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
      >
        {variant === "h-list" && (
          <button
            disabled={scrollAt === "start"}
            onClick={() => handleSetScroll(-350)}
            className="sticky left-0 my-auto -ml-14 hidden h-14 w-14 items-center justify-center rounded-full bg-primary transition-opacity hover:cursor-pointer active:opacity-80 disabled:opacity-0 sm:flex"
          >
            <MdKeyboardArrowLeft size={32} />
          </button>
        )}
        {items.map((item, index) => (
          <li
            key={item.title + index}
            data-variant={variant}
            className="w-full data-[variant=h-list]:sm:w-72"
          >
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              href={item.href}
            />
          </li>
        ))}
        {variant === "h-list" && (
          <button
            disabled={scrollAt === "end"}
            onClick={() => handleSetScroll(350)}
            className="sticky right-0 my-auto -ml-14 hidden h-14 w-14 items-center justify-center rounded-full bg-primary transition-opacity hover:cursor-pointer active:opacity-80 disabled:opacity-0 sm:flex"
          >
            <MdKeyboardArrowRight size={32} />
          </button>
        )}
      </ul>
    </section>
  );
};
