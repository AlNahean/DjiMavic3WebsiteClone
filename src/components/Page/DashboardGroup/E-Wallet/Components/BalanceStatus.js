import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

const getMultiplyPlus = (i) => {
  return Math.random() * 100 + (Math.random() - 0.5) * 100;
};

const BalanceStatusChartData = [];
for (let i = 0; i < 100; i++) {
  if (i < 60) {
    BalanceStatusChartData.push({
      number: getMultiplyPlus(i) + i * 10 + 100,
      title: `Sprint ${i}`,
      id: i,
    });
  } else {
    BalanceStatusChartData.push({
      number: (getMultiplyPlus(i) + i * 10 + 10) * (1 + ((i - 60) / 100) * 6),
      title: `Sprint ${i}`,
      id: i,
    });
  }
}
const BalanceStatus = () => {
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

        ctx.beginPath();
        ctx.setLineDash([5, 7]);
        ctx.moveTo(chart.chartArea.right, chart.chartArea.left);
        // ctx.lineTo(activePoint.element.y, chart.chartArea.right);
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
    const ctx2 = document.getElementById("BalanceStatus1").getContext("2d");
    var gradient = ctx2.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(0, 195, 140,1)");
    gradient.addColorStop(1, "rgba(0, 195, 140,0)");
    const RevenewChart1 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: BalanceStatusChartData.map((item) => item.id),

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
            label: "Previous Week",
            data: BalanceStatusChartData.map((item) => item.number),
            fill: true,
            backgroundColor: gradient,

            borderWidth: 1,
            borderColor: "#0ACF97",
            tension: 0.4,
          },
        ],
      },
      plugins: [tooltipline],
      options: {
        // backgroundColor: gradient,
        hitRadius: 100,
        pointRadius: 0,
        hoverRadius: 0,
        pointHoverRadius: 0,
        hoverBackgroundColor: "#0ACF97",

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
        },
        // animation: {
        //   onComplete: () => {
        //     delayed = true;
        //   },
        //   delay: (context) => {
        //     let delay = 0;
        //     if (
        //       context.type === "data" &&
        //       context.mode === "default" &&
        //       !delayed
        //     ) {
        //       delay = context.dataIndex * 300 + context.datasetIndex * 100;
        //     }
        //     return delay;
        //   },
        // },
      },
    });

    return () => {
      RevenewChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("Balance Status")}
        <div className=" card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "440px", width: "100%" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="BalanceStatus1"
                style={{ maxHeight: "416px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceStatus;
