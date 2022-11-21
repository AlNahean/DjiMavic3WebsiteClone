import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./DroneParalax.scss";

gsap.registerPlugin(scrollTrigger);

const DroneParalax = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el.current,
        start: "-50%",
        end: "60%",
        // markers: true,
        scrub: true,
      },
    });
    tl.fromTo(".parallax-drone", { x: -100 }, { x: 0 });
    tl.fromTo(".parallax-front", { x: 100 }, { x: -0 }, "<");
    return () => {};
  }, []);
  return (
    <div ref={el} className=" drone-parallax">
      <img
        src="./dji-official/dps/ae16591c58c6bf8231452c5dab98e97e.png"
        className=" parallax-bg parallax-item"
      />
      <img
        src="./dji-official/dps/23af7a52ef16d58ca61ceba044057f2a.png"
        className=" parallax-drone parallax-item"
      />
      <img
        src="./dji-official/dps/0e85d01f53e5da059386176662a4402f.png"
        className=" parallax-front parallax-item"
      />
      {/* <img src="" className=" parallax-bg-2" /> */}
    </div>
  );
};

export default DroneParalax;
