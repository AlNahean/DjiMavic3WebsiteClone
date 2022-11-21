import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

const Revenew = () => {
  let delayed = false;

  useEffect(() => {
    const tooltipline = {
      id: "tooltipline",
      beforeDraw: (chart) => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const ctx = chart.ctx;
          ctx.save();
          const activePoint = chart.tooltip._active[0];
          ctx.beginPath();
          ctx.setLineDash([5, 7]);
          ctx.moveTo(activePoint.element.x, chart.chartArea.top);
          ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#8391a2";
          ctx.stroke();
          ctx.restore();

          console.log("act");
        }
        // console.log(chart);
      },
    };
    const ctx2 = document.getElementById("Revenew1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

        datasets: [
          {
            label: "Current Week",
            data: [10, 20, 15, 25, 20, 30, 20],
            backgroundColor: ["#727CF5"],
            // backgroundColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            borderWidth: 4,
            borderColor: "#727CF5",
            tension: 0.4,
          },
          {
            label: "Previous Week",
            data: [0, 15, 10, 30, 15, 35, 25],
            backgroundColor: ["#0ACF97"],
            // backgroundColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            // borderColor: [
            //   "rgba(255, 99, 132, 1)",
            //   "rgba(54, 162, 235, 1)",
            //   "rgba(255, 206, 86, 1)",
            //   "rgba(75, 192, 192, 1)",
            //   "rgba(153, 102, 255, 1)",
            //   "rgba(255, 159, 64, 1)",
            // ],
            borderWidth: 4,
            borderColor: "#0ACF97",
            tension: 0.4,
          },
        ],
      },
      plugins: [tooltipline],
      options: {
        hitRadius: 100,
        pointRadius: 5,
        hoverRadius: 5,
        // plugins: {
        //   title: {
        //     display: true,
        //     text: "Grid Line Settings",
        //   },
        // },
        plugins: {
          datalabels: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
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
            grid: {
              color: "#8080802e",
            },
          },
          // y: {
          //   grid: {
          //     drawBorder: false,
          //     color: function(context) {
          //       if (context.tick.value > 0) {
          //         return Utils.CHART_COLORS.green;
          //       } else if (context.tick.value < 0) {
          //         return Utils.CHART_COLORS.red;
          //       }
          //       return '#000000';
          //     },
          //   },
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
    <div className="card h-100">
      <div className="card-header bg-primary text-white">
        <h5>Revenew</h5>
      </div>
      <div
        className="card-body h-100 revenew-h"
        //   style={{ minHeight: "550px" }}
      >
        <div className=" text-center weekly-pay mb-2">
          <div className="col-6">
            <p className="mt-3 mb-0">Current Week</p>
            <h2 className="mb-3">$63,000</h2>
          </div>
          <div className="col-6">
            <p className="mt-3 mb-0">Previous Week</p>
            <h2 className="mb-3">$43,000</h2>
          </div>
        </div>
        <div
          className=" center"
          // style={{ minHeight: "420px" }}
        >
          <div
            className="dummy-graph"
            style={{ maxHeight: "460px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="Revenew1"
                style={{ maxHeight: "400px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenew;
