import React, { useRef } from "react";
import useOnScreen from "../../../../../../Hooks/useOnScroll";

const Box = ({ item }) => {
  const el = useRef(null);
  const onScreen = useOnScreen(el);
  return (
    <div
      ref={el}
      key={item.id}
      className={` hr-scroll-box container ${onScreen ? "sc5-box-active" : ""}`}
    >
      <div>
        <h2>{item.header}</h2>
        <h5>{item.motto}</h5>
      </div>
      <div className=" h-100 w-100">
        <img src={item.src} alt="" srcset="" />
      </div>
      <div className=" bottom">
        <h5>{item.bottom}</h5>
      </div>
    </div>
  );
};

export default Box;
