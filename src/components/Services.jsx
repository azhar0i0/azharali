import React from "react";
import webSvg from "../assets/images/web.svg";
import appSvg from "../assets/images/app.svg";
import dmSvg from "../assets/images/dm.svg";
import seoSvg from "../assets/images/seo.svg";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We use React + Vite for our web development with Tailwind, Redux, and a modular folder structure.",
      img: webSvg,
    },
    {
      title: "App Development",
      desc: "We use React Native for app development with Tailwind and clean modular architecture.",
      img: appSvg,
    },
    {
      title: "Social Media Marketing",
      desc: "We are experts in social media marketing, providing professional service since 2019.",
      img: dmSvg,
    },
    {
      title: "Custom Backend",
      desc: "We use Node.js & Django for structured, secure, and scalable backend solutions.",
      img: seoSvg,
    },
  ];

  return (
    <section className="services" id="services">
      <p className="text-primary fw-bold mb-1">SERVICES</p>
      <h1>Our Features & Services</h1>
      <hr />
      <div className="services-container">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <img src={s.img} alt={s.title} />
            <h6>{s.title}</h6>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
