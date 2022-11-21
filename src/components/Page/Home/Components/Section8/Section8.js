import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section8.scss";

gsap.registerPlugin(scrollTrigger);

const Section8 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "-120%",
          end: "60%",
          // markers: true,
          onUpdate: () => {
            console.log("aaaa");
          },
          scrub: true,
        },
      });
      tl.fromTo(".parallax-top", { y: 100 }, { y: 0 });
      tl.fromTo(".parallax-text", { y: 400 }, { y: 0 }, "<");

      tl.fromTo(".parallax-bg-2", { y: 0 }, { y: 100 }, "<");
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} className=" section-8 ">
      <div className=" mountain-parallax">
        <img
          src="./dji-official/dps/acf1c3920f6ebde9e8e987b6c5163c2d.png"
          className=" parallax-bg parallax-item"
        />
        <div className=" parallax-item parallax-text">
          <h1>Total Flight Performance</h1>
        </div>
        <img
          src="./dji-official/dps/12d74b41d4af2d708714b5b9f60a6da2.png"
          className=" parallax-bg-2 parallax-item"
        />

        <img
          src="./dji-official/dps/ebd2c8e9cbb28f8997176ceafd90025c.png"
          className=" parallax-top parallax-item"
        />
      </div>
    </div>
  );
};

export default Section8;
