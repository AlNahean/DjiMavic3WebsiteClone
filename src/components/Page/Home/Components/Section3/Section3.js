import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./Section3.scss";

gsap.registerPlugin(scrollTrigger);

const Section3 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-3 container-fluid  position-relative" ref={el}>
      <div className=" section-3-motto-wrapper">
        <h1>Two Cameras, </h1> <h1>Unlimited Possibilities</h1>
      </div>
    </div>
  );
};

export default Section3;
