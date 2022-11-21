import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./Section11.scss";
import DroneParalax from "./SubComponent/DroneParalax/DroneParalax";

gsap.registerPlugin(scrollTrigger);

const Section11 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} className=" section-11 ">
      <div className=" section-11-wrapper container">
        <div className=" section-11-top">
          <h1 className=" mb-5">Don't Just Fly. Enjoy.</h1>
          <h4 className=" mb-3">APAS 5.0</h4>
          <h5 className=" mb-4 text-muted">
            Mavic 3 makes flight more fun than ever with recording that is no
            longer interrupted by obstacles along the way. When flying, Mavic 3
            continually senses objects in all directions and bypasses them
            quickly and smoothly.
          </h5>
        </div>
      </div>
      <DroneParalax />
    </div>
  );
};

export default Section11;
