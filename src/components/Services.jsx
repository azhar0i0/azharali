// src/components/Services.jsx
import React from "react";
import webSvg from "../assets/images/web.svg";
import appSvg from "../assets/images/app.svg";
import dmSvg from "../assets/images/dm.svg";
import seoSvg from "../assets/images/seo.svg";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "We're use React + Vite for our web dev with Tailwind, Redux and modular folder structure.",
      img: webSvg,
    },
    {
      title: "App Development",
      desc: "We're use React Native for app dev with Tailwind and modular folder structure.",
      img: appSvg,
    },
    {
      title: "Social Media Marketing",
      desc: "We're expert in social media marketing, doing our professional work from 2019.",
      img: dmSvg,
    },
    {
      title: "Custom Backend",
      desc: "We're use Node.js & Django for custom backend, completely structured and organized.",
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
