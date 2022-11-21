import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import { FiMoreHorizontal } from "react-icons/fi";

const RecentActivitiesData = [
  {
    id: 1,
    img: "./images/users/avatar-1.jpg",
    name: "Soren Drouin",
    task: `Completed "Design new idea"...`,
    date: "18 Jan 2019 11:28 pm",
    project: "Hyper Mockup",
  },
  {
    id: 2,
    img: "./images/users/avatar-2.jpg",
    name: "Soren Drouin",
    task: `Assigned task "Poster illustation design"...`,
    date: "18 Jan 2019 11:09 pm",
    project: "Hyper Mockup",
  },
  {
    id: 3,
    img: "./images/users/avatar-3.jpg",
    name: "Nicolas Chartier",
    task: `Completed "Drinking bottle graphics"...`,
    date: "15 Jan 2019 09:29 pm",
    project: "Web UI Design",
  },
  {
    id: 4,
    img: "./images/users/avatar-4.jpg",
    name: "Gano Cloutier",
    task: `Completed "Design new idea"...`,
    date: "10 Jan 2019 08:36 pm",
    project: "UBold Admin",
  },
  {
    id: 5,
    img: "./images/users/avatar-5.jpg",
    name: "Francis Achin",
    task: `Assigned task "Hyper app design"...`,
    date: "08 Jan 2019 12:28 pm",
    project: "Website Mockup",
  },
];
const RecentActivities = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Recent Activities")}
        <div className=" card-body">
          <div className=" " style={{ maxWidth: "100%", overflow: "auto" }}>
            <table
              className="table  table-hover text-muted table-nowrap table-centered"
              style={{
                minWidth: "600px",
                overflow: "auto",
              }}
            >
              <tbody>
                {RecentActivitiesData.map((item) => {
                  return (
                    <tr key={item.id} className=" mb-4">
                      <td>
                        <div className=" d-flex align-items-center">
                          <img
                            src={item.img}
                            alt=""
                            width="45"
                            className=" rounded-circle me-3"
                          />
                          <div className=" d-flex flex-column">
                            <div className=" d-flex align-items-center">
                              <h6 className=" mb-0 me-4">{item.name}</h6>
                              <p className=" mb-0">
                                <small>{item.date}</small>
                              </p>
                            </div>
                            <p className=" mb-0">
                              <small>{item.task}</small>
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className=" d-flex flex-column justify-content-center">
                          <h6 className=" mb-0">Project</h6>
                          <p className=" text-muted mb-0">{item.project}</p>
                        </div>
                      </td>
                      <td>
                        <div
                          className=" center"
                          style={{
                            fontSize: "1.4rem",
                          }}
                        >
                          <FiMoreHorizontal />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentActivities;
