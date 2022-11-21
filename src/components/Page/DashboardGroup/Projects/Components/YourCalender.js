import React from "react";
import Calendar from "react-calendar";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const CalenderTasksData = [
  {
    id: 1,
    timeline: " 7:30 AM - 10:00 AM",
    task: "Meeting with BD Team",
  },
  {
    id: 2,
    timeline: " 10:30 AM - 11:45 AM",
    task: "Design Review - Hyper Admin",
  },
  {
    id: 3,
    timeline: " 12:15 PM - 02:00 PM",
    task: "Setup Github Repository",
  },
  {
    id: 4,
    timeline: " 5:30 PM - 07:00 PM",
    task: "Meeting with Design Studio",
  },
];
const YourCalender = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Your Calender")}
        <div className=" card-body">
          <div className=" row">
            <div className=" col-12 col-md-7 mb-4 dashboard-projects-calender-marker">
              <Calendar />{" "}
            </div>
            <div className=" col-12 col-md-5">
              <ul className=" list-unstyled ">
                {CalenderTasksData.map((item) => {
                  return (
                    <li
                      className=" mb-3 ct-hover p-2"
                      style={{ opacity: "0.8" }}
                      key={item.id}
                    >
                      <div className=" d-flex text-muted">
                        <h6>{item.timeline}</h6>
                      </div>
                      <h6>{item.task}</h6>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCalender;
