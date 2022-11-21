import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);
let a = 0;

const Test = ({ target }) => {
  const el = useRef(null);
  const target2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        target2.current,
        { x: 200, y: 400 },
        {
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: target,
            pin: target2.current,
            scrub: true,
            start: "0%",
            end: "100%",
            markers: true,
            onUpdate: (self) => {
              console.log(Math.round(self.progress * 100));
              a = Math.round(self.progress * 100);
            },
          },
        }
      );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} style={{ zIndex: "100000", height: "100vh", width: "100%" }}>
      <div ref={target2}>
        Test {target} {a}
      </div>
    </div>
  );
};

export default Test;
