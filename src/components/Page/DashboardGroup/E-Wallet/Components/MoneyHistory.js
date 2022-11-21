import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { IoMdSwap } from "react-icons/io";

const MoneyHistory = () => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Money History")}
        <div className=" card-body">
          <div
            className=" d-flex justify-content-between align-items-center  p-3   mb-3 ct-hover"
            style={{ border: "1px solid #898f9447" }}
          >
            <div>
              <h5 className=" text-muted font-monospace">
                <small>Income</small>
              </h5>
              <h4 className=" text-primary">${separator(273854)} </h4>
            </div>
            <div
              className=" bg-primary avatar-sm center rounded-circle"
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              <ImArrowUp />
            </div>
          </div>
          <div
            className=" d-flex justify-content-between align-items-center  p-3   mb-3 ct-hover"
            style={{ border: "1px solid #898f9447" }}
          >
            <div>
              <h5 className=" text-muted font-monospace">
                <small>Expences</small>
              </h5>
              <h4 className=" text-danger">${separator(52738)} </h4>
            </div>
            <div
              className=" bg-danger avatar-sm center rounded-circle"
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              <ImArrowDown />
            </div>
          </div>
          <div
            className=" d-flex justify-content-between align-items-center  p-3  mb-3 ct-hover"
            style={{ border: "1px solid #898f9447" }}
          >
            <div>
              <h5 className=" text-muted font-monospace">
                <small>Transfer</small>
              </h5>
              <h4 className=" text-success">${separator(92738)} </h4>
            </div>
            <div
              className=" bg-success avatar-sm center rounded-circle"
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              <IoMdSwap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoneyHistory;
