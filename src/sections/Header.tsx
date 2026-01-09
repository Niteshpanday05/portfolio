"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-0.5 rounded-full transition-all duration-200 ${
      pathname === path
        ? " bg-gradient-to-r from-emerald-300 to-sky-400  text-gray-900"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <div className="sticky top-3 z-50 flex justify-center items-center w-full">
      <nav className="flex gap-2 md:gap-6 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/projects" className={linkClass("/projects")}>
          Projects
        </Link>

        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>

        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </div>
  );
};
