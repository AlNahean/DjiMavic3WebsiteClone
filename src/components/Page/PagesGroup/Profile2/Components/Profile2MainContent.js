import React, { useState } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import PageTitleBreadcrumb from "../../../Shared/Extra/PageTitleBreadcrumb";
import About from "./About";
import Timeline from "./Timeline";
import Settings from "./Settings";
import Messeges from "../../Profile/Components/Messeges";
import FounderInfo from "./FounderInfo";

const Profile2TabSwitchData = [
  {
    id: 1,
    title: "About",
    module: <About key="1" />,
  },
  {
    id: 2,
    title: "Timeline",
    module: <Timeline key="2" />,
  },
  {
    id: 3,
    title: "Settings",
    module: <Settings key="3" />,
  },
];

const Profile2MainContent = () => {
  const [currentTab, setCurrentTab] = useState("Settings");
  return (
    <div className=" page-main">
      <div className=" main-content container-fluid w-100">
        <PageTitleBreadcrumb title="Profile 2" path="Profile 2" />

        <div className=" row">
          <div className=" col-12 col-xl-4">
            <FounderInfo />
            <Messeges />
          </div>
          <div className=" col-12 col-xl-8">
            <div className=" card p-2">
              {/* <div className=" btn-group-lg w-100 ">
                <button className=" btn btn-primary">Click Me</button>
                <button className=" btn btn-primary">Click Me</button>
                <button className=" btn btn-primary">Click Me</button>
              </div> */}

              <ul className="nav nav-pills  nav-justified bg-secondary bg-opacity-10 rounded-2">
                {Profile2TabSwitchData.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className=" nav-item"
                      onClick={() => {
                        setCurrentTab(item.title);
                      }}
                    >
                      <div
                        className={`nav-link ${
                          currentTab === item.title && "active"
                        }`}
                      >
                        {item.title}
                      </div>
                    </li>
                  );
                })}
              </ul>
              {Profile2TabSwitchData.map((item) => {
                if (item.title === currentTab) {
                  return item.module;
                }
              })}
            </div>
            <div className=" comment"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile2MainContent;
