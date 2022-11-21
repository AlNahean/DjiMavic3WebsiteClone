import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables); //vvi must do

let TasksOverviewChartData = [];

for (let i = 0; i < 24; i++) {
  TasksOverviewChartData.push({
    number: (Math.random() * 100).toFixed(0),
    title: `Sprint ${i}`,
  });
}
const TasksOverview = () => {
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
    const ctx2 = document.getElementById("TasksOverview1").getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: TasksOverviewChartData.map((item) => item.title),

        datasets: [
          {
            label: "This Year",
            data: TasksOverviewChartData.map((item) => item.number),
            backgroundColor: ["#727CF5"],
          },
        ],
      },
      options: {
        responsive: true,
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
            grid: {
              display: false,
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
      <div className=" card mb-3 w-100">
        {getCardHeader("Tasks Overview")}
        <div className=" card-body">
          <div
            className="dummy-graph"
            style={{ maxHeight: "230px", width: "auto" }}
          >
            <div className="chart">
              <canvas
                className="my-chart"
                id="TasksOverview1"
                style={{ maxHeight: "200px", width: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TasksOverview;
