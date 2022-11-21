import React from "react";
import { MdWork } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";

import { FaRegDotCircle } from "react-icons/fa";

const AboutData = [
  {
    id: 1,
    img: "/images/users/avatar-1.jpg",
    name: " Halette Boivin",
    projectName: "App design and development",
    startDate: "01/01/2015",
    dueDate: "10/15/2018",
    status: "Work in Progress",
  },
  {
    id: 2,
    img: "/images/users/avatar-2.jpg",
    name: " Durandana Jolicoeur",
    projectName: "Coffee detail page - Main Page",
    startDate: "	21/07/2016",
    dueDate: "12/05/2018",
    status: "Pending",
  },
  {
    id: 3,
    img: "/images/users/avatar-3.jpg",
    name: " Lucas Sabourin",
    projectName: "Poster illustation design",
    startDate: "18/03/2018",
    dueDate: "28/09/2018",
    status: "Done",
  },
  {
    id: 4,
    img: "/images/users/avatar-4.jpg",
    name: " Donatien Brunelle",
    projectName: "Drinking bottle graphics",
    startDate: "02/10/2017",
    dueDate: "07/05/2018",
    status: "Work in Progress",
  },
  {
    id: 5,
    img: "/images/users/avatar-5.jpg",
    name: "Karel Auberjo",
    projectName: "Landing page design - Home",
    startDate: "17/01/2017",
    dueDate: "25/05/2021",
    status: "Coming soon",
  },
];

const About = () => {
  return (
    <div className=" text-muted">
      {/* Experiance */}
      {/* <h5 className=" bg-primary w-100 mt-3 mb-3 p-3 d-flex align-items-center text-white text-capitalize">
        <span className=" me-2 ">
          <MdWork />
        </span>
        Experiance
      </h5>{" "} */}
      <div className=" d-flex flex-column position-relative"></div>
      {/* Projects */}
      <h5 className=" bg-primary w-100 mt-3 mb-3 p-3 d-flex align-items-center text-white text-capitalize">
        <span className=" me-2 ">
          <AiFillProject />
        </span>
        Projects
      </h5>
      <div
        className=" custom-scrollbar"
        style={{ maxWidth: "100%", overflow: "auto" }}
      >
        <table
          className=" table table-hover table-centered my-color"
          style={{ minWidth: "700px", overflow: "auto" }}
        >
          <thead className=" table-light">
            <tr style={{ height: "4rem" }}>
              <th>#</th>
              <th>Clients</th>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {AboutData.map((item) => {
              let status = "info";
              if (item.status === "Work in Progress") {
                status = "info";
              } else if (item.status === "Pending") {
                status = "danger";
              } else if (item.status === "Done") {
                status = "success";
              } else if (item.status === "Coming soon") {
                status = "warning";
              }
              return (
                <tr style={{ height: "4rem" }} key={item.id}>
                  <td>{item.id}</td>
                  <td className=" ">
                    <img
                      src={item.img}
                      alt=""
                      className=" rounded-circle "
                      height="32"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.projectName}</td>
                  <td>{item.startDate}</td>
                  <td>{item.dueDate}</td>
                  <td>
                    {/* {(item.status == "Work in Progress") &
                  <div className=" badge bg-danger-lighten">{item.status}</div>} */}
                    <div
                      className={` badge bg-${status}-lighten text-${status} `}
                    >
                      {item.status}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
