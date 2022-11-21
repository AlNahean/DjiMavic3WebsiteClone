import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

const SessionOverview = () => {
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
  let delayed = false;
  useEffect(() => {
    const ctx2 = document.getElementById("SessionOverview1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: [
          "1 Jun",
          "2 Jun",
          "3 Jun",
          "4 Jun",
          "5 Jun",
          "6 Jun",
          "7 Jun",
          "8 Jun",
          "9 Jun",
          "10 Jun",
          "11 Jun",
          "12 Jun",
          "13 Jun",
          "14 Jun",
          "15 Jun",
        ],

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
            label: "Sessions",
            data: [4, 15, 10, 30, 15, 35, 23, 34, 12, 32, 23, 34, 43, 34, 37],
            backgroundColor: ["#0ACF97"],

            borderWidth: 4,
            borderColor: "#0ACF97",
            tension: 0.4,
          },
        ],
      },
      plugins: [tooltipline],
      options: {
        // hitRadius: 100,
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
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (context) {
                // console.log(context.dataset, context);
                let label = context.dataset.label;
                let value = context.raw;
                return `${label}: ${value}k`;
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
                return `${value}k`;
              },
            },
          },
          x: {
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
      <div className=" card mb-3" style={{ height: "493px" }}>
        {getCardHeader("SessionOverview")}

        <div className=" alert alert-warning m-3 alert-dismissible ">
          <button type=" button" className=" btn-close"></button>
          Property HY1xx is not receiving hits. Either your site is not
          receiving any sessions or it is not tagged correctly.
        </div>
        <div className="card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "360px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="SessionOverview1"
                style={{ maxHeight: "300px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionOverview;
