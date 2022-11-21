import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section7.scss";
import HrScroll from "./SubComponent/HrScroll/HrScroll";

gsap.registerPlugin(scrollTrigger);

const Section7 = () => {
  const el = useRef(null);
  const [swapImage, setSwapImage] = useState(false);

  const handleSwitch = (progress) => {
    if (progress > 0.1) {
      setSwapImage(true);
    } else {
      setSwapImage(false);
    }
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".camera-image-container", {
        scrollTrigger: {
          trigger: el.current,
          // pin: true,
          start: "top center",
          end: "50%",
          // markers: true,
          scrub: true,
          onUpdate: (self) => {
            handleSwitch(self.progress);
          },
        },
      });
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className=" section-7 container-fluid position-relative" ref={el}>
      <div className=" section-7-wrapper">
        <div className=" drone-camera-main">
          <div className=" w-100 text-center">
            <h1 className=" mb-0">Tale Camera</h1>
          </div>
          <div className=" camera-image-container d-flex justify-content-center">
            {swapImage ? (
              <img
                src="./dji-official/dps/cba26d8025e18f101361c4a6099d0ad4.jpg"
                className="w-auto"
              />
            ) : (
              <img
                src="./dji-official/dps/3c453022368f544431d95684d42b9648.jpg"
                className="w-auto"
              />
            )}
          </div>
        </div>

        <HrScroll />
      </div>
    </div>
  );
};

export default Section7;
