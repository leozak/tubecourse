"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = usePathname();

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, []);

  return (
    <>
      <header className="bg-primary fixed top-0 left-0 right-0">
        <nav className="flex items-center gap-4 justify-start px-4 py-2 sm:px-3 sm:justify-center">
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu size={28} />
          </button>

          {/* DESKTOP MENU */}
          <ul
            className="sm:flex items-center gap-4 text-sm font-bold sm:text-lg"
            tabIndex={isOpen ? -1 : undefined}
          >
            <li>
              <Link href="/">
                <div className="rounded-lg border-2 px-2 py-0.5 font-black">
                  TubeCourse
                </div>
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/"
                data-active={currentPath === "/"}
                className="py-2 hover:underline data-[active=true]:underline"
              >
                Home
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="/cursos"
                data-active={currentPath === "/cursos"}
                className="py-2 hover:underline data-[active=true]:underline"
              >
                Cursos
              </Link>
            </li>
            <li className="hidden sm:block">
              <Link
                href="https://github.com/leozak/tubecourse"
                target="_blank"
                className="flex items-center gap-1 py-2 hover:underline"
              >
                GitHub
                <MdOpenInNew />
              </Link>
            </li>
          </ul>

          {/* MOBILE MENU */}
          <div
            className={`fixed top-11 left-0 sm:hidden w-screen shadow-2xl
            transform transition-all duration-300 ease-in-out -translate-x-60
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            tabIndex={isOpen ? undefined : -1}
          >
            <div
              className="absolute right-0 top-0 w-full h-full bg-linear-to-r from-background"
              onClick={() => setIsOpen(!isOpen)}
            />
            <ul
              className="flex flex-col gap-2 text-sm font-bold sm:text-lg backdrop-blur-md h-screen w-50 pt-5 pl-4 bg-primary/60"
              onClick={(e) => e.stopPropagation()}
            >
              <li className="">
                <Link
                  href="/"
                  data-active={currentPath === "/"}
                  className="py-2 hover:underline data-[active=true]:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href="/cursos"
                  data-active={currentPath === "/cursos"}
                  className="py-2 hover:underline data-[active=true]:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Cursos
                </Link>
              </li>
              <li className="">
                <Link
                  href="https://github.com/leozak/tubecourse"
                  target="_blank"
                  className="flex items-center gap-1 py-2 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  GitHub
                  <MdOpenInNew />
                </Link>
              </li>
            </ul>
          </div>

          <h1 className="sm:hidden font-bold line-clamp-1 w-full">
            {currentPath === "/" && "Página inicial"}
            {currentPath === "/cursos" && "Todos os cursos"}
          </h1>
        </nav>
      </header>
      <div className="h-10 sm:h-14" />
    </>
  );
};
