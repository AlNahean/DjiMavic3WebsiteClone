import React, { useLayoutEffect } from "react";

import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value
    lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return <div>useSmoothScroll</div>;
};

export default useSmoothScroll;
