import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

const footerLinks = [
  {
    title: "Email",
    href: "/email",
  },
  {
    title: "GitHub",
    url: "https://github.com/your-username",
  },

  {
    title: "LinkedIn",
    href: "/linkedin",
  },
];

export const Footer = () => {
  return (
    <footer className="relative pb-20 -z-10 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-emerald-300/30
       [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      >
        {" "}
      </div>

      <div className="container">
        <div className="border-t border-white/15 py-8 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <p className="text-white/60">
            © {new Date().getFullYear()} Nitesh Panday. All rights reserved.
          </p>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-gray-400"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
