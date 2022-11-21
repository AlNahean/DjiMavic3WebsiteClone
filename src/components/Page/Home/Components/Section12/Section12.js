import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import "./Section12.scss";

const commonData = [
  { id: 1, main: "46 Minutes", beta: "Extended Flight Time [5]" },
  { id: 1, main: "15 km", beta: "Video Transmission Range [6]" },
  { id: 1, main: "1080p/60fps", beta: "FHD High-Framerate Live Feed [7]" },
  { id: 1, main: "Extreme-Precision", beta: "Positioning Technology" },
];
const additionalFeatures = [
  {
    id: 1,
    src: "./dji-official/dps/03b9843bbb12b7fce1a57240d732c15a.jpg",
    title: "High-Speed QuickTransfer",
    type: "full",
  },
  {
    id: 2,
    src: "./dji-official/dps/ebafaa696d229561b1ece21512e2e4a3.jpg",
    title: "ActiveTrack 5.0 [1]",
    type: "sort",
  },
  {
    id: 3,
    src: "./dji-official/dps/e3afdedb96f6dd55b00652e6b37ebfac.jpg",
    title: "MasterShots",
    type: "sort",
  },
  {
    id: 4,
    src: "./dji-official/dps/9604617bc1dc01a815994deca4e6807e.jpg",
    title: "Panorama",
    type: "full",
  },
  {
    id: 5,
    src: "./dji-official/dps/440a90b25b49e5c569136ba619d5fb0a.jpg",
    title: "Hyperlapse",
    type: "sort",
  },
  {
    id: 6,
    src: "./dji-official/dps/9cdebe547d7fda2493b765caf30d9c7c.jpg",
    title: "QuickShots",
    type: "sort",
  },
];
const Section12 = () => {
  return (
    <div className=" section-12">
      <div className=" container section-12-wrapper">
        <div className=" row">
          <div className=" col-12 mb-5">
            <h2>O3+ Transmission and Beyond</h2>
          </div>
          {commonData.map((item) => {
            return (
              <div className=" col-12 col-md-6 mb-5">
                <h1 className=" gradiant-bg-clip fw-bold">{item.main}</h1>
                <h4 className="">{item.beta}</h4>
              </div>
            );
          })}

          <div className=" col-12 mb-5 ">
            <div className="btn p-0">
              <div className=" gradiant-rounded-btn">
                <div className="gradiant-bg-clip pt-2 pb-2 ps-5 pe-5">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  sc-12-image-container">
          <img
            src="./dji-official/dps/261f98e0936b7ae02485447716dd18db.jpg"
            alt=""
            srcset=""
          />
        </div>

        <div className=" row">
          <div className=" col-12">
            <h1 className=" mt-5 mb-5">Additional Features</h1>
          </div>
        </div>
        <div className=" row mb-2">
          {additionalFeatures.map((item) => {
            return (
              <div
                key={item.id}
                className={` col-12 ${
                  item.type === "full" ? "" : " col-md-6"
                }  position-relative addition-feature-tile-wrapper p-2`}
              >
                <div
                  className=" h-100 w-100 addition-feature-tile"
                  style={{
                    backgroundImage: `url(${item.src})`,
                  }}
                >
                  <div className=" tile-title m-2">
                    <h3 className=" fw-bold">{item.title} </h3>
                    <div className=" tile-outline-item btn  btn-outline-light rounded-3">
                      Watch
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section12;
