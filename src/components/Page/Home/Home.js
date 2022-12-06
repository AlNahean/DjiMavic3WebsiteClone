import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import assetsLoader from "assets-loader";
import { useGlobalContext } from "../../Context";
import useSmoothScroll from "../../Hooks/useSmoothScroll";
import LastSection from "./Components/LastSection/LastSection";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Section10 from "./Components/Section10/Section10";
import Section11 from "./Components/Section11/Section11";
import Section12 from "./Components/Section12/Section12";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Section4 from "./Components/Section4/Section4";
import Section5 from "./Components/Section5/Section5";
import Section6 from "./Components/Section6/Section6";
import Section7 from "./Components/Section7/Section7";
import Section8 from "./Components/Section8/Section8";
import Section9 from "./Components/Section9/Section9";
// import { useState } from "react";
import "./Home.scss";

const loadingInfo = {
  droneVideo: { type: "video", src: "", text: "loading video" },
  cameraWebp: {
    type: "cameraWebp",
    total: 90,
    srcStart:
      "./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_hasselblad_webp/",
    ext: ".webp",
  },
  fiveKWebp: {
    type: "5kWebp",
    total: 89,
    srcStart:
      "./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/",
    ext: ".webp",
  },
  droneSensor: {
    type: "s1DroneImage",
    total: 3,
    srcStart:
      "./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/drone_image",
    ext: ".jpg",
  },
  s2DroneImage: {
    type: "s2DroneImage",
    total: 45,
    srcStart:
      "./dji-official/assets/uploads/p/d5584155-bbca-4e94-a7a1-c90c9d95777b/frames/pc_overview3/",
    ext: ".jpg",
  },
  s9DroneImage: {
    type: "s9DroneImage",
    total: 88,
    srcStart:
      "./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_sensor_webp/",
    ext: ".webp",
  },
};

var memArray = [];

const Home = () => {
  const videoRef = useRef(null);

  const [loadingState, setLoadingState] = useState({
    state: "starting Loading",
    progress: 0,
  });
  const { test } = useGlobalContext();

  //for Scroll Smoothing
  // useSmoothScroll();

  useEffect(() => {
    // Testing code
    const fixArray = (arr) => {
      // first it gets a object with unique values
      let uniqueObject = new Set(arr);

      //it converts it to an array
      let uniqueArray = [...uniqueObject];

      //it sorts the array in ascending order
      let sortedArray = uniqueArray.sort((a, b) => a - b);
      return sortedArray;
    };

    let arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];
    let fixedArr = fixArray(arr);
    console.log(fixedArr);
    // result is [1, 2, 3, 26, 44, 57, 87]
    return () => {};
  }, []);

  const loadCameraImage = async (item) => {
    // memArray.push()
    console.log(item.type);
    for (let i = 0; i < item.total; i++) {
      let link = item.srcStart + i.toString() + item.ext;

      let cacheSrc = link.split("").slice(2).join("");

      // console.log(link);
      // console.log(window.location.href + cacheSrc);
      const img = new Image();
      img.src = link;
      memArray.push({ src: window.location.href + cacheSrc, loaded: false });
      // console.log(img, link);

      img.onload = (e) => {
        // console.log("loaded inage", item.type, i);
        // console.log("aaaa");
        // setLoadingState({ state: item.type, progress: i });
        // if (item.type === "s9DroneImage" && i === 87) {
        //   setLoadingState({ state: "loaded", progress: i });
        // } else {
        //   // if (i === 1) {
        //   setLoadingState({ state: item.type, progress: i });
        //   // }
        // }
        // console.log(e.path[0].currentSrc);
        // console.log(e);
        //
        memArray.map((item) => {
          // console.log(
          //   item.src === e.path[0].currentSrc,
          //   item.src,
          //   e.path[0].currentSrc
          // );

          if (item.src === e.path[0].currentSrc) {
            return { ...item, loaded: true };
          } else return { ...item };
        });
        let a = memArray.filter((item) => item.src !== e.path[0].currentSrc);
        memArray = a;

        if (memArray.length < 30) {
          console.log(a.length, memArray.length);
          setLoadingState({ state: "loaded", progress: 100 });
        } else {
          setLoadingState({ state: item.type, progress: i });
        }

        // console.log(memArray.length);
      };
      // console.log(i);
    }
  };
  // const loadDroneVideo = () => {
  //   const video = new Video();
  // };

  const getAssets = async () => {
    await loadCameraImage(loadingInfo.cameraWebp);
    console.log("Loading image 1");
    await loadCameraImage(loadingInfo.fiveKWebp);
    console.log("Loading image 2");

    await loadCameraImage(loadingInfo.droneSensor);
    console.log("Loading image 3");

    await loadCameraImage(loadingInfo.s2DroneImage);
    console.log("Loading image 4");

    await loadCameraImage(loadingInfo.s9DroneImage);
    console.log("Loading image 5");

    // setLoadingState({ state: "loaded", progress: 100 });
    // console.log("loaded");
  };

  useEffect(() => {
    // videoRef.current.onload(() => {
    //   console.log("aaa");
    // });
    // videoRef.current.addEventListener(
    //   "loadeddata",
    //   function () {
    //     // Video is loaded and can be played
    //     console.log("video loaded");
    //     alert("aa");
    //   },
    //   falsewww
    // );
    // loadCameraImage(loadingInfo.cameraWebp);
    // loadCameraImage(loadingInfo.fiveKWebp);
    // loadCameraImage(loadingInfo.droneSensor);
    // loadCameraImage(loadingInfo.s2DroneImage);
    // loadCameraImage(loadingInfo.s9DroneImage);

    // getAssets();

    return () => {};
  }, []);

  // useLayoutEffect(() => {
  //   var loader = assetsLoader();

  //   console.log(loader);
  //   // loader.add("aaaaa.jpg");

  //   loader.start();
  //   // loader.on("complete", () => {
  //   //   console.log("a");
  //   // });

  //   // loader
  //   //   .add("audio.mp3")
  //   //   .add("picture.jpg")
  //   //   .add(["a.png", "b.png"])
  //   //   .add({
  //   //     id: "video",
  //   //     url: "video.webm",
  //   //   })
  //   //   .add({
  //   //     id: "sounds",
  //   //     assets: [
  //   //       { id: "a", url: "a.mp3" },
  //   //       { id: "b", url: "b.mp3" },
  //   //     ],
  //   //   })
  //   //   .on("complete", function (assets) {
  //   //     console.log(assets);
  //   //     // console.log(loader.get("video"));
  //   //     // console.log(loader.get("sounds"));
  //   //   })
  //   //   .start();

  //   return () => {
  //     loader.destroy();
  //     loader.getLoader("groupId").destroy();
  //   };
  // }, []);

  // if (loadingState.state !== "loaded") {
  //   return (
  //     <div>
  //       <h1>{loadingState.state}</h1>
  //       <h1>{loadingState.progress}</h1>

  //       {/* <video
  //         src={loadingInfo.droneVideo.srcStart}
  //         // style={{ display: "none" }}
  //         ref={videoRef}
  //       ></video> */}
  //     </div>
  //   );
  // }

  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <LastSection />

      {/* <div
        style={{
          height: "100vh",
          backgroundColor: "orange",
          // zIndex: 100,
          position: "relative",
        }}
      ></div> */}
    </div>
  );
};

export default Home;
