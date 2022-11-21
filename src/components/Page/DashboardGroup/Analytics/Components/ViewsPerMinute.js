import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables); //vvi must do

const ViewsPerMinuteTableData = [
  { id: 1, page: "/hyper/dashboard-analytics", views: 25, bounceRate: 87.5 },
  { id: 2, page: "/hyper/dashboard-crm", views: 15, bounceRate: 21.48 },
  { id: 3, page: "/ubold/dashboard", views: 10, bounceRate: 64.59 },
  { id: 4, page: "/minton/home", views: 7, bounceRate: 56.12 },
];
const ViewsPerMinuteChartData = [
  {
    id: 1,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 2,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 3,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 4,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 5,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 6,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 7,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 8,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 9,
    views: (Math.random() * 100).toFixed(0),
  },
  {
    id: 10,
    views: (Math.random() * 100).toFixed(0),
  },
];
const ViewsPerMinute = () => {
  let delayed = false;
  useEffect(() => {
    const ctx2 = document.getElementById("ViewsPerMinute1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: ViewsPerMinuteChartData.map((item) => item.id),

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
            label: "Views",
            data: ViewsPerMinuteChartData.map((item) => item.views),
            backgroundColor: ["#0ACF97"],

            borderWidth: 0,
            borderColor: "#0ACF97",
            tension: 0.4,
          },
        ],
      },
      options: {
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
              title: function (data) {
                // console.log(data);
                //Return value for title
                let title = data[0].label;
                return `${title} min ago`;
              },
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.dataset.label;
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
      <div className=" card mb-3" style={{ height: "496px" }}>
        {getCardHeader("VIEWS PER MINUTE")}

        <div className="card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "230px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="ViewsPerMinute1"
                style={{ maxHeight: "200px", width: "100%" }}
              />
            </div>
          </div>
          <table className="table  table-hover text-muted">
            <thead
              className=" table-light"
              // style={{ borderSpacing: "0px", borderColor: "red" }}
            >
              <tr className="">
                <th scope="col ">Page</th>
                <th scope="col">Views</th>
                <th scope="col">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {ViewsPerMinuteTableData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.page}</td>
                    <td>{item.views}</td>
                    <td>{item.bounceRate}%</td>
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

export default ViewsPerMinute;
