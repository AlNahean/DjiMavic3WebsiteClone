import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./5kWebp.scss";
gsap.registerPlugin(scrollTrigger);
function drawImageScaled(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
const FiveKWebp = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const djiFrameCount = 89;
    const currentFrame = (index) => {
      let djiNum = Math.round((djiFrameCount / 100) * index);
      let t =
        "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/0.webp";
      let link = `./dji/${djiNum}.webp`;
      link = `./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/${djiNum}.webp`;

      return link;
    };
    let draw = (i) => {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        let canvasCTX = canvasEl.current.getContext("2d");
        canvasEl.current.height = window.innerHeight;

        canvasEl.current.width = window.innerWidth;
        drawImageScaled(img, canvasCTX);
      };
    };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "200%",
          // markers: true,
          scrub: true,
          pin: el.current,
          //   pinSpacer: false,
          onUpdate: (self) => {
            console.log(self.progress);
            let percent = Math.round(self.progress * 100);
            draw(percent);
          },
        },
      });
      tl.fromTo(
        ".fiveKWebp-title-container",
        {
          opacity: 0,
        },
        {
          opacity: 0,
        }
      );
      tl.fromTo(
        ".fiveKWebp-title-container",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
      tl.fromTo(
        ".fiveKWebp-title-container",
        {
          scale: 3,
        },
        {
          scale: 1,
        }
      );
      tl.fromTo(
        ".fiveKWebp-title-container",
        {
          opacity: 1,
        },
        {
          opacity: 0,

          onComplete: () => {
            console.log(window.screenTop, window.screenY);
            window.scrollBy(0, window.innerHeight);
          },
        }
      );
      draw(0);
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-1-5kwebp-wrapper" ref={el}>
      <canvas id="hero-lightpass " className=" pin-target" ref={canvasEl} />
      <div className=" fiveKWebp-title-wrapper">
        <div className=" fiveKWebp-title-container">
          <h1 className=" fiveKWebp-title"></h1>
          <h1 className=" fiveKWebp-title">Apple Pro Res</h1>
        </div>
      </div>
    </div>
  );
};

export default FiveKWebp;
