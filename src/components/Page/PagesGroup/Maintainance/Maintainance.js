import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import MaintainanceMainContent from "./Components/MaintainanceMainContent";

const Maintainance = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <MaintainanceMainContent />
    </div>
  );
};

export default Maintainance;
