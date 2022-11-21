import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import ProfileMainContent from "./Components/ProfileMainContent";

const Profile = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <ProfileMainContent />
    </div>
  );
};

export default Profile;
