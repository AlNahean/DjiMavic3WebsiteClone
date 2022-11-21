import React from "react";
import PageTitle from "../../../Home/Components/PageTitle";

//icons
import { FiUsers } from "react-icons/fi";
import { FaRegWindowRestore } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
//components
import TileBox from "./TileBox";
import Channels from "./Channels";
import SocialMediaTraffic from "./SocialMediaTraffic";
import EngagementOverview from "./EngagementOverview";

//functions
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import SessionOverview from "./SessionOverview";
import SessionsByCountry from "./SessionsByCountry";
import ViewsPerMinute from "./ViewsPerMinute";
import SessionsByBrowser from "./SessionsByBrowser";
import SessionsByOperatingSystem from "./SessionsByOperatingSystem";

const AnalyticsTileData = [
  {
    id: 1,
    title: "Active Users",
    userNo: 362,
    progress: 5.27,
    icon: <FiUsers />,
  },
  {
    id: 2,
    title: "Views Per Minute",
    userNo: 783,
    progress: -1.27,
    icon: <FaRegWindowRestore />,
  },
];

const AnalyticsMainContent = () => {
  const getHeight = () => {};
  return (
    <div
      className=" full-size dashboard-analytics page-main"
      style={{ zIndex: 1 }}
    >
      <div
        style={
          {
            //   marginTop: "70px",
            //   height: "100%",
            //   minHeight: "calc(100vh - 70px)",
          }
        }
        className="main-content container-fluid w-100 "
      >
        <PageTitle title="Analytics" />
        <div className=" row ">
          <div className="col-12 col-lg-4 col-xl-3 ">
            <div className="row">
              <div className=" col-12 mb-3">
                {/* <div className=" card tile-box">
                  <div className="card-body">
                    <div className=" float-end icon">
                      <FiUsers />
                    </div>
                    <h6>
                      <small className=" text-uppercase text-muted">
                        Active Users
                      </small>
                    </h6>
                    <h2>765</h2>
                    <div className=" d-flex ">
                      <p className=" mb-0">
                        <small className=" me-2">4.65%</small>{" "}
                        <small>Since last month</small>
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div> */}
                <TileBox
                  id={AnalyticsTileData[0].id}
                  title={AnalyticsTileData[0].title}
                  userNo={AnalyticsTileData[0].userNo}
                  progress={AnalyticsTileData[0].progress}
                  icon={AnalyticsTileData[0].icon}
                />
              </div>
              <div className=" col-12 mb-3">
                <TileBox
                  id={AnalyticsTileData[1].id}
                  title={AnalyticsTileData[1].title}
                  userNo={AnalyticsTileData[1].userNo}
                  progress={AnalyticsTileData[1].progress}
                  icon={AnalyticsTileData[1].icon}
                />
                {/* <div className=" card tile-box">
                  <div className="card-body">
                    <div className=" float-end icon ">
                      <FaRegWindowRestore />
                    </div>
                    <h6>
                      <small className=" text-uppercase text-muted">
                        Active Users
                      </small>
                    </h6>
                    <h2>765</h2>
                    <div className=" d-flex ">
                      <p className=" mb-0">
                        <small className=" me-2">4.65%</small>{" "}
                        <small>Since last month</small>
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className=" col-12 mb-3">
                {" "}
                <div
                  className=" card "
                  style={{
                    height: "200px",
                    minHeight: "200px",
                    maxHeight: "200px",
                    overflow: "hidden",
                  }}
                >
                  <div className="card-body d-flex justify-content-between align-items-center h-100">
                    <h4 className=" text-muted">
                      Enhance Your campaign for better outreach{" "}
                      <span className=" icon">
                        <MdArrowRightAlt />
                      </span>
                    </h4>
                    <img
                      src="/email-campaign.svg"
                      alt=""
                      className=" img-fluid"
                      style={{ height: "140px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-8 col-xl-9 h-100"
            style={{ backgroundColor: "" }}
          >
            <SessionOverview />
          </div>
        </div>
        <div className=" row">
          <div className="col-12 h-100" style={{ backgroundColor: "" }}>
            <SessionsByCountry />
          </div>
        </div>
        <div className=" row">
          <div
            className="col-12 col-lg-4 h-100"
            style={{ backgroundColor: "" }}
          >
            <ViewsPerMinute />
          </div>
          <div
            className="col-12 col-lg-4 h-100"
            style={{ backgroundColor: "" }}
          >
            <SessionsByBrowser />
          </div>
          <div
            className="col-12 col-lg-4 h-100"
            style={{ backgroundColor: "" }}
          >
            <SessionsByOperatingSystem />
          </div>
        </div>
        <div className=" row">
          <div className="col-12 col-lg-4 h-100">
            <Channels />
          </div>
          <div className="col-12 col-lg-4 h-100">
            <SocialMediaTraffic />
          </div>
          <div className="col-12 col-lg-4 h-100">
            <EngagementOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsMainContent;
