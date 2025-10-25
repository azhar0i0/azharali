import React from "react";

export default function Navbar() {
  return (
    <header className="header-list">
      <div className="div-list">
        <ul className="ul-list">
          <li className="active"><i className="fa-regular fa-house"></i><a href="#home">Home</a></li>
          <li><i className="fa-regular fa-address-card"></i><a href="#about">About</a></li>
          <li><i className="fa-regular fa-folder-open"></i><a href="#project">Projects</a></li>
          <li><i className="fa-solid fa-code"></i><a href="#services">Services</a></li>
          <li><i className="fa-regular fa-envelope"></i><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
