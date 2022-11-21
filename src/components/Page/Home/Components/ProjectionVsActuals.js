import React, { useState, useEffect } from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

const ProjectionVsActuals = () => {
  useEffect(() => {
    let delayed = false;

    const ctx1 = document
      .getElementById("ProjectionVsActualChart1")
      .getContext("2d");
    const ProjectionVsActuslsChart1 = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Actual",
            data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
            backgroundColor: ["#727CF5"],
            // backgroundColor: [
            //   "rgba(255, 99, 132, 0.6)",
            //   "rgba(54, 162, 235, 0.6)",
            //   "rgba(255, 206, 86, 0.6)",
            //   "rgba(75, 192, 192, 0.6)",
            //   "rgba(153, 102, 255, 0.6)",
            //   "rgba(255, 159, 64, 0.6)",
            // ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            borderWidth: 1,
            tension: 0.4,
          },
          {
            label: "Projection",
            data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
            backgroundColor: ["#E3E6E8"],
            // backgroundColor: [
            //   "rgba(255, 99, 132, 0.6)",
            //   "rgba(54, 162, 235, 0.6)",
            //   "rgba(255, 206, 86, 0.6)",
            //   "rgba(75, 192, 192, 0.6)",
            //   "rgba(153, 102, 255, 0.6)",
            //   "rgba(255, 159, 64, 0.6)",
            // ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        hoverRadius: 0,
        hoverBackgroundColor: "black",
        plugins: {
          datalabels: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.dataset.label;
                let value = context.raw;
                return `${label}: $${value}k`;
              },
            },
          },
        },
        scales: {
          y: {
            grid: {
              color: "#8080802e",

              // display: false,
            },
            // beginAtZero: true,
            ticks: {
              callback: (value) => {
                return `$${value}k`;
              },
            },
          },
          x: {
            grid: {
              color: "#8080802e",

              // display: false,
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
      ProjectionVsActuslsChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);

  return (
    <div className="card h-100  mb-4" style={{ minHeight: "351px" }}>
      <div className="card-header bg-primary text-white">
        <h5>Projections vs Actuals</h5>
      </div>
      <div className="card-body h-100 center">
        <div
          className="dummy-graph"
          style={{ maxHeight: "250px", width: "100%" }}
        >
          <div className="chart">
            <canvas
              className="my-chart"
              id="ProjectionVsActualChart1"
              style={{ maxHeight: "250px", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectionVsActuals;
