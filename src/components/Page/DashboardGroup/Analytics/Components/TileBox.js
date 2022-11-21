import React from "react";
// import { FaRegWindowRestore } from "react-icons/fa";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";

const TileBox = ({ id, title, icon, userNo, progress }) => {
  const getState = (progress) => {
    let f = Math.sign(progress);
    if (f === 1) {
      return true;
    } else if (f === -1) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className=" card tile-box">
      <div className="card-body">
        <div className=" float-end icon ">{icon}</div>
        <h6>
          <small className=" text-uppercase ">{title}</small>
        </h6>
        <h2 className=" text-primary">{userNo}</h2>

        <p className="mb-0 text-muted">
          <span style={{ color: `${getState(progress) ? "green" : "red"}` }}>
            <span>
              {getState(progress) ? (
                <HiOutlineArrowNarrowUp />
              ) : (
                <HiOutlineArrowNarrowDown />
              )}
            </span>
            <span> {progress}%</span>
          </span>
          <span className="text-muted ps-2">Since last month</span>
        </p>
      </div>
    </div>
  );
};

export default TileBox;
