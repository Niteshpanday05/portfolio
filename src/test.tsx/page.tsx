"use client";

import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-4 bg-gray-900 text-white"
    >
      {/* Decorative Gradients */}
      <div className="absolute -top-32 -left-32 h-96 w-96 -z-10 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-emerald-400">
            <Sparkles size={16} /> Let’s build something great
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
            <div>
              <span className="text-bg-gradient-to-r from-emerald-300 to-sky-400 ">
                {" "}
                Get In Touch
              </span>
            </div>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            I’m a passionate web developer focused on building fast, modern, and
            scalable applications. Let’s turn your idea into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-neutral-400 mb-10">
              Prefer direct communication? Reach out via email or phone and I’ll
              respond as soon as possible.
            </p>

            <div className="space-y-6 text-neutral-300">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail />
                </span>
                <span>developer.nitesh5@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone />
                </span>
                <span>+977 9702003949</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin />
                </span>
                <span>Nepal</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl"
          >
            <div className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-3 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <textarea
                placeholder="Tell me about your project"
                rows={5}
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-3 text-black font-lg placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl  bg-gradient-to-r from-emerald-300 to-sky-400  px-6 py-3 font-semibold text-black transition-all hover:bg-emerald-600"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
                <span className="relative flex items-center gap-2">
                  Send Message <Send size={18} />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
