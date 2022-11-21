import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import LandingMainContent from "./Components/LandingMainContent";

const Landing = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <LandingMainContent />
    </div>
  );
};

export default Landing;
