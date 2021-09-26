import React from "react";
import Heroimage from "../images/heroimage.mp4";

const HeroBanner = () => {
  return (
    <div>
      <video className="heroimage" controls autoPlay loop>
        <source src={Heroimage} type="video/mp4"></source>
        Your browser doesn't support the video tag
      </video>
    </div>
  );
};

export default HeroBanner;
