import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
//icons
import {
  SiDribbble,
  SiBehance,
  SiFacebook,
  SiInstagram,
  SiGithub,
  SiGoogle,
  SiPinterest,
} from "react-icons/si";
import {} from "react-icons/si";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";

const MarchentListData = [
  {
    id: 1,
    title: "Dribble",
    icon: <SiDribbble />,
    class: "text-danger",
  },
  {
    id: 2,
    title: "Behance",
    icon: <SiBehance />,
    class: "text-info",
  },
  {
    id: 3,
    title: "Facebook",
    icon: <SiFacebook />,
    class: "text-primary",
  },
  {
    id: 4,
    title: "Instagram",
    icon: <SiInstagram />,
    class: "text-danger",
  },
  {
    id: 5,
    title: "Github",
    icon: <SiGithub />,
    class: "text-dark",
  },
  {
    id: 6,
    title: "Google",
    icon: <SiGoogle />,
    class: "text-success",
  },
  {
    id: 7,
    title: "Pinterest",
    icon: <SiPinterest />,
    class: "text-danger",
  },
];
const MarchentList = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Marchent List")}
        <div
          className=" card-body custom-scrollbar-sm"
          style={{ maxHeight: "387px", minHeight: "387px", overflow: "auto" }}
        >
          {MarchentListData.map((item) => {
            return (
              <div
                className=" d-flex align-items-center justify-content-between  p-3 ct-hover"
                key={item.id}
              >
                <div className=" d-flex align-items-center">
                  <div
                    className={`avatar-sm  me-2 rounded center ${item.class}`}
                    style={{
                      fontSize: "1.6rem",
                      border: "1px solid #80808096",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h5 className=" text-muted mb-0">
                      <small>{item.title}</small>
                      <span className=" ms-2">
                        <BsFillPatchCheckFill />
                      </span>
                    </h5>
                  </div>
                </div>
                <div className=" ">
                  <AiOutlineRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MarchentList;
