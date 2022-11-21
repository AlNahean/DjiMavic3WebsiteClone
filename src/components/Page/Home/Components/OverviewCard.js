import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  HiOutlineArrowNarrowUp,
  HiOutlineArrowNarrowDown,
} from "react-icons/hi";
const OverviewCard = ({ title, customersNo, progress, icon, isDollar }) => {
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
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <div className="card h-100 overview-card">
      <div className="card-body" style={{ padding: "1.5rem" }}>
        <h5 className="float-end float-icon icon">{icon}</h5>
        <h5 className="text-muted fw-normal">{title}</h5>
        <h3 className="mt-3 mb-3 text-primary">
          {isDollar && "$"} {separator(customersNo)}
        </h3>
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

export default OverviewCard;
