import React from "react";

import "./LastSection.scss";
const LastSection = () => {
  return (
    <div className=" last-section">
      <div
        className=" last-section-wrapper container-fluid d-flex justify-content-center align-items-start flex-column"
        style={{
          backgroundImage:
            "url(./dji-official/dps/543042ff1c6dd24f943135decb521af0.jpg)",
        }}
      >
        <div className=" container">
          <h1 className=" text-capitalize">DJI MAVIC 3</h1>
          <h4 className=" mb-4">Imaging Above Everything</h4>
          <h5 className=" mb-4">
            from <span className=" h3 ">USD 2,300</span>
          </h5>
          <div className=" btn btn-primary">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
