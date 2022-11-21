import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section2.scss";

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

const Section2 = () => {
  const el = useRef(null);
  const canvasEl = useRef(null);

  useLayoutEffect(() => {
    const djiFrameCount = 45;
    const currentFrame = (index) => {
      let djiNum = Math.round((djiFrameCount / 100) * index);
      let a =
        "./../../../../../../public/dji-official/assets/uploads/p/d5584155-bbca-4e94-a7a1-c90c9d95777b/frames/pc_overview3/0.jpg";
      let t =
        "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/0.webp";
      let link = `./dji/${djiNum}.webp`;
      link = `./dji-official/assets/uploads/p/d5584155-bbca-4e94-a7a1-c90c9d95777b/frames/pc_overview3/${djiNum}.jpg`;

      return link;
    };
    let draw = (i) => {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        let canvasCTX = canvasEl.current.getContext("2d");
        let height = canvasEl.current.offsetHeight;
        let parentHeight = canvasEl.current.parentNode.offsetHeight;
        console.log(height, "aaaaa");
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
          pin: ".section-2-container",
          //   pinSpacer: false,
          onUpdate: (self) => {
            console.log(self.progress);
            let percent = Math.round(self.progress * 100);
            draw(percent);
          },
        },
      });
      // tl.fromTo(
      //   ".fiveKWebp-title-container",
      //   {
      //     opacity: 1,
      //     x: 0,
      //     scale: 3,
      //     scrollTrigger: {
      //       toggleClass: "show",
      //     },
      //   },
      //   {
      //     opacity: 1,
      //     x: 0,
      //     scale: 1,

      //     onComplete: () => {
      //       console.log(window.screenTop, window.screenY);
      //       window.scrollBy(0, window.innerHeight);
      //     },
      //   }
      // );
      draw(0);
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-2 contsiner-fluid position-relative" ref={el}>
      <div className=" section-2-container">
        <div>
          <canvas className="drone-overview" ref={canvasEl}></canvas>
        </div>
        <div>
          <h4 className=" section2-text">
            Capture stunning imagery with a legendary Hasselblad camera and
            enjoy smooth flight with omnidirectional obstacle sensing. Every
            improvement on Mavic 3 sets a higher standard for aerial
            photography. Fly with Mavic 3 and discover imaging above everything.
          </h4>
        </div>
        <div>
          <div className=" gradiant-rounded-btn  ">
            <h6 className=" pt-3 pb-3 ps-5 pe-5 gradiant-bg-clip mb-0 cursor-pointer">
              Watch Video
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
