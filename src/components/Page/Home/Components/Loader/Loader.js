import React, { useEffect, useState, useLayoutEffect } from "react";

const loadingInfoArray = [
  { type: "video", src: "", text: "loading video" },
  {
    type: "cameraWebp",
    total: 90,
    srcStart:
      "./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_hasselblad_webp/",
    extention: ".webp",
  },
];

const loadCameraImage = async (item) => {
  for (let i = 0; i < item.total; i++) {
    let link = item.link + i + item.ext;
    const img = new Image();
    img.src = link;

    await img.onload(() => {
      console.log("load ", i);
    });
  }
};

const Loader = () => {
  const [loadingState, setLoadingState] = useState();

  useLayoutEffect(() => {
    // const djiFrameCount = 89;
    // const currentFrame = (index) => {
    //   let supposedLink = "";
    //   let djiNum = Math.round((djiFrameCount / 100) * index);
    //   let t =
    //     "../../../../../../../../../public/dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/0.webp";
    //   let link = `./dji/${djiNum}.webp`;
    //   link = `./dji-official/assets/uploads/p/4016f437-2d93-4798-9b01-9574cff4d738/frames/pc_51k_webp/${djiNum}.webp`;

    //   return link;
    // };
    // const load = () => {
    //   const img = new Image();
    //   img.src = currentItem(i);
    // };

    return () => {};
  }, []);
  return <div>Loader</div>;
};

export default Loader;
