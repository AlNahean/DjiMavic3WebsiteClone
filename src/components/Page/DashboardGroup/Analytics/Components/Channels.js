import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
const ChannelData = [
  {
    id: 1,
    title: "Direct",
    visits: 2050,
    progress: 80,
  },
  {
    id: 2,
    title: "Organic Search",
    visits: 1405,
    progress: 70,
  },
  {
    id: 3,
    title: "Refferl",
    visits: 750,
    progress: 60,
  },
  {
    id: 4,
    title: "Social",
    visits: 540,
    progress: 40,
  },
];
const Channels = () => {
  return (
    <>
      <div
        className=" card mb-3"
        // style={{ height: "496px", minHeight: getHeight() }}
      >
        {getCardHeader("CHANNELS")}

        <div className="card-body">
          <table className="table  table-hover text-muted table-centered">
            <thead
              className=" table-light"
              // style={{ borderSpacing: "0px", borderColor: "red" }}
            >
              <tr className="">
                <th scope="col">Channel</th>
                <th scope="col">Visits</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {ChannelData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.visits}</td>
                    <td className="">
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

export default Channels;
