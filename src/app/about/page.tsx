import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen  text-white px-6 pt-16  font-sans">
      <div className="max-w-6xl  mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-full h-64 md:w-80 md:h-80  rounded-2xl overflow-hidden border border-gray-700">
            <Image
              src="/profile.jpeg"
              alt="Developer profile picture"
              fill
              className="object-cover object-center overflow-hidden"
              quality={100}
              priority
            />
          </div>
          <h1 className="flex pt-2 font-semibold font-sans text-emerald-300">
            Er. Nitesh Panday
          </h1>
          <h1 className="flex font-semibold font-sans">
            Software Developer ( IT Engineer )
          </h1>
        </div>

        {/* About Content */}
        <div className="space-y-6 ">
          <h1 className="text-4xl flex items-center justify-center md:justify-start just first-line:md:text-5xl font-bold font-serif">
            About Me
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a{" "}
            <span className="text-emerald-300 font-semibold pr-2">
              Full-Stack Web Developer
            </span>
            <span>
              specializing in building high-performance, scalable, and visually
              polished web applications.
            </span>
          </p>

          <p className="leading-relaxed text-gray-300 text-lg">
            My expertise lies in <strong>Next.js</strong>,{" "}
            <strong>React</strong>,<strong> Tailwind CSS</strong>,
            <strong> TypeScript</strong>,<strong> </strong>, and modern backend
            technologies. I focus on writing clean, maintainable code while
            delivering excellent user experiences.
          </p>

          <p className="leading-relaxed text-gray-300 text-lg">
            {
              "I’m a passionate web developer focused on building modern, high-performance web applications. My work involves developing front-end interfaces with React and Next.js, styling with Tailwind CSS, and integrating back-end services where needed."
            }
          </p>

          <p className="text-gray-300 text-lg">
            {
              "When I’m not coding, I enjoy learning new technologies and improving my problem-solving skills."
            }
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-emerald-300 to-sky-400 hover:opacity-80 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-600 hover:border-gray-900  rounded-lg hover:bg-white/90 hover:text-black  transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
``;
