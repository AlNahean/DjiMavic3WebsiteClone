import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import "./Navbar.scss";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <div className="proxy-header"></div>
      <div className="container-fluid header-container  fixed-top">
        <div className=" container d-flex justify-content-between align-items-center h-100 header-wrapper position-relative">
          <div>Dji Mavic 3</div>
          <div
            className="d-md-none h-100 reacticon-icon center"
            onClick={() => {
              handleMenuClick();
            }}
          >
            <RiMenu2Fill />
          </div>
          <div className=" d-none d-md-block">
            <div className=" nav-section d-flex h-100 align-items-center ">
              <div>Specs</div>
              <div>Compare</div>
              <div>Video</div>
              <div>Download</div>
              <div>FAQ</div>
              <div className=" btn btn-primary border-5">Buy Now</div>
            </div>
          </div>
        </div>

        {showNav && (
          <div className=" w-100 menu-nav-full">
            <div className="d-md-none w-100">
              <div className=" nav-section d-flex flex-column h-100 align-items-start justify-content-center w-100">
                <div className=" nav-item">Specs</div>
                <div className=" nav-item">Compare</div>
                <div className=" nav-item">Video</div>
                <div className=" nav-item">Download</div>
                <div className=" nav-item">FAQ</div>
                <div className=" nav-item-btn btn btn-primary border-5">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
