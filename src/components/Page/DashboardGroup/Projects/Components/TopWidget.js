import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";

const TopWidget = ({ item }) => {
  const { id, icon, number, title, positive } = item;
  return (
    <>
      <div className=" col-12 col-sm-6 col-lg-3 " key={id}>
        <div className=" card mb-3">
          <div className=" card-body center flex-column">
            <div className="icon">{icon}</div>
            <h1 className=" text-primary">
              <span>{number}</span>
              <span>{positive && "%"}</span>
            </h1>
            <p className=" mb-0 text-muted">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopWidget;
