import React, { useEffect } from "react";

const LandingMainContent = () => {
  useEffect(() => {
    window.location.replace("https://nahean.netlify.app/");
    return () => {};
  }, []);

  return (
    <div className=" page-main">
      <div className=" main-content container-fluid w-100">Landing</div>
    </div>
  );
};

export default LandingMainContent;
