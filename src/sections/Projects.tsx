/* import sajiloImg from "@/assets/images/sajilo2.jpg";
import portfolioImg from "@/assets/images/portfolio1.jpg"
import eventsImg from "@/assets/images/events.jpg"; */
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Sajiloorder.com",
    year: "2024",
    title: "Sajilo Order",
    results: [
      { title: "Fast performance with modern tech (Next.js, APIs)" },
      { title: "Automates order processing" },
      { title: "Faster and secure checkout" },
    ],
    link: "https://github.com/sajiloorder/website.git",

    image: "/projects/sajilo2.jpg",
  },
  {
    company: "Portfolio",
    year: "2025",
    title: "Personal Portfolio",
    results: [
      { title: "Responsive website using modern features" },
      { title: "Clean structure and faster loading" },
      { title: "Attractive and Engaging" },
    ],
    link: "https://github.com/Niteshpanday05/portfolio.git",
    image: "/projects/portfolio1.jpg",
  },
  {
    company: " Events",
    year: "2023",
    title: "Upcoming Website",
    results: [
      { title: "Enhanced user experience " },
      { title: "Modern features and attractive UI" },
      { title: "Increased perfomance" },
    ],
    link: "https://github.com/Niteshpanday05/events.git",
    image: "/projects/events.jpg",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 pt-16">
      <div className="container">
        <SectionHeader
          eyebrow="Real World Results"
          title="  Featured Projects"
          description="Bringing ideas to life through digital experiences."
        />

        <div className=" flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 md:pt-12 md:px-10 
               lg:px-20 lg:pt-16 pb-0 sticky top-16 "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-10">
                  <div className=" bg-gradient-to-r from-emerald-300 to-sky-400   inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    {<span>&bull;</span>}
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white md:w-auto px-6 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <ArrowUpRightIcon className="size-4" />
                      <span>View Live Site</span>
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
