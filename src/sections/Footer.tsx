

import { FaGithub, FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";


const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/Niteshpanday05",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
  },
   {
    title: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
    icon: TfiEmail ,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/your-username",
    icon: FaXTwitter,
  },
];

export const Footer = () => {
  return (
    <footer className="relative pb-20  overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 
      -translate-x-1/2 bg-emerald-300/30
       [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      >
        {" "}
      </div>

      <div className="container">
        <div className="border-t border-white/60 py-8 text-sm flex flex-col md:flex-col md:justify-between items-center gap-6">
          <p className="text-white/60 ">
            © {new Date().getFullYear()} Nitesh Panday. All rights reserved.
          </p>
          <nav className="flex flex-col md:flex-row items-center gap-3">
            {socialLinks.map(({ title, url, icon: Icon }) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className=" z-50 inline-flex items-center text-gray-200 hover:text-emerald-600 transition hover:scale-110"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
