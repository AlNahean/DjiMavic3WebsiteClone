import React, { useState, useRef, useEffect } from "react";
import OverviewCard from "./OverviewCard";
import ProjectionVsActuals from "./ProjectionVsActuals";
import Revenew from "./Revenew";
import RevenewByLocation from "./RevenewByLocation";
import TopSellingProducts from "./TopSellingProducts";
import TotalSales from "./TotalSales";
import RecentActivity from "./RecentActivity";

//overview-Card
import { FaUserFriends } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BiDollar, BiPulse } from "react-icons/bi";
import PageTitle from "./PageTitle";

//data
const HomeWidgets1 = [
  {
    id: 1,
    title: "Customers",
    customersNo: 36254,
    isDollar: false,
    progress: 5.27,
    icon: <FaUserFriends />,
  },
  {
    id: 2,
    title: "Orders",
    customersNo: 5543,
    isDollar: false,
    progress: -1.08,
    icon: <BsFillCartPlusFill />,
  },
  {
    id: 3,
    title: "Revenew",
    customersNo: 6254,
    isDollar: true,
    progress: -7.0,
    icon: <BiDollar />,
  },
  {
    id: 4,
    title: "Growth",
    customersNo: 30.56,
    isDollar: false,
    progress: 4.87,
    icon: <BiPulse />,
  },
];

const MainContent = () => {
  return (
    <>
      <div className="dashboard-main full-size page-main" style={{ zIndex: 1 }}>
        <div
          // style={{ marginTop: "70px" }}
          className="main-content"
          onClick={(e) => {
            // mainContentAction(e);
          }}
        >
          <div
            style={{
              height: "100%",
              // minHeight: "calc(100vh - 70px)",
              // width: "90vw",
            }}
            className="container-fluid w-100 "
          >
            <PageTitle title="E-Commerse" />

            <div className=" row">
              <div className="col-12 col-lg-6 overview-wrapper">
                <div className="row">
                  <div className="col-12 col-md-6 h-100">
                    <OverviewCard
                      title={HomeWidgets1[0].title}
                      customersNo={HomeWidgets1[0].customersNo}
                      progress={HomeWidgets1[0].progress}
                      icon={HomeWidgets1[0].icon}
                      isDollar={HomeWidgets1[0].isDollar}
                    />
                    <OverviewCard
                      title={HomeWidgets1[1].title}
                      customersNo={HomeWidgets1[1].customersNo}
                      progress={HomeWidgets1[1].progress}
                      icon={HomeWidgets1[1].icon}
                      isDollar={HomeWidgets1[1].isDollar}
                    />
                  </div>
                  <div className="col-12 col-md-6 h-100">
                    <OverviewCard
                      title={HomeWidgets1[2].title}
                      customersNo={HomeWidgets1[2].customersNo}
                      progress={HomeWidgets1[2].progress}
                      icon={HomeWidgets1[2].icon}
                      isDollar={HomeWidgets1[2].isDollar}
                    />
                    <OverviewCard
                      title={HomeWidgets1[3].title}
                      customersNo={HomeWidgets1[3].customersNo}
                      progress={HomeWidgets1[3].progress}
                      icon={HomeWidgets1[3].icon}
                      isDollar={HomeWidgets1[3].isDollar}
                    />
                  </div>
                </div>
              </div>
              <div className=" col-12 col-lg-6 h-100">
                <ProjectionVsActuals />
              </div>
            </div>
            <div className="row h-100">
              <div className=" col-12 col-lg-8 h-100 mb-4">
                <Revenew />
              </div>
              <div
                className=" col-12 col-lg-4 h-100 mb-4"
                // style={{
                //   height: "300px",
                //   backgroundColor: "red",
                //   minHeight: "300px",
                // }}
              >
                <RevenewByLocation />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-6 mb-4">
                <TopSellingProducts />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <TotalSales />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <RecentActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MainContent;
