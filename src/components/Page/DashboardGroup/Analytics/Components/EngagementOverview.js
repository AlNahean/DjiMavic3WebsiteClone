import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const EngagementOverviewData = [
  {
    id: 1,
    duration: "0-30",
    sessions: 2250,
    views: 4250,
  },
  {
    id: 2,
    duration: "31-60",
    sessions: 1501,
    views: 2050,
  },
  {
    id: 3,
    duration: "61-120",
    sessions: 750,
    views: 1600,
  },
  {
    id: 4,
    duration: "121-240",
    sessions: 540,
    views: 1040,
  },
];

const EngagementOverview = () => {
  return (
    <>
      <div
        className=" card mb-3"
        // style={{ height: "496px", minHeight: getHeight() }}
      >
        {getCardHeader("ENGAGEMENT OVERVIEW")}

        <div className="card-body">
          <table className="table  table-hover text-muted">
            <thead
              className=" table-light"
              // style={{ borderSpacing: "0px", borderColor: "red" }}
            >
              <tr className="">
                <th scope="col">Duration (Secs)</th>
                <th scope="col">Sessions</th>
                <th scope="col">Views</th>
              </tr>
            </thead>
            <tbody>
              {EngagementOverviewData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.duration}</td>
                    <td>{item.sessions}</td>
                    <td>{item.views}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EngagementOverview;
