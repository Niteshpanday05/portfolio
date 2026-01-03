import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen  text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-gray-700">
            <Image
              src="/profile.jpg"   // place image in /public
              alt="Developer profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a <span className="text-emerald-400 font-semibold">Full-Stack Web Developer</span> 
            specializing in building high-performance, scalable, and visually 
            polished web applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            My expertise lies in <strong>Next.js</strong>, <strong>React</strong>, 
            <strong> Tailwind CSS</strong>, and modern backend technologies.
            I focus on writing clean, maintainable code while delivering excellent
            user experiences.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I enjoy solving real-world problems, collaborating on meaningful
            projects, and continuously improving my technical skills.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
