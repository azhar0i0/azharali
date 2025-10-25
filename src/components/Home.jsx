import React from "react";
import pfp from "../assets/images/pfp.jpg";

export default function Home() {
  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1 className="fw-bold">Hi, I'm Azhar Ali</h1>
            <h3 className="typing-text">Web & App Developer</h3>
            <div className="info-p">
              <p>
                I create beautiful, functional, and user-centered digital
                experiences. 2+ years in <b>Web</b> & <b>App Development</b>, I
                bring ideas to life through clean code and thoughtful design.
              </p>
            </div>
            <div className="info-p2">
              <p>
                <i className="fa-solid fa-location-dot"></i> Based in Pakistan
              </p>
              <p>
                <i className="fa-solid fa-briefcase"></i> Available Now
              </p>
            </div>
            <div className="btnn">
              <button className="btn-home1">
                <i className="fa-solid fa-arrow-right"></i> Hire Me
              </button>
              <button className="btn-home2">
                <i className="fa-solid fa-download"></i> Download CV
              </button>
            </div>
            <hr />
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li>
                  <a href="https://github.com/azhar0i0/">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/skibidi-azhar/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/skibidi.azhar/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-wrap">
          <img src={pfp} alt="Profile" />
        </div>
      </div>
    </section>
  );
}
