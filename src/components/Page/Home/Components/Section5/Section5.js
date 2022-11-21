import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section5.scss";
import Box from "./SubComponents/Box/Box";

gsap.registerPlugin(scrollTrigger);

const BoxInfo = [
  {
    id: 1,
    title:
      "Create professional imagery with the Hasselblad L2D-20c camera system.",
    src: "./dji-official/dps/5ec261fc419a1217d3c78559172081b8.jpg",
    info: "Cappadocia (2021), by Timelab Pro. Shot on Mavic 3 ©",
  },
  {
    id: 2,
    title:
      "Create professional imagery with the Hasselblad L2D-20c camera system.",
    src: "./dji-official/dps/09d717b96249f3d65550220b726da5fa.jpg",
    info: "Cappadocia (2021), by Timelab Pro. Shot on Mavic 3 ©",
  },
  {
    id: 3,
    title:
      "Create professional imagery with the Hasselblad L2D-20c camera system.",
    src: "./dji-official/dps/d978a27c6e12254172fe9f8901ea855c.jpg",
    info: "Cappadocia (2021), by Timelab Pro. Shot on Mavic 3 ©",
  },
];

const Section5 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, el);
    gsap.fromTo(
      ".section-5-main-container",
      { xPercent: 0 },
      {
        xPercent: -200,
        scrollTrigger: {
          trigger: el.current,
          pin: ".section-5-wrapper",
          start: "0%",
          end: "300%",
          // markers: true,
          scrub: true,
          //   snap: 1 / 3,
        },
      }
    );
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-5 position-relative" ref={el}>
      <div className=" section-5-wrapper ">
        <div className=" section-5-title">
          <h1 className=" mb-0">Results that Speak</h1>
        </div>
        <div className=" position-relative">
          <div className=" section-5-main-wrapper">
            <div className=" section-5-main-container">
              {BoxInfo.map((item) => {
                return <Box key={item.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
