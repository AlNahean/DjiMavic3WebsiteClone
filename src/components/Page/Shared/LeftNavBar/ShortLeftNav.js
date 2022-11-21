import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const ShortLeftNav = () => {
  return (
    <>
      <div className="short-left-nav" style={{ display: "none" }}>
        <div className="card h-100 w-100">
          <Link
            to={"/"}
            className="card-header"
            style={{
              height: "70px",
              textDecoration: "none",
              backgroundColor: "black",
            }}
          >
            <img src="./images/logo/logo_sm_dark.png" alt="" />
          </Link>
          <div className="card-body">
            <ul className=" list-unstyled">
              <li className="">
                <AiFillHome className="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortLeftNav;
