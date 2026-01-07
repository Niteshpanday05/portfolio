"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern developer portfolio with animations and clean UI.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    image: "/projects/portfolio1.JPG",
  },
  {
    title: "Interactive Features ",
    description: "User engaging features using modern Nextjs libraries and tailwind.",
    tech: ["Next.js", "Redux", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
    image: "/projects/features.JPG",
  },
  {
    title: "Sajilo Order",
    description: "A food delivery service web app using modern framework like reactjs Nextjs and Tailwind.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/sajiloorder/website.git",
    live: "#",
    image: "/projects/sajilo2.JPG",
  },
  {
    title: "pcoming Events",
    description: "A website showing upcoming events using modern framework and styling.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/Niteshpanday05/events.git",
    live: "#",
    image: "/projects/events.JPG",
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with charts and reusable components.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
    image: "/projects/sajilo.JPG",
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with charts and reusable components.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
    image: "/projects/profile.jpeg",
  },
];

/* ---------------- Animations ---------------- */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 },
  },
};

export default function ProjectsResponsive() {
  return (
    <section id="projects" className="py-24 gap-6 bg-gray-900
    ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            A showcase of my work with clean UI and smooth animations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-neutral-300 mt-2">{project.description}</p>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs rounded bg-white/10 px-2 py-1 text-neutral-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm text-white hover:text-emerald-400 transition"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm text-white hover:text-cyan-400 transition"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
