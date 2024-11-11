import Image from "next/image";
import React from "react";
import "./Skills.css"; // Importing the CSS file

function Skills() {
  return (
    <div id="skills" className="skills-section">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        <div className="skill-item">
          <Image
            alt="html"
            height={40} width={40}
            src="/Assets/html.png"             className="skill-icon"
          />
          <h1 className="skill-text">HTML</h1>
        </div>
        <div className="skill-item">
          <Image
            alt="css"
            height={40} width={40}
            src="/Assets/css.png"             className="skill-icon"
          />
          <h1 className="skill-text">CSS</h1>
        </div>
        <div className="skill-item">
          <Image
            alt="javascript"
            height={40} width={40}
            src="/Assets/react.png"         
            className="skill-icon"
          />
          <h1 className="skill-text">React JS</h1>
        </div>
      </div>
      <div className="skills-container">
        <div className="skill-item">
          <Image
            alt="hysys"
            height={40} width={40}
            src="/Assets/hysys.png"              className="skill-icon"
          />
          <h1 className="skill-text">Aspen Hysys</h1>
        </div>
        <div className="skill-item">
          <Image
            alt="aspen-plus"
            height={40} width={40}
            src="/Assets/plus.png"
            className="skill-icon"
          />
          <h1 className="skill-text">Aspen Plus</h1>
        </div>
        <div className="skill-item">
          <Image
            alt="simulink"
            height={40} width={40}
            src="/Assets/simulink.png"               className="skill-icon"
          />
          <h1 className="skill-text">Simulink</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
