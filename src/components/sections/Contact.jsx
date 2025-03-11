import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";
import bgImage from "/assets/img_2.png";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
          alert("Message Sent!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
      <section
          id="contact"
          className="min-h-screen flex flex-col items-center justify-center py-20 bg-[url('/assets/contact-bg.jpg')] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
        <RevealOnScroll>
          <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 bg-black/50 backdrop-blur-md rounded-xl text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect!
            </h2>
            <p className="text-gray-100 mb-6 text-lg">
              Want to build something amazing together?
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Name..."
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
              </div>

              <div className="relative">
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="example@gmail.com"
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
              </div>

              <div className="relative">
              <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                  }
              />
              </div>

              <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>

        {/* Social Media Links */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Follow & Connect with Me</h3>
          <div className="flex space-x-6 text-3xl justify-center items-center">
            <a href="https://linkedin.com/in/favour-simeon-b4abbb228" target="_blank" className="text-blue-500 hover:text-blue-400 flex items-center gap-2">
              <FaLinkedin /> <span className="text-sm"></span>
            </a>
            <a href="https://github.com/Favoursimeon" target="_blank" className="text-gray-300 hover:text-gray-500 flex items-center gap-2">
              <FaGithub /> <span className="text-sm"></span>
            </a>
            <a href="mailto:favour@example.com" className="text-blue-200 hover:text-red-400 flex items-center gap-2">
              <FaEnvelope /> <span className="text-sm"></span>
            </a>
            <a href="https://instagram.com/the_real_boss_chick" target="_blank" className="text-pink-400 hover:text-pink-500 flex items-center gap-2">
              <FaInstagram /> <span className="text-sm"></span>
            </a>
            <a href="https://tiktok.com/@the_real_boss_chick" target="_blank" className="text-white hover:text-gray-700 flex items-center gap-2">
              <FaTiktok /> <span className="text-sm"></span>
            </a>
          </div>
        </div>
      </section>
  );
};