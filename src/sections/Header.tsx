import Link from "next/link";


export const Header = () => {
 return(
   <div className="sticky top-3 z-50 flex justify-center items-center w-full">
      <nav className="flex gap-2 md:gap-6 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        
        <Link href="/" className="nav-item">
          Home
        </Link>

        <Link href="/projects" className="nav-item">
          Projects
        </Link>

        <Link href="/about" className="nav-item">
          About
        </Link>

        <Link
          href="/contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contacts
        </Link>

      </nav>
    </div>
 )
};
