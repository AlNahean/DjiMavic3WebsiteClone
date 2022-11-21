import React, { useState } from "react";
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

const Home = () => {
  const { test } = useGlobalContext();

  //for Scroll Smoothing
  // useSmoothScroll();

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
