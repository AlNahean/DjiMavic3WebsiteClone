import React from "react";
import { useGlobalContext } from "../../../Context";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import MainNavbar from "../MainNavBar/MainNavbar";

const Navbar = () => {
  const { showLeftNav } = useGlobalContext();
  return (
    <>
      {/* Styles @leftNavbar.scss */}
      {showLeftNav && (
        <div className=" dummy-left-nav" style={{ height: "700px" }}></div>
      )}
      <div className=" fixed-navbar-wrapper" style={{ zIndex: 1000 }}>
        <LeftNavBar />
        <MainNavbar style={{ zIndex: 1000 }} />
      </div>
    </>
  );
};

export default Navbar;
