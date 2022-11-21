import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./RTH.scss";

gsap.registerPlugin(scrollTrigger);

const RTH = ({ item }) => {
  console.log(item);
  const el = useRef(null);
  const videoRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.fromTo(
        videoRef.current,
        { currentTime: 0 },
        {
          // currentTime: videoRef.current.duration || 3,
          scrollTrigger: {
            trigger: el.current,
            pin: true,
            start: "top top",
            end: "100%",
            // markers: true,
            // pinSpacing: true,
            // scrub: true,
            onEnter: () => {
              videoRef.current.play();
              // console.log("enter");
            },
            onEnterBack: () => {
              videoRef.current.play();
              // console.log("enter back");
            },

            // onLeave: () => {
            //   videoRef.current.pause();
            //   console.log("leave");
            // },
            // onLeaveBack: () => {
            //   videoRef.current.play();
            //   console.log("leave back");
            // },
          },
        }
      );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el}>
      <div className={` row ${item.orderClass} `}>
        <div className=" col-12 col-md-6 rth-video">
          <video
            ref={videoRef}
            // className=" h-100 w-100"
            // autoPlay
            // loop
            muted
            src={item.src}
          ></video>
        </div>
        <div className=" col-12 col-md-6 d-flex align-items-center rth-info">
          <h4>{item.text}</h4>
        </div>
      </div>
    </div>
  );
};

export default RTH;
