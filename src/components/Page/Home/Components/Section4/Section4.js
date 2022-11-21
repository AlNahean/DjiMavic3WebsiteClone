import React from "react";
import "./Section4.scss";

const Section4 = () => {
  return (
    <div className=" section-4 container-fluid position-relative">
      <div className=" container">
        <div className=" w-100 d-flex justify-content-center">
          <h1 className=" gradiant-bg-clip mb-5">Hasselblad L2D-20c Camera</h1>
        </div>
        <div
          className=" section-4-drone-image"
          style={{
            backgroundImage:
              "url('./dji-official/dps/253b438fee2a593a57cf74f40ee953a8.jpg')",
          }}
        ></div>
        <div className=" section-4-drone-info-wrapper">
          <div className=" drone-info-main mb-5 mt-5">
            <h1 className=" mb-3">Old Legend, New Chapter</h1>
            <h5>
              The iconic Swedish brand Hasselblad designed and built the L2D-20c
              aerial camera just for DJI Mavic 3, embedding a professional-grade
              4/3 CMOS in an unbelievably compact space. Rigorous Hasselblad
              standards are applied to both hardware performance and software
              algorithms, bringing imaging quality to an entirely new level.
            </h5>
          </div>
          <div className=" drone-info-specs">
            <div className=" d-flex flex-column">
              <div className="row">
                <div className=" col-12 col-md-6 mb-5">
                  <h1 className=" gradiant-bg-clip">20MP</h1>
                  <h4>Photos</h4>
                </div>
                <div className=" col-12 col-md-6 mb-5">
                  <h1 className=" gradiant-bg-clip">12.8 Stops</h1>
                  <h4>Dynamic Range</h4>
                </div>
                <div className=" col-12 col-md-6 mb-5">
                  <h1 className="gradiant-bg-clip">f/2.8-f/11</h1>
                  <h4>Adjustable Aperture</h4>
                </div>
                <div className=" col-12 col-md-6 mb-5">
                  <h1 className=" gradiant-bg-clip">24mm</h1>
                  <h4>Equivalent Focal Length</h4>
                </div>

                <div className=" col-12 mb-5">
                  <h1 className="gradiant-bg-clip">VDAF</h1>
                  <h4>Vision Detection Auto Focus Technology</h4>
                </div>
                <div className=" col-12 mb-5 ">
                  <div className="btn p-0">
                    <div className=" gradiant-rounded-btn">
                      <div className="gradiant-bg-clip pt-2 pb-2 ps-5 pe-5">
                        Learn more about HNCS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" drone-color-solution-wrapper">
          <div className=" color-solution-title w-100 d-flex justify-content-start">
            <h2 className=" mb-3">Hasselblad Natural Colour Solution</h2>
          </div>
          <div className=" color-solution-main-image">
            <img
              src="https://dji-official-fe.djicdn.com/dps/714ca46ea98c72ae7073a1238e10a34b.jpg"
              alt="color-solution"
              className=" w-100"
            />
            <p className=" text-muted ">
              Dolphins (2021), by Paul Nicklen. Shot on Mavic 3 ©
            </p>
          </div>

          <div className=" color-solution-more-info">
            <p>
              Mavic 3 features the Hasselblad Natural Colour Solution, the
              culmination of decades of photographic experience that delivers
              vivid, natural colors with the simple press of the shutter.
            </p>

            <div className=" btn p-0">
              <div className=" gradiant-rounded-btn">
                <div className="gradiant-bg-clip pt-2 pb-2 ps-5 pe-5">
                  Learn more about HNCS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
