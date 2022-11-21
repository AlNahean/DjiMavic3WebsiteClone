import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
const DummyCard = () => {
  return (
    <>
      <div className=" card mb-3 ">
        {getCardHeader("asas")}
        <div className=" card-body">a</div>
      </div>
    </>
  );
};

export default DummyCard;
