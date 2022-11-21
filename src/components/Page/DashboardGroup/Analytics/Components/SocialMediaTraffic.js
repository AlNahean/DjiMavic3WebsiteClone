import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const SocialMediaTrafficData = [
  {
    id: 1,
    title: "Facebook",
    visits: 2250,
  },
  {
    id: 2,
    title: "Instagram",
    visits: 1501,
  },
  {
    id: 3,
    title: "twitter",
    visits: 750,
  },
  {
    id: 4,
    title: "Linkedin",
    visits: 540,
  },
];
const SocialMediaTraffic = () => {
  return (
    <>
      <div
        className=" card mb-3"
        // style={{ height: "496px", minHeight: getHeight() }}
      >
        {getCardHeader("SOCIAL MEDIA TRAFFIC")}
        <div className="card-body">
          <table className="table  table-hover table-centered text-muted">
            <thead
              className=" table-light"
              // style={{ borderSpacing: "0px", borderColor: "red" }}
            >
              <tr className="">
                <th scope="col">Network</th>
                <th scope="col">Visits</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {SocialMediaTrafficData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.visits}</td>
                    <td>
                      <div
                        className=" progress"
                        style={{ height: "3px", minWidth: "30px" }}
                      >
                        <div
                          className=" progress-bar"
                          style={{
                            width: `${(item.visits / 3000) * 100}%`,
                            height: "3px",
                          }}
                        ></div>
                      </div>
                    </td>
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

export default SocialMediaTraffic;
