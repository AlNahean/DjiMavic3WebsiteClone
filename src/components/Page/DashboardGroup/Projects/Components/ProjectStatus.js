import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
Chart.register(...registerables); //vvi must do

const ProjectStatusData = [
  {
    id: 1,
    status: "Completed",
    number: 64,
    icon: <BiTrendingUp />,
  },
  {
    id: 2,
    status: "In-progress",
    number: 64,
    icon: <BiTrendingDown />,
  },
  {
    id: 3,
    status: "Behind",
    number: 64,
    icon: <BiTrendingDown />,
  },
];
const ProjectStatus = () => {
  let delayed = false;
  useEffect(() => {
    const ctx2 = document.getElementById("ProjectStatus1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ProjectStatusData.map((item) => item.status),

        datasets: [
          // {
          //   label: "Current Week",
          //   data: [10, 20, 15, 25, 20, 30, 20],
          //   backgroundColor: ["#727CF5"],

          //   borderWidth: 4,
          //   borderColor: "#727CF5",
          //   tension: 0.4,
          // },
          {
            label: "Project Status",
            data: ProjectStatusData.map((item) => item.number),
            backgroundColor: ["#00C38C", "#727CF5", "#ff679b", "#ffbc00"],
            borderWidth: 0,
            borderColor: "#727CF500",
          },
        ],
      },
      options: {
        cutout: 70,
        hitRadius: 100,
        pointRadius: 5,
        hoverRadius: 5,

        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.label;
                let value = context.raw;
                return `${label}: ${value}`;
              },
            },
          },
        },
        scales: {
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              color: "#8080802e",

              // display: false,
            },
            ticks: {
              callback: (value) => {
                return `$${value}k`;
              },
            },
          },
          x: {
            display: false,
            grid: {
              color: "#8080802e",
            },
          },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
    });

    return () => {
      RevenewChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Project Status")}
        <div className=" card-body" style={{ minHeight: "393px" }}>
          <div className=" row">
            <div className=" col-12 center">
              <div
                className="dummy-graph mb-4"
                style={{ maxHeight: "230px", width: "100%" }}
              >
                <div className="chart">
                  <canvas
                    className="my-chart"
                    id="ProjectStatus1"
                    style={{ maxHeight: "200px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {ProjectStatusData.map((item) => {
              return (
                <div
                  className=" col-12 col-sm-4 center flex-column"
                  key={item.id}
                >
                  {/* Completed */}
                  {item.status === "Completed" && (
                    <div
                      className="  text-success"
                      style={{
                        fontSize: "1.6rem",
                      }}
                    >
                      {item.icon}
                    </div>
                  )}
                  {/* In-Progress */}
                  {item.status === "In-progress" && (
                    <div
                      className="  text-info"
                      style={{
                        fontSize: "1.6rem",
                      }}
                    >
                      {item.icon}
                    </div>
                  )}
                  {/* Completed */}
                  {item.status === "Behind" && (
                    <div
                      className="  text-danger"
                      style={{
                        fontSize: "1.6rem",
                      }}
                    >
                      {item.icon}
                    </div>
                  )}
                  <h4 className=" text-primary">{item.number}%</h4>
                  <p className=" text-muted">{item.status}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStatus;
