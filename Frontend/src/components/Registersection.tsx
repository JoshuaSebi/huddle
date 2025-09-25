import React from "react";
import "./Registersection.css";

interface RegisterSectionProps {
  fee: string;
  link: string;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ fee, link }) => {
  return (
    <div className="reg-section">
      <div className="reg-info">
        <p className="reg-title">Register Now</p>
        <p className="reg-fee">{fee}</p>
      </div>
      <div className="reg-button-container">
        <a href={link} target="_blank" rel="noopener noreferrer" className="reg-link">
          <button className="reg-button">Apply Now</button>
        </a>
      </div>
    </div>
  );
};

export default RegisterSection;
