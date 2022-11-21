import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./DroneImage.scss";
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
const DroneImage = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const djiFrameCount = 3;
    const currentFrame = (index) => {
      let djiNum = Math.round((djiFrameCount / 100) * index);
      let t =
        "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_sensor_webp/0.webp";
      let link = `./dji/${djiNum}.webp`;
      link = `./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/drone_image/${djiNum}.jpg`;

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
          end: "100%",
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
        ".drone-image-canvas",
        {
          opacity: 1,
          x: 0,
          scale: 1.7,
          scrollTrigger: {
            toggleClass: "show",
          },
        },
        {
          opacity: 1,
          x: 0,
          scale: 2.7,
        }
      );
      tl.fromTo(
        ".drone-image-title-container",
        {
          opacity: 0,
        },
        {
          opacity: 0,
        },
        "<"
      );
      tl.fromTo(
        ".drone-image-title-container",
        {
          scale: 3,
        },
        {
          scale: 1,
        },
        "<"
      );
      tl.fromTo(
        ".drone-image-title-container",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
        "<"
      );
      draw(0);
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-1-drone-image-wrapper" ref={el}>
      <canvas
        id="drone-image-canvas "
        className=" pin-target drone-image-canvas"
        ref={canvasEl}
      />

      <div className=" drone-image-title-wrapper">
        <div className=" drone-image-title-container">
          <h1 className=" drone-image-title">Omnidirectional</h1>
          <h1 className=" drone-image-title">Object Detection</h1>
        </div>
      </div>
    </div>
  );
};

export default DroneImage;
