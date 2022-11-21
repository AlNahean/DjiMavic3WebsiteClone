import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./CameraWebp.scss";
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
const CameraWebp = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const frameCount = 147;
    const djiFrameCount = 75;
    const currentFrame = (index) => {
      let num = Math.round((frameCount / 100) * index);
      let djiNum = Math.round((djiFrameCount / 100) * index);
      let t =
        "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_hasselblad_webp/0.webp";
      let link2 = `./dji/${djiNum}.webp`;
      link2 = `./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_hasselblad_webp/${djiNum}.webp`;
      let link = `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;
      console.log(num, "aa", link);

      return link2;
    };
    let draw = (i) => {
      console.log("draw");
      const img = new Image();
      img.src = currentFrame(i);
      console.log(img);
      img.onload = () => {
        console.log("loaded");
        // alert("aa");
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
      tl.fromTo(".camera-webp-title-container", { opacity: 0 }, { opacity: 0 });
      tl.fromTo(".camera-webp-title-container", { opacity: 0 }, { opacity: 1 });
      tl.fromTo(
        ".camera-webp-title-container",
        {
          opacity: 1,
          x: 0,
          scale: 2.4,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
        }
      );
      tl.fromTo(
        ".camera-webp-title-container",
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
    <div className=" section-1-camera-wrapper" ref={el}>
      <canvas id="CameraWebp-Canvas " className=" pin-target" ref={canvasEl} />
      <div className=" camera-webp-title-wrapper">
        <div className=" camera-webp-title-container">
          <h1 className=" camera-webp-title">4/3 Cmos</h1>
          <h1 className=" camera-webp-title">Hasseleblad Camera</h1>
        </div>
      </div>
    </div>
  );
};

export default CameraWebp;
