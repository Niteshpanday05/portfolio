import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

/* 
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
]; */

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/your-username",
    icon: FaTwitter,
  },
];

export const Footer = () => {
  return (
    <footer className="relative pb-28 -z-10 overflow-x-clip">
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
            {socialLinks.map(({ title, url, icon: Icon }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="text-3xl text-gray-600 hover:text-emerald-400 transition-transform transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
