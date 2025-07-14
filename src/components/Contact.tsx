import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
const SERVICE_ID=import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          form.current?.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-16 bg-gray-50 dark:bg-[#1a1a1a] text-black dark:text-white"
    >
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

        {/* Location & Timezone */}
        <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> Rajasthan, India 🇮🇳
          </div>
          <div className="flex items-center gap-2">
            🕐 IST (UTC+5:30)
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <a href="tel:+91xxxxxxxxx" className="hover:underline">
              +91 xxxxxxxxx
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded dark:bg-[#222] dark:border-gray-700" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded dark:bg-[#222] dark:border-gray-700" />
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded dark:bg-[#222] dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Confirmation */}
        {sent && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-2xl">
          <a
            href="mailto:rameshpotaliya87@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Ramesh087"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ramesh-potaliya-572166229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

