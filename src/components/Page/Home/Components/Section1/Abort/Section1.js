import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

import "./Section1Style.scss";
import Test from "./Sub Components/Test";
import Test2 from "./Sub Components/Test2";

gsap.registerPlugin(scrollTrigger);

const Section1 = () => {
  const el = useRef(null);
  const [currentSection, setCurrentSection] = useState("1");
  const lastSection = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const contentMarkers = gsap.utils.toArray(".section-1-marker");
      let getCurrentSection = () => {
        console.log("running");
        let newSection;
        let currentScroll = window.scrollY;

        contentMarkers.forEach((marker) => {
          // console.log(marker.offsetTop, "marker");
          if (currentScroll > marker.offsetTop) {
            newSection = marker;
          }
        });
        // console.log(
        //   newSection,
        //   lastSection.current,
        //   newSection?.isSameNode(lastSection.current)
        // );
        if (
          newSection &&
          (!lastSection.current || !newSection?.isSameNode(lastSection.current))
        ) {
          console.log(newSection.getAttribute("data-content-no"));
          setCurrentSection(newSection.getAttribute("data-content-no"));
        }
        lastSection.current = newSection;
      };

      //   tlRef.curremt = gsap.timeline({});
      //   const ST = scrollTrigger.create({
      //     trigger: ".section-1",
      //     start: "top top",
      //     end: "bottom bottom",
      //     onUpdate: getCurrentSection,
      //     pin: ".content",
      //     markers: true,
      //   });

      gsap.to(".content-1", {
        scrollTrigger: {
          trigger: ".marker-1",
          start: "top top",
          end: "100%",
          //   onUpdate: getCurrentSection,
          pin: true,
          markers: true,
          toggleClass: "highZindex",

          pinSpacing: false,
        },
      });
      gsap.to(".my-target-2", {
        scrollTrigger: {
          trigger: ".marker-2",
          start: "top top",
          end: "100%",
          //   onUpdate: getCurrentSection,
          pin: ".content-2",
          markers: true,
          toggleClass: "highZindex",

          // pinSpacing: false,
          onUpdate: (self) => {
            console.log(self.progress, "aaa", self.isActive, self);
          },
        },
      });
      gsap.to(".my-target-3", {
        scrollTrigger: {
          trigger: ".marker-3",
          start: "top top",
          end: "100%",
          toggleClass: "highZindex",

          //   onUpdate: getCurrentSection,
          pin: ".content-3",
          markers: true,

          // pinSpacing: false,
        },
      });
      gsap.to(".my-target-4", {
        scrollTrigger: {
          trigger: ".marker-4",
          start: "top top",
          end: "200%",
          toggleClass: "highZindex",

          //   onUpdate: getCurrentSection,
          pin: ".content-4",
          markers: true,

          // pinSpacing: true,
        },
      });

      //   gsap.fromTo(
      //     ".target-1",
      //     { x: 100 },
      //     {
      //       x: 0,
      //       scrollTrigger: {
      //         trigger: ".marker-1",
      //         pin: "target-1",
      //         scrub: true,
      //         start: "0%",
      //         end: "60%",
      //       },
      //     }
      //   );
    }, el);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className=" section-1 container-fluid  position-relative" ref={el}>
      {/* <div className="content">
        {currentSection === "1" && (
          <div style={{ position: "relative" }}>
            <Test target=".marker-1" />
          </div>
        )}
        {currentSection === "2" && (
          <div>
            <Test2 target=".marker-2" />
          </div>
        )}
        {currentSection === "3" && (
          <div>
            <Test2 target=".marker-3" />
          </div>
        )}
        {currentSection === "4" && (
          //   <div style={{ height: "100vh", backgroundColor: "blue" }}>4</div>
          <Test2 target=".marker-4" />
        )}
      </div> */}
      <div className=" section-1-marker marker-1" data-content-no="1">
        <div
          className="content content-1"
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "red",
          }}
        >
          <div className=" my-target">Content</div>
        </div>
      </div>
      <div className=" section-1-marker marker-2" data-content-no="2">
        <div
          className=" content content-2"
          style={{ height: "100vh", width: "100%", backgroundColor: "green" }}
        >
          <div className=" my-target-2">Content 2</div>
        </div>
      </div>
      <div className=" section-1-marker marker-3" data-content-no="3">
        <div
          className=" content content-3"
          style={{ height: "100vh", width: "100%", backgroundColor: "yellow" }}
        >
          <div className=" my-target-3">Content 3</div>
        </div>
      </div>
      <div className=" section-1-marker marker-4" data-content-no="4">
        <div
          className=" content content-4"
          style={{ height: "100vh", width: "100%", backgroundColor: "blue" }}
        >
          <div className=" my-target-4">Content 4</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
