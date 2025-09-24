import React from "react";
import "./Registersection.css";

const RegisterSection: React.FC = () => {
  return (
    <div className="reg-section">
      <div className="reg-info">
        <p className="reg-title">Register Now</p>
        <p className="reg-fee">500</p>
      </div>
      <div className="reg-button-container">
        <button className="reg-button">Apply Now</button>
      </div>
    </div>
  );
};

export default RegisterSection;
