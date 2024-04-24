import React from "react";
import "./hero.css"; // Import CSS file for styling
import Footbar from "./Footbar.jsx";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <video className="video-bg" autoPlay muted loop>
          <source
            src="https://res.cloudinary.com/dpnk4utb6/video/upload/v1712582542/ABIGENGINE_DROP1_lifnrn.mp4"
            // type="video/mp4"
          />
          {/* Add additional <source> elements for different video formats if needed */}
          Your browser does not support the video tag.
        </video>
        {/* Add your content over the video background */}
        {/* <div className="content">
        <h1>Welcome to our website</h1>
        <p>This is the hero section with a video background.</p>
      </div> */}
        <Footbar />
      </div>
      {/* <Footbar /> */}
    </div>
  );
};

export default HeroSection;
