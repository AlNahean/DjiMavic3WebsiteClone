import React from "react";
import { useGlobalContext } from "../../../Context";
import FullLeftNav from "./FullLeftNav";

const FixedLeftNav = ({ showLeftNav, setShowLeftNav }) => {
  const {} = useGlobalContext();
  return (
    <>
      <div className="left-fixed-nav-wrapper">
        <div
          className="left-fixed-nav-canceler"
          onClick={() => {
            // cancelTopNavDropDown();// from context later removed
            setShowLeftNav(false);
          }}
        ></div>
        <div className="left-fixed-nav-container">
          <FullLeftNav />
        </div>
      </div>
    </>
  );
};

export default FixedLeftNav;
