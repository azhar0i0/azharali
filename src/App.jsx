import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  useEffect(() => {
    const navLinks = document .querySelectorAll(".ul-list li a");
    const sections = document.querySelectorAll("section");

    function removeActive() {
      navLinks.forEach(link => link.parentElement.classList.remove("active"));
    }

    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });

        removeActive();
        link.parentElement.classList.add("active");
      });
    });

    const revealElements = document.querySelectorAll(
      ".home-container, .about-container, .projects-container, .services-container, .contact-content"
    );
    revealElements.forEach(el => el.classList.add("reveal"));

    const backToTop = document.createElement("div");
    backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    backToTop.id = "back-to-top";
    document.body.appendChild(backToTop);
    backToTop.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      background: #8E9048;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease;
    `;

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    backToTop.addEventListener("mouseover", () => (backToTop.style.transform = "scale(1.2)"));
    backToTop.addEventListener("mouseout", () => (backToTop.style.transform = "scale(1)"));

    const cards = document.querySelectorAll(".project-card, .c1, .service-card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => (card.style.transform = "translateY(-8px) scale(1.05)"));
      card.addEventListener("mouseleave", () => (card.style.transform = "translateY(0) scale(1)"));
    });

    const infoCards = document.querySelectorAll(".c1");
    infoCards.forEach(card => {
      const heading = card.querySelector("h3");
      const paragraph = card.querySelector("p");

      if (heading && paragraph) {
        paragraph.style.display = "none";
        heading.style.display = "block";

        card.addEventListener("mouseenter", () => {
          heading.style.display = "none";
          paragraph.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
          heading.style.display = "block";
          paragraph.style.display = "none";
        });
      }
    });

    // Typing effect
    const typingElement = document.querySelector(".typing-text");
    const words = ["Fullstack Developer", "Web Enthusiast", "ReactVite Developer", "Node Developer", "Native Developer"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];
      const displayedText = currentWord.substring(0, charIndex);
      if (typingElement)
        typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 1000);
      }
    }
    type();

    // Scroll listener
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY + 100;
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          removeActive();
          const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
          if (activeLink) activeLink.parentElement.classList.add("active");
        }
      });
      backToTop.style.display = window.scrollY > 500 ? "flex" : "none";

      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) el.classList.add("active-reveal");
      });
    });

    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => {
        const link = card.getAttribute("data-link");
        if (link) window.open(link, "_blank");
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
