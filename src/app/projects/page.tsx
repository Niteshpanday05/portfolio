"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.vercel.app",
    image: "/coding.jpg", // put the image in /public/projects
  },
  {
    title: "E-commerce Store",
    description:
      "Full-stack e-commerce app with authentication, cart, and checkout flow.",
    tech: ["Next.js", "Redux", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "#",
    image: "/profile.jpeg",
  },
  {
    title: "Dashboard UI",
    description:
      "Responsive admin dashboard with charts and reusable components.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
    image: "/profile.jpeg",
  },
  {
    title: "Dashboard UI",
    description:
      "Responsive admin dashboard with charts and reusable components.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
    image: "/profile.jpeg",
  },
  {
    title: "Dashboard UI",
    description:
      "Responsive admin dashboard with charts and reusable components.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    github: "https://github.com/yourusername/dashboard",
    live: "#",
    image: "/profile.jpeg",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            Some of the projects I’ve built to showcase my skills and experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/5 bg-white backdrop-blur-lg  transition overflow-hidden"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl  bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-800">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap text-black gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm rounded-full border border-white/10 px-3 py-1 text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center text-black gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-neutral-800 hover:text-white transition"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm text-neutral-800 hover:text-white transition"
                  >
                    <ExternalLink size={18} />
                    Live
                  </a>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-90 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
