/* **************************************************** start *************************************************** */
import React, { useState } from 'react';
import "./BackendStarter.css";
import output from "../../assets/backend.jpg"

const BackendStarter = () => {
  const [showOutput, setShowOutput] = useState(false);

  const handleClick = () => {
    setShowOutput(true);
  };

  return (
    <div className="instruction-container">
      <h1 className="title">Backend Implementation</h1>
      
      <h2 className="sub-title">Postal PIN API Integration</h2>
      
      <p className="overview">
        <strong>Overview:</strong><br />
        You need to set up a server that allows users to input a postal pincode and display at least two place names and their corresponding state names. 
        You can choose any backend framework of your choice (e.g., Express), and your frontend will be in React.
        The task is divided into three points divisions.
      </p>

      <h3 className="points-title">Points Division:</h3>
      <ul className="points-list">
        <li><strong>10 points:</strong> If the output is displayed only in the console of localhost:5000/ (no React integration).
            example:
            <img
            src={output}
            alt="Output in console"
            width="750"
            />
        </li>
        <li><strong>20 points:</strong> If the output is displayed on the /backend page through React, integrated into your project at <code>src/backend/backend.jsx</code>.
        <br></br>
        show output in <a href='http://localhost:5173/backend'>/backend</a>
        </li>
        <li><strong>Max Points (30):</strong> If the frontend and backend work together and display the place names and state names from the pincode input.
        </li>
   
      </ul>

      <p className="docs-link">
        <strong>Reference Documentation:</strong> You can refer to the <a href="http://www.postalpincode.in/Api-Details#:~:text=Postal%20PIN%20Code%20API%20allows,Office%20Branch%20Name%20of%20India.&text=Postal%20PIN%20Code%20API%20returns%20the%20response%20in%20JSON%20format." target="_blank" rel="noopener noreferrer">Postal PIN Code API documentation</a> for more details.
      </p>

    </div>
  );
};

export default BackendStarter;
/* **************************************************** end *************************************************** */