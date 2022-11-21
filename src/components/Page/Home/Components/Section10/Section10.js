import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./Section10.scss";
import RTH from "./SubComponent/RTH/RTH";

gsap.registerPlugin(scrollTrigger);

let sectionData = [
  {
    id: 1,
    text: "Always end on a high note with Advanced RTH. This updated auto-return function enables Mavic 3 to automatically determine the optimal route back to its home point and execute it quickly.",
    src: "./dji-official/reactor/assets/_next/static/videos/a4eb7f97-a4d0-4f41-891c-31de6cf06a77.mp4",
    orderClass: "rth-1",
  },
  {
    id: 2,
    text: "Mavic 3 can fly to a designated altitude and then find a safe and efficient route back to its home point, combining the advantages of Advanced RTH and traditional RTH, allowing users to choose the best option according to their environment.",
    src: "./dji-official/reactor/assets/_next/static/videos/6b065628-89a2-4243-ba8d-dfe79dd89da2.webm",
    orderClass: "rth-2",
  },
];

const Section10 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className=" section-10 " ref={el}>
      <div className=" section-10-wrapper container">
        <h1>Advanced RTH</h1>
        <div className=" rth-container">
          {sectionData.map((item) => {
            return <RTH item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section10;
