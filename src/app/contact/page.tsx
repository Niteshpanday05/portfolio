"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSuccess("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
    setTimeout(() => setSuccess(null), 4000);
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 px-4 bg-gray-900 text-white"
    >
      {/* Decorative Gradients */}
      <div className="absolute -top-32-black/60 -left-32 h-96 w-96 -z-10 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
            <div>
              <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </div>
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            {
              "I'm a passionate web developer focused on building fast, modern, and scalable applications. Let's turn your idea into reality."
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-stretch">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-2xl border border-emerald-100 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h3 className="text-2xl flex items-center justify-center font-semibold mb-4">
              Contact Information
            </h3>
            <p className="text-neutral-400 mb-8">
              Prefer direct communication? Reach out via email or phone and I’ll
              respond as soon as possible.
            </p>

            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Mail />
                </span>
                <span>developer.nitesh5@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Phone />
                </span>
                <span>+977 9702003949</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin />
                </span>
                <span>Nepal</span>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-emerald-100 bg-gradient-to-br from-white/10 to-white/5 p-10 backdrop-blur-xl"
          >
            <div className="grid gap-5">
              <h3 className="text-2xl font-semibold flex justify-center text-white p-2 mb-2">
                Contact Me
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-2 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-2 text-black placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full rounded-xl bg-white/90 border border-white/10 px-4 py-2 text-black font-lg placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl  bg-gradient-to-r from-emerald-300 to-sky-400  px-4 py-2 font-semibold text-black transition-all hover:bg-emerald-600"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
        {success && (
          <div
            className={`fixed top-5 left-1/2 -translate-x-1/2 z-[9999]
                px-6 py-3 rounded-lg shadow-lg font-medium
              ${
                success.includes("Failed")
                  ? "bg-red-500 text-white"
                  : "bg-emerald-500 text-black"
              }`}
          >
            {success}
          </div>
        )}
      </div>
    </section>
  );
}
