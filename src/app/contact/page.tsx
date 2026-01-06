"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col gap-4"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">Contact Me</h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="p-3 rounded bg-neutral-800 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 rounded bg-neutral-800 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      />

      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        className="p-3 rounded bg-neutral-800 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="bg-emerald-400 text-black py-2 rounded font-semibold hover:bg-emerald-500 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-400 mt-2">{success}</p>}
    </motion.form>
  );
}
