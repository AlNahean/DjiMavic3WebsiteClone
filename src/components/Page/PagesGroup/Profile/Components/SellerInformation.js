import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const SellerInformation = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Seller Information")}
        <div className=" card-body">
          <h5 className=" mb-3">Seller Information</h5>
          <p>
            <small>
              Hye, I’m Michael Franklin residing in this beautiful world. I
              create websites and mobile apps with great UX and UI design. I
              have done work with big companies like Nokia, Google and Yahoo.
              Meet me or Contact me for any queries. One Extra line for filling
              space. Fill as many you want.
            </small>
          </p>

          <hr />

          <p className="">
            <strong className="">Full Name:</strong>
            <span className=" ms-2 ">Nahean Fardous</span>
          </p>
          <p className="">
            <strong className="">Mobile:</strong>
            <span className=" ms-2 ">017********</span>
          </p>
          <p className="">
            <strong className="">Email:</strong>
            <span className=" ms-2 ">nahean.fardous@gmail.com</span>
          </p>
          <p className="">
            <strong className="">Location:</strong>
            <span className=" ms-2 ">Mymensingh, Bangladesh</span>
          </p>
          <p className="">
            <strong className="">Language:</strong>
            <span className=" ms-2 ">Bangla, Endlish </span>
          </p>
          <p className="">
            <strong className="">Everywhere:</strong>
            <span className=" ms-2 "></span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SellerInformation;
