import React from "react";
import HeroBanner from "../Components/HeroBanner";
import photo1 from "../images/sellphoto.jpg";
import photo2 from "../images/sellphoto1.jpg";
import photo3 from "../images/sellphoto2.jpg";
import photo4 from "../images/sellphoto3.jpg";
import photo5 from "../images/sellphoto4.jpg";
import photo6 from "../images/sellphoto5.jpg";
import photo7 from "../images/sellphoto6.jpg";
import photo8 from "../images/sellphoto7.jpg";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <h1>Crystals:</h1>
      <div className="row1">
        <img className="frontpgimg" src={photo1} alt="rose quartz"></img>
        <img className="frontpgimg" src={photo2} alt="amethyst"></img>
        <img className="frontpgimg" src={photo3} alt="quartz"></img>
        <img className="frontpgimg" src={photo4} alt="jade"></img>
      </div>
      <h1>Collections:</h1>
      <div className="row2">
        <img className="frontpgimg" src={photo5} alt="collection"></img>
        <img className="frontpgimg" src={photo6} alt="collection2"></img>
        <img className="frontpgimg" src={photo7} alt="quartz2"></img>
        <img className="frontpgimg" src={photo8} alt="crystal"></img>
      </div>
    </div>
  );
};

export default Home;
