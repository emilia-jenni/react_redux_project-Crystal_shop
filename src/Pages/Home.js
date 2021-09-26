import React from "react";
import HeroBanner from "../Components/HeroBanner";
import photo1 from "../images/sellphoto.jpg";
import photo2 from "../images/sellphoto1.jpg";
import photo3 from "../images/sellphoto2.jpg";
import photo4 from "../images/sellphoto3.jpg";
import photo5 from "../images/sellphoto4.jpg";
import photo6 from "../images/sellphoto5.jpg";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className="sellphotos">
        <img className="frontpgimg" src={photo1} alt="photo"></img>
        <img className="frontpgimg" src={photo2} alt="photo"></img>
        <img className="frontpgimg" src={photo3} alt="photo"></img>
        <img className="frontpgimg" src={photo4} alt="photo"></img>
        <img className="frontpgimg" src={photo5} alt="photo"></img>
        <img className="frontpgimg" src={photo6} alt="photo"></img>
      </div>
    </div>
  );
};

export default Home;
