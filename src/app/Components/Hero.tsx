"use client";
import Image from "next/image";
import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div id="about" className="hero-section">
      <div className="body-font">
        <div id="holder" className="container flex items-center">
          <div className="image-container">
            <Image alt="image" height={300} width={300} src="/Assets/pic.jpg" />
          </div>
          <div className="text-container">
            <h1 className="title">
              I am
              <br className="break-line" />
              Web developer
            </h1>
            <h2 className="subtitle">Crafting Code, Building Experiences</h2>
            <p className="description">
              Chemical Engineer and web development enthusiast with a unique
              blend of analytical skills and a passion for coding. Experienced
              in optimizing processes, enhancing productivity, and ensuring
              quality control in industrial settings, while also developing web
              applications that focus on functionality and user experience. From
              managing production lines and maintaining safety protocols to
              building responsive web interfaces with HTML, CSS, and JavaScript,
              each role refines my problem-solving skills and adaptability.
              Committed to continuous learning, I’m excited to bring both
              technical engineering expertise and a creative coding mindset to
              innovative projects.
            </p>
            <div className="button-container">
              <a target="_blank" href="/Assets/Aqsa-Noor-Resume.pdf">
                <button className="download-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
