"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="bg-primary">
      <nav className="flex items-center justify-center py-2">
        <ul className="flex items-center gap-4 font-bold">
          <li>
            <Link href="/">
              <div className="rounded-lg border-2 px-2 py-0.5 font-black">
                TubeCourse
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              data-active={currentPath === "/"}
              className="py-2 hover:underline data-[active=true]:underline"
            >
              Página inicial
            </Link>
          </li>
          <li>
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className="py-2 hover:underline data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li>
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
      </nav>
    </header>
  );
};
