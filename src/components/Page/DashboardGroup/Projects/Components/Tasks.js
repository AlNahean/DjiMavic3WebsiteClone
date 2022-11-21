import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import { AiOutlineCalendar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

const TasksData = [
  {
    id: 1,
    taskTitle: "Coffee detail page - Main Page",
    dueDate: "3",
    status: "In-progress",
    asignedTo: "Logan R. Cohn",
    timeSpent: "3h 20min",
  },
  {
    id: 2,
    taskTitle: "Drinking bottle graphics",
    dueDate: "27",
    status: "Outdated",
    asignedTo: "Jerry F. Powell",
    timeSpent: "12h 21min",
  },
  {
    id: 3,
    taskTitle: "App design and development",
    dueDate: "7",
    status: "Completed",
    asignedTo: "Scot M. Smith",
    timeSpent: "78h 05min",
  },
  {
    id: 4,
    taskTitle: "Poster illustation design",
    dueDate: "5",
    status: "In-progress",
    asignedTo: "John P. Ritter",
    timeSpent: "26h 58min",
  },
];
const Tasks = () => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Tasks")}
        <div className=" card-body">
          <p>
            <b>107</b> Tasks Completed out of <b>185</b>
          </p>
          <div className=" " style={{ maxWidth: "100%", overflow: "auto" }}>
            <table
              className="table  table-hover text-muted table-nowrap table-centered"
              style={{
                minWidth: "600px",
                overflow: "auto",
              }}
            >
              {/* <thead
                className=" table-light"
                // style={{ borderSpacing: "0px", borderColor: "red" }}
              >
                <tr className="">
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead> */}
              <tbody>
                {TasksData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <h6 className=" mb-0">{item.taskTitle}</h6>
                        <p className=" text-muted">
                          Due in {item.dueDate} days
                        </p>
                      </td>

                      <td>
                        <p className=" mb-0 text-muted">Status</p>
                        {/* Incoming */}
                        {item.status === "Completed" && (
                          <div className=" badge bg-success-lighten text-success">
                            Completed
                          </div>
                        )}
                        {/* OutGoing */}
                        {item.status === "Outdated" && (
                          <div className=" badge bg-danger-lighten text-danger">
                            Outdated
                          </div>
                        )}
                        {item.status === "In-progress" && (
                          <div className=" badge bg-warning-lighten text-warning">
                            In-progress
                          </div>
                        )}
                      </td>
                      <td className=" ">
                        <p className=" mb-0 text-muted">Asigned to</p>
                        <h6 className=" mb-0" height="33">
                          {item.asignedTo}
                        </h6>
                      </td>
                      <td className=" ">
                        <p className=" mb-0 text-muted">Total time spend</p>
                        <h6 className=" mb-0" height="33">
                          {item.timeSpent}
                        </h6>
                      </td>
                      <td>
                        {item.status === "Incoming" && (
                          <h6 className=" text-success mb-0">
                            {separator(item.amount)}
                          </h6>
                        )}
                        {item.status === "Outgoing" && (
                          <h6 className=" text-danger mb-0">
                            {separator(item.amount)}
                          </h6>
                        )}
                        {item.status === "In Progress" && (
                          <h6 className=" text-warning mb-0">
                            {separator(item.amount)}
                          </h6>
                        )}
                      </td>
                      <td>
                        <div className=" d-flex">
                          <div className=" me-3 text-info">
                            <BiPencil
                              style={{
                                height: "1.3rem",
                                width: "auto",
                              }}
                            />
                          </div>
                          <div className=" text-danger">
                            <FiTrash
                              style={{
                                height: "1.2rem",
                                width: "auto",
                              }}
                            />
                          </div>
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

export default Tasks;
