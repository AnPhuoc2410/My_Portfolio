import React from "react";
import { educationInfo } from "../../portfolio";
import EducationCard from "../../components/educationCard/EducationCard";
import "./Education.scss";

export default function Education() {
  return (
    <div>
      {educationInfo.display && (
        <div className="education-section">
          {educationInfo.schools.map((school, i) => (
            <EducationCard key={i} school={school} />
          ))}
        </div>
      )}
    </div>
  );
}