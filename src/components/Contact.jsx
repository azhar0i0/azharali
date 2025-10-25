import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setStatus("Message sent! Thank you.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section className="contact" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.p className="text-primary fw-bold mb-1" variants={item}>CONTACT</motion.p>
        <motion.h1 variants={item}>Get in Touch with Us</motion.h1>
        <motion.hr variants={item} />

        <motion.div className="contact-content" variants={container}>
          {/* Info Section */}
          <motion.div className="contact-info" variants={item}>
            <motion.p variants={item}>
              I'm always open to discuss exciting projects and new opportunities.
              Let's collaborate!
            </motion.p>

            <motion.div className="contact-details" variants={item}>
              <div className="contact-item">
                <i className="fa-solid fa-envelope"></i>
                <span>azharisworking@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+92 329 8892016</span>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Bahawalpur, Pakistan</span>
              </div>
            </motion.div>

            <motion.div className="social-links" variants={item}>
              <a
                className="social-link"
                href="https://github.com/Saboo24"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/skibidi-azhar/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="social-link"
                href="https://wa.me/213554139526"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div className="contact-form" variants={item}>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn-send">
                Send Message
              </button>
              {status && <span className="status">{status}</span>}
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
