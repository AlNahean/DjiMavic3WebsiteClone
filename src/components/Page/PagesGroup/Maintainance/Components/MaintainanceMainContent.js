import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineClockCircle, AiFillQuestionCircle } from "react-icons/ai";

const maintainanceQuestionData = [
  {
    id: 1,
    icon: <IoDiamondOutline />,
    question: "WHY IS THE SITE DOWN?",
    info: `There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.`,
  },
  {
    id: 2,
    icon: <AiOutlineClockCircle />,
    question: "WHAT IS THE DOWNTIME?",
    info: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical but the majority.`,
  },
  {
    id: 3,
    icon: <AiFillQuestionCircle />,
    question: "DO YOU NEED SUPPORT?",
    info: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. no-reply@domain.com`,
  },
];

const MaintainanceMainContent = () => {
  return (
    <div className=" page-main">
      <div className=" main-content container w-100">
        <div className=" center my-color">
          <div className=" center flex-column">
            <img src="/maintenance.svg" alt="" height="250" className=" mt-5" />
            <h3 className=" mt-3 opacity-75 text-center">
              Site is under maintainance
            </h3>
            <p className=" text-muted opacity-75 text-center">
              We're making the system more awesome. We'll be back shortly.
            </p>
          </div>
        </div>
        <div className=" row my-color mt-5">
          {maintainanceQuestionData.map((item) => {
            return (
              <div className=" col-12 col-md-4" key={item.id}>
                <div className=" center flex-column text-center mt-4">
                  <div
                    className=" rounded-circle p-3 bg-primary center text-white"
                    style={{ fontSize: "2rem" }}
                  >
                    {item.icon}
                  </div>
                  <h4 className=" mt-4  text-info">WHY IS THE SITE DOWN?</h4>
                  <p className=" text-muted small mt-3">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaintainanceMainContent;
