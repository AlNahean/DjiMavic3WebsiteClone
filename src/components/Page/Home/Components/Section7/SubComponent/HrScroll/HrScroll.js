import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import Box from "./Box";

import "./HrScroll.scss";
import useOnScreen from "../../../../../../Hooks/useOnScroll";

gsap.registerPlugin(scrollTrigger);

const boxInfo = [
  {
    id: 1,
    src: "./dji-official/dps/45576cc5d264e8e51c21d995747573ea.jpg",
    header: "Explore Mode",
    motto:
      "Activate Explore mode to unlock Mavic 3's second camera – a unique tele camera that lets you effortlessly scout and plan your shots.",
    bottom:
      "When scenes or subjects are far away, use the tele camera to zoom in and save time, or record from a distance without disturbing the subject.",
  },
  {
    id: 2,
    src: "./dji-official/dps/849232449ea5acde6dc341dea4dfa9e6.jpg",

    header: "Tele Camera Pro Mode",
    motto:
      "With Pro mode, the tele camera of Mavic 3 supports manual parameter adjustments and RAW photos.",
    bottom:
      "The tele camera offers unique camera language to make your footage more expressive and dynamic.",
  },
];

const HrScroll = () => {
  const el = useRef(null);
  const onScreen = useOnScreen(el);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          pin: true,
          start: "top top",
          end: "200%",
          // markers: true,
          scrub: true,
        },
      });
      tl.fromTo(".sc5-hr-scroll-container", { xPercent: -50 }, { xPercent: 0 });
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} className=" sc5-hr-scroll">
      <div className={` sc5-hr-scroll-container `}>
        {boxInfo.map((item) => {
          return (
            <Box key={item.id} item={item} />
            // <div
            //   key={item.id}
            //   className={` hr-scroll-box container ${
            //     onScreen & "sc5-box-activ"
            //   }`}
            // >
            //   <div>
            //     <h2>{item.header}</h2>
            //     <h5>{item.motto}</h5>
            //   </div>
            //   <div className=" h-100 w-100">
            //     <img src={item.src} alt="" srcset="" />
            //   </div>
            //   <div>
            //     <h5>{item.bottom}</h5>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default HrScroll;
