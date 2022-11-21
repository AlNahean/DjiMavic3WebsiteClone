import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import TimelineMainContent from "./Components/TimelineMainContent";

const Timeline = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <TimelineMainContent />
    </div>
  );
};

export default Timeline;
