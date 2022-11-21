import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section9.scss";

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

const Section9 = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);
  useLayoutEffect(() => {
    const djiFrameCount = 88;
    const currentFrame = (index) => {
      let djiNum = Math.round((djiFrameCount / 100) * index);
      let t =
        "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_sensor_webp/0.webp";
      let link = `./dji/${djiNum}.webp`;
      link = `./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_sensor_webp/${djiNum}.webp`;

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
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-9-drone-image",
          pin: true,
          start: "0%",
          end: "200%",
          // markers: true,
          pinSpacing: true,
          scrub: true,
          onUpdate: (self) => {
            console.log("a");
            let percent = Math.round(self.progress * 100);
            draw(percent);
          },
        },
      });
      draw(1);
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div ref={el} className=" section-9">
      <div className=" section-9-wrapper container">
        <div className=" section-9-info">
          <h1 className=" mb-5">Enhanced Safety</h1>
          <h3>Omnidirectional Obstacle Sensing</h3>
          <h5 className="">
            Mavic 3 helps you to enjoy collision-free flight so you can focus on
            getting the best shots possible. Multiple wide-angle vision sensors
            work seamlessly with a high-performance vision computing engine to
            sense obstacles in all directions precisely and plan a safe flight
            route that avoids them. [4]
          </h5>
        </div>
        <div className=" section-9-drone-image container">
          <canvas className=" canvas" ref={canvasEl}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Section9;
