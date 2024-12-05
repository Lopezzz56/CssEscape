/* **************************************************** end *************************************************** */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./DesignStarter.css";

// Import the expected design image
import expectedDesign from "../../assets/expected_design.jpg";
import asset3 from "../../assets/logo_dark_QmPdj9K.svg";
const DesignStarter = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/design");
  };

  return (
    <div className="design-starter">

<div className="image-container2">
  <img src={asset3} alt="Description" />
</div>
      <h1>Design Challenge </h1>
      
      <div className="challenge-instructions">
        <h2>Design Challenge Guidelines</h2>
        <ul>
          <li>You are <strong>only allowed</strong> to modify the <code>DesignPage.css</code> file</li>
          <li>Additional <code>&lt;div&gt;</code> elements or class names can be added to <code>DesignPage.jsx</code> if required</li>
          <li>Focus on achieving the design shown in the preview image below</li>
          <li>Pay attention to layout, color scheme, and overall composition</li>
        </ul>
      </div>

      <div className="design-preview">
        <h2>Expected Design Preview</h2><br></br>
        <img 
          src={expectedDesign} 
          alt="Expected Design Output" 
          className="preview-image"
        />
      </div>

      <div className="design-motivation">
        <p>Explore design concepts, unleash your creativity, and create something amazing!</p>
      </div>

      <button 
        onClick={handleNavigate} 
        className="navigate-button"
      >
        Start Design Challenge
      </button>
    </div>
  );
};

export default DesignStarter;
/* **************************************************** end *************************************************** */