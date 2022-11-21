import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./DroneVideo.scss";
gsap.registerPlugin(scrollTrigger);

const DroneVideo = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    videoRef.current.play();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "200%",
          // markers: true,
          scrub: true,
          pin: true,
        },
      });

      tl.set(".hero-video-motto", { opacity: 0 });
      tl.fromTo(".hero-video-name", { opacity: 1 }, { opacity: 0 }, "0.5");
      tl.to(".hero-video-motto", { opacity: 0 }, "<");
      tl.fromTo(
        ".hero-video-motto",
        {
          opacity: 1,
          x: 0,
          scale: 4,
          scrollTrigger: {
            toggleClass: "show",
          },
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,

          onComplete: () => {
            console.log(window.screenTop, window.screenY);
            window.scrollBy(0, window.innerHeight);
          },
        }
      );
      tl.to(".hero-video-motto", {
        opacity: 0,
      });
      // for black overlay
      tl.fromTo(
        ".hero-overlay",
        { backgroundColor: "rgba(0, 0, 0, 0.3)" },
        { backgroundColor: "rgba(0, 0, 0, 0.8)" }
      );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-1-video-wrapper" ref={el}>
      <div className="my-pinnn">
        <div className=" hero-video">
          <video
            ref={videoRef}
            autoplay
            muted
            src="./dji-official/reactor/assets/_next/static/videos/1c1f9f34-c745-496b-8bdc-00a1f4679d50.webm"
          />
        </div>
        <div className="hero-title-wrapper hero-video-name">
          <h1>Mavic 3</h1>
          <p className=" ">Imagining above Everything</p>
        </div>
        <div className="  hero-video-motto-wrapper center">
          <p className=" hero-video-motto gradiant-bg-clip">
            Seeing Is Beliving
          </p>
        </div>
        <div className=" hero-overlay"></div>
      </div>
    </div>
  );
};

export default DroneVideo;
