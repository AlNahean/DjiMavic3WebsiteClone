import React from "react";
import PageTitle from "../../../Home/Components/PageTitle";
import { IoBriefcaseOutline } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import TopWidget from "./TopWidget";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import ProjectStatus from "./ProjectStatus";
import Tasks from "./Tasks";
import TasksOverview from "./TasksOverview";
import RecentActivities from "./RecentActivities";
import YourCalender from "./YourCalender";
const TopWidgetData = [
  {
    id: 1,
    title: "Total Projects",
    number: 29,
    icon: <IoBriefcaseOutline />,
    positive: false,
  },
  {
    id: 2,
    title: "Total tasks",
    number: 715,
    icon: <VscChecklist />,
    positive: false,
  },
  {
    id: 3,
    title: "Members",
    number: 31,
    icon: <FiUsers />,
    positive: false,
  },
  {
    id: 4,
    title: "Productivity",
    number: 93,
    icon: <AiOutlineRise />,
    positive: true,
  },
];

const ProjectsMainContent = () => {
  return (
    <div
      className=" full-size dashboard-projects page-main"
      style={{ zIndex: "1" }}
    >
      <div className=" main-content container-fluid w-100">
        <PageTitle title="Projects" />
        <div className=" row top-widgets">
          {TopWidgetData.map((item) => {
            return <TopWidget item={item} key={item.id} />;
          })}
        </div>
        <div className=" row">
          <div className="col-12 col-lg-4">
            <ProjectStatus />
          </div>
          <div className="col-12 col-lg-8">
            <Tasks />
          </div>
        </div>
        <div className=" row">
          <div className="col-12 col-lg-11 col-xl-12">
            <TasksOverview />
          </div>
        </div>
        <div className=" row">
          <div className="col-12 col-lg-5">
            <RecentActivities />
          </div>
          <div className="col-12 col-lg-7">
            <YourCalender />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMainContent;
