import React from "react";
import Navbar from "../../Shared/NavBar/Navbar";
import EWalletMainContent from "./Components/EWalletMainContent";

const EWallet = () => {
  return (
    <div className=" main-wrapper">
      <Navbar />
      <EWalletMainContent />
    </div>
  );
};

export default EWallet;
