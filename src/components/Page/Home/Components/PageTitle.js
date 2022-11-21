import React, { useState } from "react";

import Calendar from "react-calendar";

import { AiOutlineCalendar } from "react-icons/ai";
import { MdAutorenew } from "react-icons/md";
import { IoFilter } from "react-icons/io5";

const PageTitle = ({ title = "Dashboard" }) => {
  const [value, setValue] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);

  const controlEvent = (e) => {
    let calenderContainer = document.querySelector(".calender-input-group");

    // console.log(e.target, calenderContainer);
    // console.log(e);
    let outside = !document
      .querySelector(".calender-input-group")
      .contains(e.target);

    // let calenderOutside = !document
    //   .querySelector(".calender-container")
    //   .contains(e.target);

    // if (calenderOutside) {
    //   console.log("asdhgsjkgajkgkdsjsdgakjvakfjsvfdj");
    // }
    // console.log(outside);
    if (outside) {
      if (!showCalender) {
        console.log(
          "calenderContainer",
          document.querySelector(".calender-container")
        );
        // react-calendar__viewContainer
        // react-calendar__viewContainer

        // if (document.querySelector(".calender-container").contains(e.target)) {
        //   console.log("Contains");
        // } else {
        //   console.log(
        //     "not-contains",
        //     document.querySelector(".calender-container").contains(e.target),
        //     document.querySelector(".calender-container"),
        //     "target",
        //     e.target
        //   );
        // }
        console.log(e.target, calenderContainer, "line49");
        let gg = e.target.classList.contains("react-calendar__tile");
        // console.log(gg, "gg");

        // console.log("Outside click");
        if (e.target !== "null") {
        }
        console.log("Target", e.target);
        if (
          e.target !== "null" &&
          !e.target.classList?.contains("react-calendar__tile") &&
          e.target.nodeName !== "ABBR"
        ) {
          console.log("www", e.target.nodeName);
          setShowCalender(false);
          document.removeEventListener("click", controlEvent);
        }
      }
    }
    if (!outside) {
      // document.removeEventListener("click", controlEvent);
    }
  };
  const controlCalender = () => {
    console.log("run again!");
    let calenderContainer = document.querySelector(".calender-input-group");
    document.addEventListener("click", controlEvent);
  };
  return (
    <div className="page-title-box mt-4 mb-4">
      <h4 className="page-title">{title}</h4>
      <div className="page-title-input d-none d-md-flex ">
        <div className="input-group calender-input-group">
          <input
            type="text"
            name=""
            id=""
            className=" form-control "
            value={value.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
            onChange={(e) => {
              // let val = value.toLocaleDateString("en-US", {
              //   day: "2-digit",
              //   month: "2-digit",
              //   year: "numeric",
              // });
              // if (value !== e.target.value) {
              //   setValue(e.target.value);
              // }
            }}
            onClick={() => {
              if (showCalender === false) {
                controlCalender();
              }
              setShowCalender(!showCalender);
            }}
          />
          <span
            className=" bg-primary text-white icon  btn calender-icon "
            onClick={() => {
              if (showCalender === false) {
                controlCalender();
              }
              setShowCalender(!showCalender);
            }}
          >
            <div className=" center">
              <AiOutlineCalendar />
            </div>
          </span>
          {showCalender && (
            <div className=" calender-container">
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "red",
                  scale: "1.3",
                }}
              >
                <Calendar onChange={setValue} value={value} />
              </div>
            </div>
          )}
        </div>
        <div className=" btn btn-primary text-white ms-2 me-2  icon">
          <MdAutorenew />
        </div>
        <div className=" btn btn-primary text-white  icon">
          <IoFilter />
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
