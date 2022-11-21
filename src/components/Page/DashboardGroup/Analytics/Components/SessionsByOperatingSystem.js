import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do
const SessionsByOperatingSystemChartData = [
  {
    id: 1,
    name: "Windows",
    usage: 60,
  },
  {
    id: 2,
    name: "Mac",
    usage: 40,
  },
  {
    id: 3,
    name: "Android",
    usage: 70,
  },
  {
    id: 4,
    name: "Linux",
    usage: 50,
  },
];
const SessionsByOperatingSystem = () => {
  let delayed = false;
  useEffect(() => {
    const ctx2 = document
      .getElementById("SessionsByOperatingSystem1")
      .getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: SessionsByOperatingSystemChartData.map((item) => item.name),

        datasets: [
          {
            label: "Os Usage",
            data: SessionsByOperatingSystemChartData.map((item) => item.usage),
            backgroundColor: ["#727CF5", "#00C38C", "#ff679b", "#ffbc00"],

            borderWidth: 20,
            borderColor: "#00000000",
          },
          // {
          //   label: "Previous Week",
          //   data: [4, 15, 10, 30, 15, 35, 25],
          //   backgroundColor: ["#0ACF97"],

          //   borderWidth: 20,
          //   borderColor: "#00000000",
          // },
        ],
      },
      options: {
        borderWidth: 20,
        borderColor: "#00000000",
        hitRadius: 100,
        pointRadius: 5,
        hoverRadius: 5,

        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: "White",
            labels: {
              title: {
                font: {
                  weight: "bold",
                },
              },
              value: {
                color: "green",
              },
            },
            formatter: (value, context) => {
              // console.log(context.chart.data.datasets[0].data);
              console.log(context.dataset.data[context.dataIndex]);

              // let datapoint = context.chart.data.datasets[0].data;
              // const totalSum = (total, dataPoint) => {
              //   return total + dataPoint;
              // };
              // let totalValue = datapoint.reduce(totalSum, 0);

              // let percentageValue = ((value / totalValue) * 100).toFixed(1);
              let val = context.dataset.data[context.dataIndex];

              // console.log(totalvalue, percentageValue);
              let display = [`${val} `];
              return display;
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.label;
                let value = context.raw;
                return `${label}: ${value}%`;
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
      {" "}
      <div className=" card mb-3" style={{ height: "496px" }}>
        {getCardHeader("SESSIONS BY OPERATING SYSTEM")}
        <div className="card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "350px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="SessionsByOperatingSystem1"
                style={{ maxHeight: "350px", width: "100%" }}
              />
            </div>
          </div>
          <div className=" d-flex justify-content-evenly">
            <div className=" text-muted text-center">
              <h4 className=" text-primary">3243</h4>
              <p>Online Systems</p>
            </div>
            <div className=" text-muted text-center">
              <h4 className=" text-primary">2353</h4>
              <p>Offline Systems</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionsByOperatingSystem;
