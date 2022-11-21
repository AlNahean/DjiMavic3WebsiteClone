import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

const TransactionListData = [
  {
    id: 1,
    userImg: "./images/users/avatar-1.jpg",
    name: "Adam Bladwin",
    date: "Jan 01, 2022",
    status: "Incoming",
    amount: "213,434",
  },
  {
    id: 2,
    userImg: "./images/users/avatar-2.jpg",
    name: "Peter Wallace",
    date: "Jan 18, 2022",
    status: "Outgoing",
    amount: "1,250.48",
  },
  {
    id: 3,
    userImg: "./images/users/avatar-3.jpg",
    name: "Jacob Dunn",
    date: "Feb 05, 2022",
    status: "Incoming",
    amount: "18,400.00",
  },
  {
    id: 4,
    userImg: "./images/users/avatar-4.jpg",
    name: "Terry Adams",
    date: "Feb 13, 2022",
    status: "In-progress",
    amount: "9,646.20",
  },
  {
    id: 5,
    userImg: "./images/users/avatar-5.jpg",
    name: "Jason Stovall",
    date: "Mar 02, 2022",
    status: "Outgoing",
    amount: "10,285.80",
  },
];
const TransactionList = () => {
  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Transaction List")}
        <div
          className=" card-body custom-scrollbar-sm"
          style={{ maxHeight: "387px", minHeight: "387px", overflow: "auto" }}
        >
          <div className=" " style={{ maxWidth: "100%", overflow: "auto" }}>
            <table
              className="table  table-hover text-muted table-nowrap table-centered "
              style={{
                minWidth: "600px",
                overflow: "auto",
              }}
            >
              <thead
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
              </thead>
              <tbody>
                {TransactionListData.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      style={{ margin: "1rem", height: "5rem" }}
                      className=" mb-3"
                    >
                      <td>
                        <div className=" d-flex align-items-center">
                          <img
                            src={item.userImg}
                            alt=""
                            width="33"
                            className=" rounded-circle me-1"
                          />
                          <h6 className=" mb-0">{item.name}</h6>
                        </div>
                      </td>
                      <td className=" ">
                        <div className=" d-flex align-items-center">
                          <AiOutlineCalendar />
                          <h6 className=" mb-0" height="33">
                            {item.date}
                          </h6>
                        </div>
                      </td>
                      <td>
                        {/* Incoming */}
                        {item.status === "Incoming" && (
                          <div className=" badge bg-success-lighten text-success">
                            Incoming
                          </div>
                        )}
                        {/* OutGoing */}
                        {item.status === "Outgoing" && (
                          <div className=" badge bg-danger-lighten text-danger">
                            Outgoing
                          </div>
                        )}
                        {item.status === "In-progress" && (
                          <div className=" badge bg-warning-lighten text-warning">
                            In Progress
                          </div>
                        )}
                      </td>
                      <td>
                        {item.status === "Incoming" && (
                          <h6 className=" text-success mb-0">
                            +${separator(item.amount)}
                          </h6>
                        )}
                        {item.status === "Outgoing" && (
                          <h6 className=" text-danger mb-0">
                            -${separator(item.amount)}
                          </h6>
                        )}
                        {item.status === "In-progress" && (
                          <h6 className=" text-warning mb-0">
                            +${separator(item.amount)}
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

export default TransactionList;
