import React from "react";
import FullLeftNav from "./FullLeftNav";
import ShortLeftNav from "./ShortLeftNav";
import FixedLeftNav from "./FixedLeftNav";
import { useGlobalContext } from "../../../Context";

const LeftNavBar = () => {
  const { showLeftNav, setShowLeftNav } = useGlobalContext();
  const leftNavBarContentAction = (e) => {
    // console.log("n");
    // cancelTopNavDropDown();// from context later removed
  };
  return (
    <>
      <div
        className="left-navbar"
        onClick={(e) => {
          leftNavBarContentAction(e);
        }}
      >
        <div className="left-lg-nav-wrapper">
          {showLeftNav ? <FullLeftNav /> : <ShortLeftNav />}
        </div>

        {showLeftNav && (
          <FixedLeftNav
            showLeftNav={showLeftNav}
            setShowLeftNav={setShowLeftNav}
          />
        )}
      </div>
    </>
  );
};

export default LeftNavBar;
