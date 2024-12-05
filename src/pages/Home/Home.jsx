//*****************************************************  start ***************************************************** */
import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";
import asset1 from "../../assets/rule_asset1.jpg";
import asset2 from "../../assets/rule_asset2.jpg";
import asset3 from "../../assets/logo_dark_QmPdj9K.svg";
function HomePage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    

    <div className="homepage-container">
 <div className="image-container">
  <img src={asset3} alt="Description" />
</div>

      <header className="homepage-header">
        <h1 className="main-heading">The Great CSScape</h1>
        <p className="sub-heading">
          Welcome to the ultimate CSS and code challenge! Sharpen your skills,
          follow the rules, and aim for the maximum points.
        </p>
      </header>

      <main className="homepage-content">
        <section className="rules-section">
          <h2 className="section-title">Rules</h2>
          <div className="rule-box">
            <h1 className="rule-description">
              If the code is enclosed like the below example, participants are
              not allowed to edit that part of the code.
            </h1>
            <img
              src={asset1}
              alt="Rule 1 Visual"
              className="rule-image large-image"
            />
          </div>
          <div className="rule-box">
            <h1 className="rule-description">
              If the code is enclosed like the below example, participants can
              add extra code but should not remove the existing code.
            </h1>
            <img
              src={asset2}
              alt="Rule 2 Visual"
              className="rule-image large-image"
            />
          </div>
          <p className="note">Note: If the code does not follow any of the patterns mentioned above, you are free to modify it as you wish.</p>
        </section>
        <section className="instructions-section">
          <h2 className="section-title">Instructions</h2>
          <ol className="instructions-list">
            <li>
              Violation of the above rules leads to disqualification of that
              task.
            </li>
            <li>
              If you are less confident with error fixing, it is recommended to
              do it last.
            </li>
            <li>
              Before starting coding, go through the starter page of each
              task carefully.
            </li>
            <li>Your task is to earn maximum points by solving challenges.</li>
            
            <li>
  Participants are permitted to use online resources and documentation; however, the use of chatbots, such as <b>ChatGPT</b>, is strictly prohibited unless explicitly disclosed to the volunteers within two attempts. Failure to comply will result in <b>disqualification</b>.
</li>

          </ol>
        </section>
        <section className="instructions-section">
  <h2 className="section-title">Points Division</h2>
  <ol className="instructions-list">
    <li>Round 1 - 60 points</li>
    <li>
      Round 2 - 120 points, in which 
      
        <p>Error Fix - 40 points</p>
        <p>Design - 50 points (decided after the event based on perfection, alignment, sizes, and minute details)</p>
        <p>Backend - 10+20 points</p>
      
    </li>
    <li> <b>total - 180 points </b></li>
  </ol>
</section>

<section className="instructions-section">
  <h2 className="section-title">Submission Guidelines</h2>
  <ol className="guidelines-list">
    <li>
      <strong>Round One:</strong>
      <ul className="sub-list">
        <li>Upload an image or PDF of the design.</li>
        <li>
          Submission Link: <a href="https://forms.gle/cuuxn738UaG27YZs9" target="_blank" rel="noopener noreferrer">https://forms.gle/cuuxn738UaG27YZs9</a>
        </li>
      </ul>
    </li>
    <li>
      <strong>Round Two:</strong>
      <ul className="sub-list">
        <li>First, upload your project to GitHub with the repository name format: <code>csscape_&lt;your-name&gt;_&lt;sl-no&gt;</code>.</li>
        <li>Upload the repository link in the below form.</li>
        <li>
          Submission Link: <a href="https://forms.gle/GCX9NQDs6EbjG6Lh7" target="_blank" rel="noopener noreferrer">https://forms.gle/GCX9NQDs6EbjG6Lh7</a>
        </li>
      </ul>
    </li>
    <h3><strong>Note:</strong> Submissions or commits made after 1 PM will not be considered.</h3>
  </ol>
</section>

        <section className="get-started-section">
          <h2 className="section-title">Get Started</h2>
          <div className="buttons-container">
            <button
              onClick={() => navigateTo("/error-fix-starter")}
              className="starter-button"
            >
              Error Fix
            </button>
            <button
              onClick={() => navigateTo("/style-starter")}
              className="starter-button"
            >
              Style
            </button>
            <button
              onClick={() => navigateTo("/backend-starter")}
              className="starter-button"
            >
              Backend
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
//*****************************************************  end  ***************************************************** */