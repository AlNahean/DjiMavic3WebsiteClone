import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(scrollTrigger);

const Test = ({ target }) => {
  const el = useRef(null);
  const target2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // console.log(timeline);
      gsap.fromTo(
        target2.current,
        { x: 100, y: 300 },
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
              console.log(self.progress * 100);
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
      <div ref={target2}>Test {target}</div>
    </div>
  );
};

export default Test;

var y;
// if (y = 0) {

// }
// if ((y = 0)) {
//   y = 10;
// }
console.log(y, "y");
