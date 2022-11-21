import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

import { Chart, registerables } from "chart.js";

import { BsCurrencyBitcoin } from "react-icons/bs";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
Chart.register(...registerables); //vvi must do
const getViewsPerMinuteChartData = () => {
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
  ];
  return ViewsPerMinuteChartData;
};

const WalletWidget = ({ item }) => {
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
  let walletChart1 = "";
  const { id, icon, income, progress, rate } = item;
  let WalletWidgetId = `WalletWidget${id}`;

  const getState = (progress) => {
    let f = Math.sign(progress);

    if (f === 1) {
      return true;
    } else if (f === -1) {
      return false;
    } else {
      return true;
    }
  };
  const MakeBarChart = async () => {
    let ViewsPerMinuteChartData = await getViewsPerMinuteChartData();
    const ctx2 = document.getElementById(WalletWidgetId).getContext("2d");
    walletChart1 = new Chart(ctx2, {
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
            backgroundColor: ["#727CF5"],

            borderWidth: 0,
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
              title: () => null,
              label: function (context) {
                // console.log(context.dataset, context);
                // let label = context.dataset.label;
                let value = context.raw;
                return `${value}`;
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
              beginAtZero: true,
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
  };
  const MakeLineChart = async () => {
    let ViewsPerMinuteChartData = await getViewsPerMinuteChartData();
    const ctx2 = document.getElementById(WalletWidgetId).getContext("2d");
    walletChart1 = new Chart(ctx2, {
      type: "line",
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
            backgroundColor: ["#727CF5"],

            borderWidth: 2,
            borderColor: "#727CF5",
            tension: 0.4,
          },
        ],
      },
      plugins: [tooltipline],
      options: {
        hitRadius: 100,
        pointRadius: 0,
        hoverRadius: 0,

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
            position: "nearest",
            callbacks: {
              // title: function (data) {
              //   // console.log(data);
              //   //Return value for title
              //   let title = data[0].label;
              //   return `${title} min ago`;
              // },
              title: () => null,
              label: function (context) {
                // console.log(context.dataset, context);
                // let label = context.dataset.label;
                let value = context.raw;
                return `${value}`;
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
  };
  const makeChart = async () => {
    console.log(id);
    if (id === 2) {
      MakeBarChart();
    } else {
      MakeLineChart();
    }
  };

  let delayed = false;
  useEffect(() => {
    makeChart();

    return () => {
      // console.log(walletChart1);
      walletChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      <div className=" card mb-3 wallet-widget">
        <div className=" card-body ">
          <div className=" d-flex justify-content-between center">
            <div className=" d-flex h-100 center">
              <div className=" currency-icon center me-2">{icon}</div>
              <div>
                <h5 className=" mb-0 text-primary">${income}</h5>
                <p className=" mb-0 text-muted">
                  <small>
                    {getState(progress) ? (
                      <FaLongArrowAltUp style={{ color: "green" }} />
                    ) : (
                      <FaLongArrowAltDown style={{ color: "red" }} />
                    )}
                    {progress}% This Week
                  </small>
                </p>
              </div>
            </div>

            {/* Menu Spase Currently not implemented */}
            <div></div>
          </div>
          <div className=" d-flex  flex-column flex-sm-row justify-content-between mt-2  ">
            <div>
              <h5 className=" mb-0 text-muted">Rate</h5>
              <p className=" mb-2 mb-sm-0">{rate}</p>
            </div>
            <div className=" center">
              <div className="dummy-graph wallet-widget-size">
                <div className="chart wallet-widget-size center">
                  <canvas
                    className="my-chart"
                    id={WalletWidgetId}
                    style={{ height: "60px" }}
                    height="60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletWidget;
