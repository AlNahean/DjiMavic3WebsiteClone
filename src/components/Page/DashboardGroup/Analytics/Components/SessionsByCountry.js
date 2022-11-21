import React, { useState, useEffect } from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import { Chart, registerables } from "chart.js";

import papaparse from "papaparse";
import * as ChartGeo from "chartjs-chart-geo";

Chart.register(...registerables); //vvi must do

const targetCountries = [
  {
    name: "Bangladesh",
  },
  {
    name: "Switzerland",
  },
  {
    name: "Indonesia",
  },
];

const getTargetValue = (val) => {
  let a = targetCountries.filter((item) => item.name === val);
  if (a.length > 0) {
    return 10;
  } else {
    return 0;
  }
};

const SessionsByCountry = () => {
  let MyChart = "";
  let MyChart2 = "";
  let delayed = false;
  // useEffect(() => {
  //   const ctx2 = document
  //     .getElementById("SessionsByCountryChart1")
  //     .getContext("2d");
  //   const RevenewChart11 = new Chart(ctx2, {
  //     type: "bar",
  //     data: {
  //       labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  //       datasets: [
  //         {
  //           label: "Current Week",
  //           data: [10, 20, 15, 25, 20, 30, 20],
  //           backgroundColor: ["#727CF5"],

  //           // borderWidth: 4,
  //           // borderColor: "#727CF5",
  //           tension: 0.4,
  //         },
  //         // {
  //         //   label: "Previous Week",
  //         //   data: [4, 15, 10, 30, 15, 35, 25],
  //         //   backgroundColor: ["#0ACF97"],

  //         //   borderWidth: 4,
  //         //   borderColor: "#0ACF97",
  //         //   tension: 0.4,
  //         // },
  //       ],
  //     },
  //     options: {
  //       indexAxis: "y",
  //       hitRadius: 100,
  //       pointRadius: 5,
  //       hoverRadius: 5,

  //       plugins: {
  //         legend: {
  //           display: false,
  //         },
  //         datalabels: {
  //           display: false,
  //         },
  //         tooltip: {
  //           callbacks: {
  //             label: function (context) {
  //               // console.log(context.dataset, context);
  //               let label = context.dataset.label;
  //               let value = context.raw;
  //               return `${label}: $${value}k`;
  //             },
  //           },
  //         },
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           grid: {
  //             color: "#8080802e",

  //             display: false,
  //           },
  //           ticks: {
  //             callback: (value) => {
  //               return `$${value}k`;
  //             },
  //           },
  //         },
  //         x: {
  //           grid: {
  //             color: "#8080802e",
  //             display: false,
  //           },
  //         },
  //       },
  //       animation: {
  //         onComplete: () => {
  //           delayed = true;
  //         },
  //         delay: (context) => {
  //           let delay = 0;
  //           if (
  //             context.type === "data" &&
  //             context.mode === "default" &&
  //             !delayed
  //           ) {
  //             delay = context.dataIndex * 300 + context.datasetIndex * 100;
  //           }
  //           return delay;
  //         },
  //       },
  //     },
  //   });

  //   return () => {
  //     RevenewChart11.destroy(); // remove the initialized chart upon reRender
  //   };
  // }, []);

  const makeBarChart = (countries) => {
    let cachedCountries = [];
    for (let i = 0; i < 7; i++) {
      cachedCountries.push(countries[i * 15]);
    }
    let a = countries.slice(0, 10);
    console.log(cachedCountries);
    const ctx2 = document
      .getElementById("SessionsByCountryChart1")
      .getContext("2d");
    MyChart2 = new Chart(ctx2, {
      type: "bar",
      data: {
        labels: cachedCountries.map((item) => item.properties.name),
        // labels: ["a", "b"],

        datasets: [
          {
            label: "Current Week",
            data: cachedCountries.map((item) => item.value),
            backgroundColor: ["#727CF5"],

            // borderWidth: 4,
            // borderColor: "#727CF5",
            tension: 0.4,
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
        indexAxis: "y",
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
                // return `${label}: ${value} sessions`;
                return `sessions: ${value} `;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "#8080802e",

              display: false,
            },
            // ticks: {
            //   callback: (value) => {
            //     console.log(value, "value");
            //     return `${value} `;
            //   },
            // },
          },
          x: {
            ticks: {
              callback: (value) => {
                return `${value} `;
              },
            },
            grid: {
              color: "#8080802e",
              display: false,
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
  const makeWorldMap = (countries) => {
    MyChart = new Chart(
      document.getElementById("SessionsByCountryWorldMap1").getContext("2d"),
      {
        type: "choropleth",
        data: {
          labels: countries.map((d) => d.properties.name),
          datasets: [
            {
              hoverBackgroundColor: "orange",
              // borderColor: "grey",
              // outlineBackgroundColor: "#e3eaef",
              // outlineBorderColor: "#e3eaef",
              // // backgroundColor: "#3755dd",
              // backgroundColor: "#e3eaef",
              // pointBorderColor: "#727df58a",
              // pointBorder: 8,
              // pointRadius: 8,
              // pointHoverRadius: 12,
              // borderWidth: 1,
              label: "Countries",
              data: countries.map((d) => {
                // console.log(d);
                return {
                  feature: d,
                  // value: getTargetValue(d.properties.name),
                  value: +d.value,
                };
              }),
            },
          ],
        },
        options: {
          // backgroundColor: "#e3eaef",
          // showOutline: true,
          // showGraticule: true,
          plugins: {
            datalabels: {
              display: false,
              formatter: (v) => {
                return v.feature.properties.name;
              },
            },
            legend: {
              display: false,
            },
            // tooltip: {
            //   callbacks: {
            //     label: function (context) {
            //       // console.log(context.dataset, context);
            //       // let label = context.dataset.label;
            //       let value = context.raw.feature.properties.name;
            //       // return `${label}: ${value} sessions`;
            //       return `${value}`;
            //     },
            //   },
            // },
          },
          scales: {
            xy: {
              projection: "naturalEarth1",
            },
            color: {
              // interpolate: (v) => {
              //   return "#f7f8fc";
              // },

              interpolate: "red",
            },
            legend: {
              // display: false,// didnt work
              position: "bottom-left",
              title: {
                color: "red",
              },
            },
          },
        },
      }
    );
  };
  const activateChart = async () => {
    try {
      let a = [];
      //fetch country data
      let fetchedAtlasData = await fetch(
        "https://unpkg.com/world-atlas/countries-50m.json"
      );
      //parsed country data
      let parsedAtlasData = await fetchedAtlasData.json();

      const countries = ChartGeo.topojson.feature(
        parsedAtlasData,
        parsedAtlasData.objects.countries
      ).features;

      let valueAdded = countries
        .map((item) => {
          return { ...item, value: (Math.random() * 1000).toFixed(0) };
        })
        .sort((a, b) => b.value - a.value);

      await makeWorldMap(valueAdded);
      await makeBarChart(valueAdded);
      console.log(valueAdded);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let RevenewByLocation1 = "";
    activateChart(RevenewByLocation1);

    // fetch("https://unpkg.com/world-atlas/countries-50m.json")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     const countries = ChartGeo.topojson.feature(
    //       data,
    //       data.objects.countries
    //     ).features;
    //     console.log(countries.map((d) => d.properties.name));

    //     RevenewByLocation1 = new Chart(
    //       document
    //         .getElementById("SessionsByCountryWorldMap1")
    //         .getContext("2d"),
    //       {
    //         type: "choropleth",
    //         data: {
    //           labels: countries.map((d) => d.properties.name),
    //           datasets: [
    //             {
    //               // outlineBackgroundColor: "#e3eaef",
    //               // outlineBorderColor: "#e3eaef",
    //               // // backgroundColor: "#3755dd",
    //               // backgroundColor: "#e3eaef",
    //               // pointBorderColor: "#727df58a",
    //               // pointBorder: 8,
    //               // pointRadius: 8,
    //               // pointHoverRadius: 12,
    //               // borderWidth: 1,
    //               label: "Countries",
    //               data: countries.map((d) => ({
    //                 feature: d,
    //                 value: getTargetValue(d.properties.name),
    //               })),
    //             },
    //           ],
    //         },
    //         options: {
    //           // backgroundColor: "#e3eaef",
    //           // showOutline: true,
    //           // showGraticule: true,
    //           plugins: {
    //             legend: {
    //               display: false,
    //             },
    //           },
    //           scales: {
    //             xy: {
    //               projection: "naturalEarth1",
    //             },
    //           },
    //         },
    //       }
    //     );
    //   });
    return () => {
      MyChart.destroy(); // remove the initialized chart upon reRender
      MyChart2.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      {" "}
      <div className=" card mb-3" style={{ height: "100%" }}>
        {getCardHeader("SESSIONS BY COUNTRY")}
        <div className="card-body">
          <div className=" row">
            <div className=" col-12 col-xl-7">
              <div
                className="dummy-graph"
                style={{ maxHeight: "100%", width: "100%" }}
              >
                <div className="chart">
                  <canvas
                    className="my-chart"
                    id="SessionsByCountryWorldMap1"
                    style={{ maxHeight: "300px", width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className=" col-12 col-xl-5 center">
              <div
                className="dummy-graph"
                style={{ maxHeight: "360px", width: "100%" }}
              >
                <div className="chart">
                  <canvas
                    className="my-chart"
                    id="SessionsByCountryChart1"
                    style={{ maxHeight: "300px", width: "100%" }}
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

export default SessionsByCountry;
