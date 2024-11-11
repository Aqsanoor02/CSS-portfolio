import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Importing the CSS file

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <a className="footer-brand">
            <Image alt="logo" height={40} width={40} src="/Assets/Alogo.png" />
            <span className="footer-title">A Noor&apos;s Corner</span>
          </a>
          <p className="footer-text">© 2024 ANC</p>
          <span className="footer-social">
            <Link href={'https://www.linkedin.com/in/nooraqsa'} target="_blank">
              <FaLinkedin className="social-icon" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
