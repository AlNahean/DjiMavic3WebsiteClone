import React from "react";

import { MdContactless, MdCircle } from "react-icons/md";
const CardWidget = () => {
  return (
    <>
      <div className=" card mb-3">
        <div
          className=" card-body"
          style={{
            backgroundColor: "#727cf5",
            backgroundImage:
              "url(https://coderthemes.com/hyper/saas/assets/images/bg-pattern.png)",
          }}
        >
          <div
            className=" d-flex justify-content-between  align-items-center mb-2 "
            style={{ color: "white" }}
          >
            <h5>Nahean</h5>
            <div>
              <MdContactless style={{ height: "2rem", width: "2rem" }} />
            </div>
          </div>
          <div className=" row">
            <div
              className=" col-3"
              style={{ fontSize: "12px", color: "white" }}
            >
              <MdCircle />
              <MdCircle />
              <MdCircle />
              <MdCircle />
            </div>
            <div
              className=" col-3"
              style={{ fontSize: "12px", color: "white" }}
            >
              <MdCircle />
              <MdCircle />
              <MdCircle />
              <MdCircle />
            </div>
            <div
              className=" col-3"
              style={{ fontSize: "12px", color: "white" }}
            >
              <MdCircle />
              <MdCircle />
              <MdCircle />
              <MdCircle />
            </div>
            <div className=" col-3 d-flex" style={{ color: "white" }}>
              <p className=" mb-0 me-1">1</p>
              <p className=" mb-0 me-1">2</p>
              <p className=" mb-0 me-1">3</p>
              <p className=" mb-0 ">4</p>
            </div>
          </div>
          <div className=" row mt-4">
            <div className=" col-3">
              <p className=" text-white-50 mb-1">Expiry Date</p>
              <h5 className=" text-white">10/16</h5>
            </div>
            <div className=" col-3">
              <p className=" text-white-50 mb-1">CCV</p>
              <h5 className=" text-white">10/16</h5>
            </div>
            <div className=" col-6  d-flex justify-content-end align-items-center ">
              <span
                className=" avatar-sm bg-white opacity-25 rounded-circle d-inline-block"
                style={{ height: "3rem", width: "3rem" }}
              ></span>
              <span
                className=" avatar-sm bg-white opacity-25 rounded-circle d-inline-block ms-n3"
                style={{ height: "3rem", width: "3rem", marginLeft: "-1.5rem" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWidget;
