import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import ChartJsDataLabels from "chartjs-plugin-datalabels";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

const SessionsByBrowserChartData = [
  {
    id: 1,
    name: "Chrome",
    usage: 80,
  },
  {
    id: 2,
    name: "Firefox",
    usage: 50,
  },
  {
    id: 3,
    name: "Safari",
    usage: 40,
  },
  {
    id: 4,
    name: "Opera",
    usage: 40,
  },
  {
    id: 5,
    name: "Edge",
    usage: 60,
  },
  {
    id: 6,
    name: "Explorare",
    usage: 25,
  },
];
const SessionsByBrowser = () => {
  Chart.register(ChartJsDataLabels); //vvi must do
  let delayed = false;
  useEffect(() => {
    const ctx2 = document.getElementById("SessionsInBrowser1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "radar",
      data: {
        labels: SessionsByBrowserChartData.map((item) => item.name),

        datasets: [
          {
            label: "Usage",
            data: SessionsByBrowserChartData.map((item) => item.usage),
            backgroundColor: ["#727cf557"],

            borderWidth: 4,
            borderColor: "#727CF5",
            // tension: 0.4,
          },
          // {
          //   label: "Previous Week",
          //   data: [4, 15, 10, 30, 15, 35, 25],
          //   backgroundColor: ["#0ACF97"],

          //   borderWidth: 4,
          //   borderColor: "#0ACF97",
          //   tension: 0.4,
          // },
        ],
      },
      options: {
        hitRadius: 100,
        pointRadius: 12,
        hoverRadius: 14,
        pointBackgroundColor: "#727CF5",
        pointStyle: "rect",

        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            // display: false,
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
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.dataset.label;
                let value = context.raw;
                return ` ${label}: ${value}%`;
              },
            },
          },
        },
        scales: {
          r: {
            angleLines: {
              color: "#acb8c887",
            },
            grid: {
              color: "#acb8c887",
            },
            pointLabels: {
              color: "#7b8a9e",
            },
            // ticks: {
            //   color: "red",
            // },
          },
          y: {
            display: false,
            beginAtZero: true,
            grid: {
              // color: "#8080802e",
              color: "white",

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
        {getCardHeader("SESSIONS BY BROWSER")}
        <div className="card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "400px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="SessionsInBrowser1"
                style={{ maxHeight: "400px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionsByBrowser;
