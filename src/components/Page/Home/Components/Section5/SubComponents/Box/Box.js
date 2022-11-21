import React, { useRef, useEffect } from "react";
import useOnScreen from "../../../../../../Hooks/useOnScroll";
import "./Box.scss";
const Box = ({ item }) => {
  const el = useRef(null);
  const onScreen = useOnScreen(el);

  useEffect(() => {
    console.log(onScreen);
    return () => {};
  }, [onScreen]);

  return (
    <div className={` section-5-box box box-1 container `} ref={el}>
      <div
        className={` section-5-box-container container ${
          onScreen ? "active-box" : ""
        }`}
      >
        <div className=" box-image-info">
          <h3 className=" mb-0">{item.title}</h3>
        </div>
        <div
          className=" box-image-container"
          style={{ backgroundImage: `url(${item.src})` }}
        >
          {/* <img src={item.src} className=" box-image" /> */}
        </div>
        <div>
          <p className=" text-muted">{item.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
