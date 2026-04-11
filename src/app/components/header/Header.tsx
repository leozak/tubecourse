"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="bg-primary">
      <nav className="flex items-center gap-4 justify-start px-4 py-2 sm:px-3 sm:justify-center">
        <button className="sm:hidden">
          <MdMenu size={28} />
        </button>
        <ul className="sm:flex items-center gap-4 text-sm font-bold sm:text-lg">
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
        <h1 className="sm:hidden font-bold">
          {currentPath === "/" && "Home"}
          {currentPath === "/cursos" && "Cursos"}
        </h1>
      </nav>
    </header>
  );
};
