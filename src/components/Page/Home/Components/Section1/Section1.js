import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./Section1Style.scss";
import Test from "./Sub Components/Test";
import Test2 from "./Sub Components/Test2";
import DroneVideo from "./Sub Components/DroneVideo/DroneVideo";
import CameraWebp from "./Sub Components/CameraWebp/CameraWebp";
import FiveKWebp from "./Sub Components/5kWebp/5kWebp";
import DroneImage from "./Sub Components/DroneImage/DroneImage";

gsap.registerPlugin(scrollTrigger);

const Section1 = () => {
  const el = useRef(null);
  const [currentSection, setCurrentSection] = useState("1");
  const lastSection = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-1 container-fluid  position-relative" ref={el}>
      <DroneVideo />

      <CameraWebp />
      <FiveKWebp />

      <DroneImage />
    </div>
  );
};

export default Section1;
