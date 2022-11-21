import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
// import ChartJsDataLabels from "chartjs-plugin-datalabels";

import papaparse from "papaparse";
import * as ChartGeo from "chartjs-chart-geo";

Chart.register(...registerables); //vvi must do
// Chart.register(ChartJsDataLabels); //vvi must do

const RevenewByLocation = () => {
  useEffect(() => {
    let RevenewByLocation1 = "";
    Promise.all([
      fetch("https://unpkg.com/world-atlas@2.0.2/countries-50m.json").then(
        (r) => r.json()
      ),
      fetch(
        "https://gist.githubusercontent.com/mbostock/9535021/raw/928a5f81f170b767162f8f52dbad05985eae9cac/us-state-capitals.csv"
      ) //city-csv
        .then((r) => r.text())
        .then(
          (d) => papaparse.parse(d, { dynamicTyping: true, header: true }).data
        ), //papaparse
    ]).then(([us, data]) => {
      const states = ChartGeo.topojson.feature(
        us,
        us.objects.countries
      ).features;

      // console.log(us, data);

      // console.log(data.map((d) => Object.assign(d, {value: 2})));
      let myData = [
        { name: "New York", latitude: 40.6943, longitude: -73.9249, value: 75 },
        {
          name: "Mexico City",
          latitude: 19.4333,
          longitude: -99.1333,
          value: 39,
        },
        { name: "Mumbai", latitude: 18.9667, longitude: 72.8333, value: 25 },
        {
          name: "Tokyo",
          latitude: 35.377716,
          longitude: 139.56465464,
          value: 61,
        },
        { name: "0", latitude: -150, longitude: 0, value: 26 },
      ];
      RevenewByLocation1 = new Chart(
        document.getElementById("RevenewByLocation1").getContext("2d"),
        {
          type: "bubbleMap",
          data: {
            labels: myData.map((d) => d.name),
            datasets: [
              {
                outline: states,
                showOutline: true,
                outlineBackgroundColor: "#e3eaef",
                outlineBorderColor: "#e3eaef",
                backgroundColor: "#3755dd",
                // outlineColor: "red",
                // borderRadius: 5,
                //   backgroundColor: 'rgba(247, 151, 35, 0.5)',
                //   borderColor: 'rgba(247, 151, 35, 1)',
                //   pointBackgroundColor: 'rgba(247, 151, 35, 1)',
                pointBorderColor: "#727df58a",
                pointBorder: 8,
                pointRadius: 8,
                pointHoverRadius: 12,
                borderWidth: 5,
                //   pointRadius: "40px",
                //   data: data.map((d) => Object.assign(d, {value: 2})),
                data: myData,
              },
            ],
          },
          options: {
            // showOutline: true,
            // showGraticule: true,
            backgroundColor: "red",
            plugins: {
              legend: {
                display: false,
              },
              // datalabels: {
              //   display: false,
              //   formatter: (dp, ctx, b) => ctx.dataset.label,
              // },
              // datalabels: {
              //   display: false,
              //   color: "blue",
              //   labels: {
              //     title: {
              //       font: {
              //         weight: "bold",
              //       },
              //     },
              //     value: {
              //       color: "green",
              //     },
              //   },
              //   formatter: (value, context) => {
              //     let display;
              //     return display;
              //   },
              // },
              tooltip: {
                // enabled: false
                // callbacks: {
                //   label: (context) => {
                //     console.log(label);
                //     // console.log(context);
                //     return "label";
                //   },
                // },
                // callbacks: (value) => {
                //   return "$" + value + "m";
                // },
                callbacks: {
                  label: function (context) {
                    // console.log(context.dataset, context);

                    let city = context.raw.name;
                    let value = context.raw.value;
                    return `${city}: $${value}k`;
                  },
                },
              },
              // legend: {
              //   display: false,
              // },

              datalabels: {
                display: false,
                align: "top",
                formatter: (v) => {
                  // console.log(v, "fjhsdgj");

                  return v.name;
                },
              },
            },
            scales: {
              xy: {
                projection: "naturalEarth1",
              },
              r: {
                size: [1, 100],
              },
            },
          },
        }
      );
    });
    return () => {
      RevenewByLocation1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);

  return (
    <div className="card h-100">
      <div className="card-header bg-primary text-white">
        <h5>Revenew by Location</h5>
      </div>
      <div
        className="card-body d-flex flex-column justify-content-evenly h-100 revenew-by-location-h"
        // style={{ minHeight: "555px" }}
      >
        <div
          className="dummy-graph"
          style={{ maxHeight: "300px", width: "100%" }}
        >
          <div className="chart">
            <canvas
              className="my-chart"
              id="RevenewByLocation1"
              style={{ maxHeight: "300px", width: "100%" }}
            />
          </div>
        </div>

        <div className="d-flex flex-column w-100 mt-4 text-muted">
          <div className="progress-w-percent">
            <div>
              <h5 className="mt-0 mb-1 fw-normal">New York</h5>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
            <h5
              className="progress-value fw-bold w-100"
              style={{ marginBottom: "0px" }}
            >
              72k
            </h5>
          </div>
          {/*  */}
          <div className="progress-w-percent">
            <div>
              <h5 className="mt-0 mb-1 fw-normal">Mexico City</h5>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
            <h5
              className="progress-value fw-bold w-100"
              style={{ marginBottom: "0px" }}
            >
              39k
            </h5>
          </div>
          {/*  */}
          <div className="progress-w-percent">
            <div>
              <h5 className="mt-0 mb-1 fw-normal">Mumbai</h5>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
            <h5
              className="progress-value fw-bold w-100"
              style={{ marginBottom: "0px" }}
            >
              25k
            </h5>
          </div>
          {/*  */}
          <div className="progress-w-percent">
            <div>
              <h5 className="mt-0 mb-1 fw-normal">Tokyo</h5>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
            <h5
              className="progress-value fw-bold w-100"
              style={{ marginBottom: "0px" }}
            >
              61k
            </h5>
          </div>
          {/* <h5 class="mt-0 mb-1 fw-normal">Mexico City</h5>
          <div class="progress mb-2" style="height: 5px">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 56%"
            ></div>
          </div>
          <h5 class="mt-0 mb-1 fw-normal">Mumbai</h5>
          <div class="progress mb-2" style="height: 5px">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 73%"
            ></div>
          </div>
          <h5 class="mt-0 mb-1 fw-normal">Tokyo</h5>
          <div class="progress mb-2" style="height: 5px">
            <div
              class="progress-bar bg-primary"
              role="progressbar"
              style="width: 65%"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RevenewByLocation;
