import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./Navbar.css"; // Importing the CSS file

function Navbar() {
  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="navbar-container">
          <a className="logo-container">
            <Image
              alt="Logo"
              height={80}
              width={80}
              src="/Assets/Alogo.png"            />
            <span className="logo-text">A Noor&apos;s Corner</span>
          </a>
          <nav className="nav-links">
            <Link href={"#about"} className="nav-item">
              Home
            </Link>
            <Link href={"#skills"} className="nav-item">
              Skills
            </Link>
            <Link href={"#contact"} className="nav-item">
              Contact
            </Link>
          </nav>
          <a target="_blank" href="/Assets/Aqsa-Noor-Resume.pdf">
            <button className="download-btn">Download CV</button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
