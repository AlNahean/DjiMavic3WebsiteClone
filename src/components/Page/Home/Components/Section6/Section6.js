import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section6.scss";
gsap.registerPlugin(scrollTrigger);

const Section6 = () => {
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          pin: true,
          start: "0%",
          end: "300%",
          // markers: true,
          pinSpacing: true,
          scrub: true,
        },
      });
      gsap.set(".section-6-image", { scale: 2.4 });
      tl.fromTo(".section-6-texts", { yPercent: 0 }, { yPercent: -100 });
      tl.fromTo(".section-6-overlay", { opacity: 1 }, { opacity: 0 });
      tl.to(".section-6-image", {
        scale: 1,
      });
      // tl.fromTo(".motto-text", { opacity: 0, opacity: 1 }, "<");
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} className=" section-6">
      <div className=" section-6-wrapper">
        <div className=" content h-100 w-100">
          <div className=" w-100 section-6-texts ">
            <div className=" section-6-texts-wrapper container">
              <h3 className=" mb-5 ">Professional Video Specifications</h3>
              <h1 className=" mb-5 gradiant-bg-clip fw-bold ">
                5.1K Video Recording
              </h1>
              <h1 className=" mb-5 gradiant-bg-clip">DCI 4K/120fps</h1>
              <h1 className=" mb-5 gradiant-bg-clip ">
                Supports Apple ProRes[2]
              </h1>
              <h1 className=" mb-5 gradiant-bg-clip">10-bit D-Log</h1>
              <h1 className=" mb-5 gradiant-bg-clip">HLG</h1>
              <h1 className=" mb-5 gradiant-bg-clip">Night Shots Video</h1>

              <h5 className=" mb-5">
                <span className=" gradiant-bg-clip fw-bold">Mavic 3</span> not
                only records aerial videos at high resolutions and framerates,
                it also captures up to 1 billion colors with a 10-bit D-Log
                color profile. This delivers more natural gradations of sky
                coloring with more details retained for greater flexibility in
                post-production.
              </h5>

              <h5 className=" mb-5">
                <span className=" gradiant-bg-clip fw-bold">Mavic 3</span> Cine
                provides extensive options for professional creators. It
                supports Apple ProRes 422 HQ, Apple ProRes 422, and Apple ProRes
                422 LT encoding with a maximum data rate of 3,772Mbps. It also
                comes with a built-in 1TB SSD [3] and a 10Gbps lightspeed data
                cable to further facilitate professional filming and creation.
              </h5>
            </div>
          </div>
          <div className=" h-100 w-100 section-6-overlay"></div>
          <div className=" h-100 w-100 section-6-image">
            <div className=" section-6-image-container container d-flex flex-column align-items-center">
              <img
                className=" w-75 h-auto"
                src="./dji-official/dps/a3717ca33fede77d5cd15483f781f9c4.jpg"
                alt=""
                srcset=""
              />
              <p className=" w-75 pt-2 motto-text text-muted">
                Nathan McBride. Shot on Mavic 3 ©
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
