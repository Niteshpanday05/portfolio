"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LiaArrowLeftSolid } from "react-icons/lia";

export default function FloatingBackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don’t show on homepage
 /*  if (pathname === "/") return null; */

  return (
    <button
      onClick={() => router.back()}
      className={`
        fixed top-6 left-6 z-50 
       
     text-sky-400
     hover:text-white hidden
        md:flex items-center justify-center
        shadow-lg
        transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
      aria-label="Go back"
    >
      <LiaArrowLeftSolid  size={20} />
    </button>
  );
}
