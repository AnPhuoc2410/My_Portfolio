import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons jetbrains-mono">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                <img src={skills.logo} alt={skills.skillName} className="skill-logo" />
                <span className="skill-name">{skills.skillName}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}