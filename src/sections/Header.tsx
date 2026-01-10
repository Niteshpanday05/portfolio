"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { X } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-0.5 rounded-full transition-all duration-200 ${
      pathname === path
        ? "bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <>
      {/* Hamburger Button (Top-Right, Mobile Only) */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-[9999] md:hidden p-2 rounded-full
                    backdrop-blur text-bl transition active:scale-95"
        aria-label="Toggle Menu"
      >
        {open ? <X size={26} /> : <BiMenuAltRight size={28} />}
      </button>

      {/* Desktop Navbar */}
      <div className="sticky top-3 z-50 flex justify-center items-center w-full">
        <nav className="relative flex gap-2 md:gap-6 p-0.5 border border-white/15
                        rounded-full bg-white/10 backdrop-blur">
          {/* Desktop Links */}
          <div className="hidden md:flex">
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
          </div>
        </nav>
      </div>

      {/* Full-Screen Mobile Menu */}
      {open && (
       <div className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-md
                flex flex-col items-center justify-center md:hidden">
  {/* Mobile Links */}


          {/* Optional Close Button */}
         {/*  <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-black text-3xl"
          >
            &times;
          </button> */}

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-10">
            <Link href="/" onClick={() => setOpen(false)} className=" bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent hover:text-white text-xl hover:opacity-90">
              Home
            </Link>
            <Link href="/projects" onClick={() => setOpen(false)} className=" bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent hover:text-white text-xl">
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className=" bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent hover:text-white text-xl">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className=" bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent hover:text-white text-xl">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
